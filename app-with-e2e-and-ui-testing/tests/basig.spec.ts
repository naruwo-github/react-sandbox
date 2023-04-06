import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('http://localhost:5173/');
	await expect(page).toHaveTitle('Vite + React + TS');
});

test('count button', async ({ page }) => {
	await page.goto('http://localhost:5173/');
	await page.getByRole('button', { name: 'count is 0' }).click();
	expect(await page.textContent('body')).toContain('count is 1');
});

test('snapshot on first screen', async ({ page }) => {
	await page.goto('http://localhost:5173/');
	expect(await page.screenshot()).toMatchSnapshot(
		'./snapshots/first-screen.png'
	);
});
