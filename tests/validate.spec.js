const { test, expect } = require('@playwright/test');
const path = require('path');
const dataPath = path.join(__dirname, '../data/loginData.json');

test('Validate dashboard title and execute logout' ,async ({page}) => {

await page.goto(loginData.expectedUrl);

await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
const logoutButton = page.locator('text=Log out');
await expect(logoutButton).toBeVisible();
await logoutButton.click();

await expect(page).toHaveURL(loginData.expectedUrl);
});