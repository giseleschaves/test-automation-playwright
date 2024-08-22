import { test, expect } from '@playwright/test'

test.describe('Exercises week 2', () => {
  test('Validate Short course application ', async ({ page }) => {
    await page.goto('https://devacademy.co.nz/testing-automation/')

    await page.getByText('Testing Automation Essentials').click()

    await expect(page.getByText('Apply now')).toBeEnabled()
  })

  test('Validate workshop course ', async ({ page }) => {
    await page.goto('https://devacademy.co.nz/testing-automation/')

    await page.getByText('Intro to Automation Testing').click()

    await expect(page.getByText('Register now')).toBeEnabled()
  })

  test('Validate custom training ', async ({ page }) => {
    await page.goto('https://devacademy.co.nz/testing-automation/')

    await page.getByText('Contact us to discuss').click()

    await expect(page.locator('#gform_submit_button_1')).toBeEnabled()
  })

  test('Validade get in touch - required fields', async ({ page }) => {
    await page.goto('https://devacademy.co.nz/contact/')
    await page.locator('#gform_submit_button_1').click()

    const requiredName = page.locator('#validation_message_1_1')
    const requiredEmail = page.locator('#validation_message_1_3')
    const requiredMessage = page.locator('#validation_message_1_5')

    await expect(requiredName).toBeEnabled()
    await expect(requiredEmail).toBeEnabled()
    await expect(requiredMessage).toBeEnabled()
  })

  test('Validade Clicking on elements ', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')

    const buttonAdd = page.getByText('Add Element')
    buttonAdd.click()

    const buttonDelete = page.getByText('Delete')
    await expect(buttonDelete).toBeEnabled()
  })
  test('Validade Delete elements ', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')

    const buttonAdd = page.getByText('Add Element')
    buttonAdd.click()

    const buttonDelete = page.getByText('Delete')
    await buttonDelete.click()
    //check how to check an undefined element
    await expect(buttonDelete).toBeUndefined()
  })

  test('Validade filling input', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/inputs')

    await page.locator('input').fill('1')
  })

  test('Validade dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown')

    const dropdown = page.locator('#dropdown')
    await dropdown.selectOption('Option 1')
    await expect(dropdown).toHaveValue('1')
  })

  test('Validate checkbox is checked', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes')

    const checkbox1 = page.locator('input[type=checkbox]:nth-child(1)')
    await checkbox1.check()

    await expect(checkbox1).toBeChecked()
  })
  test('Validate checkbox unchecked', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes')

    // dowsn't work, check why
    const checkbox2 = page.getByRole('checkbox', { name: ' checkbox 1' })
    await checkbox2.check()
    //await expect(checkbox2).not.toBeChecked()
  })
})
