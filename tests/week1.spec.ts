import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/)
})

test('check dropdown list - option 1', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/')

  // Click the get started link.
  await page.getByRole('link', { name: 'Dropdown' }).click()

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { level: 3 })).toBeVisible()
  //await page.getByLabel('Please select an option').selectOption('Option 1')
})
