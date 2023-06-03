import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/index2.html')
})

test('The page should have the correct title', async ({ page }) => {
  await expect(page).toHaveTitle('Vite + React + TS')
})

test('Count button should increment the count', async ({ page }) => {
  await page.getByRole('button', { name: 'count is 0' }).click()
  expect(await page.textContent('body')).toContain('count is 1')
})

test('The page should match the stored snapshot', async ({ page }) => {
  expect(await page.screenshot()).toMatchSnapshot({
    name: 'nextPage.png'
  })
})
