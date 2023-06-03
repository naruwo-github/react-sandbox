import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/')
})

test('The page should have the correct title', async ({ page }) => {
  await expect(page).toHaveTitle('Vite + React + TS')
})

test('The user should be able to navigate to the next page', async ({
  page
}) => {
  await page.getByRole('link', { name: 'Go to starter sample.' }).click()
  expect(page.url()).toBe('http://localhost:5173/index2.html')
})

test('The page should match the stored snapshot', async ({ page }) => {
  expect(await page.screenshot()).toMatchSnapshot({
    name: 'page.png'
  })
})
