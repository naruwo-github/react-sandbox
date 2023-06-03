import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await page.goto('http://localhost:5173/');
});

test('has title', async ({ page }) => {
	await expect(page).toHaveTitle('Vite + React + TS');
});

test('move to nextPage', async ({ page }) => {
	await page.getByRole('link', { name: 'Go to starter sample.' }).click();
	expect(page.url()).toBe('http://localhost:5173/index2.html');
});

test('snapshot', async ({ page }) => {
	expect(await page.screenshot()).toMatchSnapshot({
		name: 'page.png'
	});
});
