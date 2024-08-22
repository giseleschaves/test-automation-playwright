import { test, expect } from '@playwright/test'

test.describe('Kmart Ecommerce - Basic Playwright Week 2', () => {
  test('Validate title', async ({ page }) => {
    await page.goto('https://www.kmart.co.nz/')

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Kmart New Zealand/)
  })

  test('Navigate to Product category using dropdown menu', async ({ page }) => {
    await page.goto('https://www.kmart.co.nz/category/clearance/')

    // const menuItem = page
    // .getByRole('link', { name: 'Clearance' })
    // .getByTestId('levelzero')
    // .locator('[href*="/clearance/"]')
    // menuItem.click()

    const filterButton = await page.getByTestId('filter-button')
    filterButton.click
  })
})
