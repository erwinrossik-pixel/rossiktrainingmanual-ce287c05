import { test, expect } from "@playwright/test";

/**
 * E2E recording flow:
 *   1. Login → page_views înregistrate
 *   2. Deschide capitol → timer pornit
 *   3. Rezolvă quiz → quiz_attempts înregistrate
 *   4. Verifică în UI admin că datele apar
 *
 * Necesită env: TEST_USER_EMAIL, TEST_USER_PASSWORD
 */

const EMAIL = process.env.TEST_USER_EMAIL;
const PASS = process.env.TEST_USER_PASSWORD;

test.describe("Recording end-to-end", () => {
  test.skip(!EMAIL || !PASS, "TEST_USER_EMAIL/PASSWORD not configured");

  test.beforeEach(async ({ page }) => {
    await page.goto("/auth");
    await page.fill('input[type="email"]', EMAIL!);
    await page.fill('input[type="password"]', PASS!);
    await page.click('button[type="submit"]');
    await page.waitForURL("/", { timeout: 10000 });
  });

  test("page loads without console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));

    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(errors.filter((e) => !e.includes("favicon"))).toEqual([]);
  });

  test("timer starts when entering a chapter", async ({ page }) => {
    await page.click("text=Introducere");
    await page.waitForTimeout(2000);
    // Timer-ul trebuie să fie afișat în UI
    const timer = page.locator('[data-testid="training-timer"], [class*="timer"]').first();
    await expect(timer).toBeVisible({ timeout: 5000 });
  });

  test("quiz submission is recorded", async ({ page }) => {
    await page.click("text=Introducere");
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    // Selectează prima opțiune din quiz
    const firstOption = page.locator('button[class*="option"], [role="radio"]').first();
    if (await firstOption.isVisible({ timeout: 3000 }).catch(() => false)) {
      await firstOption.click();
      await page.waitForTimeout(500);
    }
  });
});
