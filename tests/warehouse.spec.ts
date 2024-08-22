import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.thewarehouse.co.nz/')
})

test.describe('Warehouse Ecommerce - Basic Playwright Week 2', () => {
  test('Search item', async ({ page }) => {
    const searchInput = page.getByPlaceholder('I’m looking for…')
    await searchInput.fill('air frayer')
    await searchInput.press('Enter')

    const searchResult = await page.getByText('Search results for')

    await expect(searchResult).toContainText('air frayer')
  })
})
