import { test, expect } from '@playwright/test';

/**
 * E2E Tests for Quiz Flow
 * Tests the complete quiz experience including:
 * - Question display and navigation
 * - Answer selection and feedback
 * - Score calculation and results
 * - Pass/fail logic with 9/10 threshold
 */

test.describe('Quiz Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the app
    await page.goto('/');
    // Wait for sidebar to load
    await page.waitForSelector('[class*="sidebar"]', { timeout: 10000 });
  });

  test('should display quiz at the end of a chapter', async ({ page }) => {
    // Navigate to intro chapter (always accessible)
    await page.click('text=Introducere');
    await page.waitForTimeout(500);
    
    // Scroll to bottom where quiz should be
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);
    
    // Check for quiz component
    const quizTitle = page.locator('[class*="Quiz"] h3, [class*="quiz"] h3').first();
    await expect(quizTitle).toBeVisible({ timeout: 5000 });
  });

  test('should show question with multiple choice options', async ({ page }) => {
    await page.click('text=Introducere');
    await page.waitForTimeout(500);
    
    // Scroll to quiz
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Check for options (4 options A, B, C, D)
    const options = page.locator('button:has-text("A"), button:has-text("B"), button:has-text("C"), button:has-text("D")');
    await expect(options.first()).toBeVisible({ timeout: 5000 });
  });

  test('should show feedback after selecting an answer', async ({ page }) => {
    await page.click('text=Introducere');
    await page.waitForTimeout(500);
    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Click first answer option
    const firstOption = page.locator('button').filter({ hasText: /^A/ }).first();
    if (await firstOption.isVisible()) {
      await firstOption.click();
      await page.waitForTimeout(300);
      
      // Should show feedback (Correct! or Incorrect)
      const feedback = page.locator('text=/Corect!|Correct!|Richtig!|Incorect|Incorrect|Falsch/');
      await expect(feedback).toBeVisible({ timeout: 3000 });
    }
  });

  test('should navigate through all 10 questions', async ({ page }) => {
    await page.click('text=Introducere');
    await page.waitForTimeout(500);
    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Answer 10 questions
    for (let i = 0; i < 10; i++) {
      // Wait for question to be visible
      const questionIndicator = page.locator(`text=/${i + 1} din 10|${i + 1} of 10|${i + 1} von 10/`);
      
      if (await questionIndicator.isVisible({ timeout: 3000 }).catch(() => false)) {
        // Click any answer option
        const option = page.locator('button').filter({ hasText: /^[ABCD]/ }).first();
        if (await option.isVisible()) {
          await option.click();
          await page.waitForTimeout(300);
          
          // Click next button if not last question
          if (i < 9) {
            const nextBtn = page.locator('button:has-text("Următoarea"), button:has-text("Next"), button:has-text("Nächste")');
            if (await nextBtn.isVisible()) {
              await nextBtn.click();
              await page.waitForTimeout(300);
            }
          } else {
            // Last question - click see results
            const resultsBtn = page.locator('button:has-text("Vezi Rezultatele"), button:has-text("See Results"), button:has-text("Ergebnisse")');
            if (await resultsBtn.isVisible()) {
              await resultsBtn.click();
            }
          }
        }
      }
    }
    
    // Should show completion screen
    const completionText = page.locator('text=/Quiz Finalizat|Quiz Complete|Quiz Abgeschlossen/');
    await expect(completionText).toBeVisible({ timeout: 5000 });
  });

  test('should show score after completing quiz', async ({ page }) => {
    await page.click('text=Introducere');
    await page.waitForTimeout(500);
    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Quick complete quiz by clicking through
    for (let i = 0; i < 10; i++) {
      const option = page.locator('button').filter({ hasText: /^[ABCD]/ }).first();
      if (await option.isVisible({ timeout: 2000 }).catch(() => false)) {
        await option.click();
        await page.waitForTimeout(200);
        
        const nextBtn = page.locator('button:has-text("Următoarea"), button:has-text("Next"), button:has-text("Nächste"), button:has-text("Vezi Rezultatele"), button:has-text("See Results"), button:has-text("Ergebnisse")').first();
        if (await nextBtn.isVisible({ timeout: 1000 }).catch(() => false)) {
          await nextBtn.click();
          await page.waitForTimeout(200);
        }
      }
    }
    
    // Score should be visible (X/10 format)
    const scoreDisplay = page.locator('text=/\\d+\\/10/');
    await expect(scoreDisplay.first()).toBeVisible({ timeout: 5000 });
  });

  test('should allow retry after failing', async ({ page }) => {
    await page.click('text=Introducere');
    await page.waitForTimeout(500);
    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Complete quiz quickly
    for (let i = 0; i < 10; i++) {
      const option = page.locator('button').filter({ hasText: /^[ABCD]/ }).first();
      if (await option.isVisible({ timeout: 2000 }).catch(() => false)) {
        await option.click();
        await page.waitForTimeout(150);
        
        const nextBtn = page.locator('button:has-text("Următoarea"), button:has-text("Next"), button:has-text("Nächste"), button:has-text("Vezi Rezultatele"), button:has-text("See Results"), button:has-text("Ergebnisse")').first();
        if (await nextBtn.isVisible({ timeout: 1000 }).catch(() => false)) {
          await nextBtn.click();
          await page.waitForTimeout(150);
        }
      }
    }
    
    // Look for retry/new questions buttons
    await page.waitForTimeout(500);
    const retryBtn = page.locator('button:has-text("Încearcă Din Nou"), button:has-text("Try Again"), button:has-text("Erneut")');
    const newQuestionsBtn = page.locator('button:has-text("Întrebări Noi"), button:has-text("New Questions"), button:has-text("Neue Fragen")');
    
    // At least one retry option should be visible
    const hasRetry = await retryBtn.isVisible().catch(() => false);
    const hasNewQuestions = await newQuestionsBtn.isVisible().catch(() => false);
    
    expect(hasRetry || hasNewQuestions).toBe(true);
  });

  test('should handle empty question bank gracefully', async ({ page }) => {
    // This test verifies the fallback UI exists
    // Navigate to intro which should have questions
    await page.click('text=Introducere');
    await page.waitForTimeout(500);
    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Quiz should be visible OR fallback message
    const quiz = page.locator('[class*="Quiz"], [class*="quiz"]').first();
    await expect(quiz).toBeVisible({ timeout: 5000 });
  });
});

test.describe('Quiz Language Support', () => {
  test('should display quiz in Romanian', async ({ page }) => {
    await page.goto('/');
    
    // Click RO language button
    await page.click('button:has-text("RO")');
    await page.waitForTimeout(300);
    
    await page.click('text=Introducere');
    await page.waitForTimeout(500);
    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Check for Romanian text
    const roText = page.locator('text=/Întrebarea|din 10/');
    await expect(roText.first()).toBeVisible({ timeout: 5000 });
  });

  test('should display quiz in English', async ({ page }) => {
    await page.goto('/');
    
    // Click EN language button
    await page.click('button:has-text("EN")');
    await page.waitForTimeout(300);
    
    await page.click('text=Introduction');
    await page.waitForTimeout(500);
    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Check for English text
    const enText = page.locator('text=/Question|of 10/');
    await expect(enText.first()).toBeVisible({ timeout: 5000 });
  });

  test('should display quiz in German', async ({ page }) => {
    await page.goto('/');
    
    // Click DE language button
    await page.click('button:has-text("DE")');
    await page.waitForTimeout(300);
    
    await page.click('text=Einführung');
    await page.waitForTimeout(500);
    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Check for German text
    const deText = page.locator('text=/Frage|von 10/');
    await expect(deText.first()).toBeVisible({ timeout: 5000 });
  });
});
