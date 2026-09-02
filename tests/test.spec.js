const { test, expect } = require('@playwright/test');
test('Validate login and logout functionality', async ({ page }) => {

  await page.goto("https://wikipedia.org/");

  const searchInput = page.locator('#searchInput');
  await searchInput.fill("playwright");

});