const { test, expect } = require('@playwright/test');

test('Validate dashboard title and execute logout' ,async ({page}) => {

await page.goto(loginDaata.dasboardUrl);

await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
const logoutButton = page.locator('text=Log out');
await expect(logoutButton).toBeVisible();
await logoutButton.click();

await expect(page).toHaveURL(loginData.loginUrl);
});