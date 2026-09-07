const { test, expect } = require('@playwright/test');
test('demo test' , async({page})=>{
    await page.goto("https://www.wikipedia.org/");
    const searchInput = page.locator('#searchInput');
    await searchInput.fill('playwright test');


});