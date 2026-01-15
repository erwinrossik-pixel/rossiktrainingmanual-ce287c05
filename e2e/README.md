# E2E Tests for Rossik Training Manual

This directory contains end-to-end tests using Playwright for testing the complete user experience.

## Test Suites

### 1. Quiz Flow (`quiz-flow.spec.ts`)
Tests the complete quiz experience:
- Question display and navigation
- Answer selection and feedback (correct/incorrect)
- Score calculation and results display
- Pass/fail logic (9/10 threshold)
- Retry and new questions functionality
- Multi-language support (RO, DE, EN)
- Empty question bank fallback

### 2. Gating Flow (`gating-flow.spec.ts`)
Tests the sequential chapter unlock system:
- Guest user access (all chapters accessible)
- Visual indicators (lock icons, checkmarks, score badges)
- Chapter navigation via sidebar
- Progress dashboard functionality
- Chapter sections organization
- Mobile responsiveness

## Running Tests

### Install Playwright browsers
```bash
npx playwright install
```

### Run all tests
```bash
npx playwright test
```

### Run specific test file
```bash
npx playwright test e2e/quiz-flow.spec.ts
```

### Run tests in UI mode (interactive)
```bash
npx playwright test --ui
```

### Run tests headed (see browser)
```bash
npx playwright test --headed
```

### View test report
```bash
npx playwright show-report
```

## Test Configuration

Configuration is in `playwright.config.ts`:
- **Base URL**: `http://localhost:8080`
- **Browser**: Chromium (Desktop Chrome)
- **Retries**: 2 on CI, 0 locally
- **Screenshots**: On failure only
- **Traces**: On first retry

## Writing New Tests

### Test Structure
```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should do something', async ({ page }) => {
    // Arrange
    await page.click('text=Button');
    
    // Act
    await page.fill('input', 'value');
    
    // Assert
    await expect(page.locator('.result')).toBeVisible();
  });
});
```

### Locator Best Practices
1. Prefer text locators: `page.locator('text=Button Text')`
2. Use test IDs when needed: `page.locator('[data-testid="my-element"]')`
3. Avoid brittle selectors based on CSS classes that may change

### Multi-language Testing
The app supports RO, DE, EN. Use regex patterns for language-agnostic tests:
```typescript
const text = page.locator('text=/Corect|Correct|Richtig/');
```

## CI Integration

Tests run automatically on push/PR. The web server starts automatically via the `webServer` config.

## Troubleshooting

### Tests timing out
- Increase timeout in specific tests: `test.setTimeout(60000)`
- Check if server is running: `npm run dev`

### Element not found
- Add explicit waits: `await page.waitForSelector('.element')`
- Use `{ timeout: 10000 }` on expect assertions

### Flaky tests
- Add `await page.waitForTimeout(300)` for animations
- Use `await expect(...).toBeVisible()` before interactions
