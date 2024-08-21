import { test, expect } from '@playwright/test'

test.describe('Kmart Ecommerce - Basic Playwright Week 2', () => {
  test('Validate title', async ({ page }) => {
    await page.goto('https://www.kmart.co.nz/')

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Kmart New Zealand/)
  })

  test('Navigate to Product category using dropdown menu', async ({ page }) => {
    await page.goto('https://www.kmart.co.nz/')

    await page.locator('[href*="#/home-and-living/"]').click()
  })
})
