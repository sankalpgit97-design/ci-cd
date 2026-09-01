const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../test-data.json');
const testData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

test('Validate login and logout functionality', async ({ page }) => {
  const username = process.env.TEST_USERNAME;
  const password = process.env.TEST_PASSWORD;

  await page.goto(testData.url);

  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('#submit');

  await page.waitForURL(testData.expectedUrl);
  expect(page.url()).toBe(testData.expectedUrl);

  const header = page.locator('.post-title');
  await expect(header).toHaveText(testData.successHeader);

  const logoutButton = page.locator('text=Log out');
  await expect(logoutButton).toBeVisible();
});