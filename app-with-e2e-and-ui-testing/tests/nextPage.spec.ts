import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('http://localhost:5173/index2.html');
	await expect(page).toHaveTitle('Vite + React + TS');
});

test('count button', async ({ page }) => {
	await page.goto('http://localhost:5173/index2.html');
	await page.getByRole('button', { name: 'count is 0' }).click();
	expect(await page.textContent('body')).toContain('count is 1');
});

test('snapshot', async ({ page }) => {
	await page.goto('http://localhost:5173/index2.html');
	expect(await page.screenshot()).toMatchSnapshot('./snapshots/nextPage.png');
});
