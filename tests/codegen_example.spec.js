const {test, expect} = require('@playwright/test');

test.describe("Using the codegen tool", () => {
    test("First example test", async ({page}) => {
        await page.goto('https://www.google.com/');
        await page.getByRole('button', { name: 'Accept all' }).click();
        await page.getByRole('combobox', { name: 'Search' }).click();
        await page.getByRole('combobox', { name: 'Search' }).fill('This is a test');
        await page.locator('iframe[name="a-hvxeozm9v6ob"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
        await page.locator('iframe[name="c-hvxeozm9v6ob"]').contentFrame().locator('[id="0"]').click();
        await page.locator('iframe[name="c-hvxeozm9v6ob"]').contentFrame().locator('[id="2"]').click();
        await page.locator('iframe[name="c-hvxeozm9v6ob"]').contentFrame().locator('[id="5"]').click();
        await page.locator('iframe[name="c-hvxeozm9v6ob"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
        await page.locator('iframe[name="c-hvxeozm9v6ob"]').contentFrame().locator('[id="13"]').click();
        await page.locator('iframe[name="c-hvxeozm9v6ob"]').contentFrame().locator('[id="14"]').click();
        await page.locator('iframe[name="c-hvxeozm9v6ob"]').contentFrame().locator('[id="9"]').click();
        await page.locator('iframe[name="c-hvxeozm9v6ob"]').contentFrame().getByRole('button', { name: 'Next' }).click();
        await page.locator('iframe[name="c-hvxeozm9v6ob"]').contentFrame().locator('[id="9"]').click();
        await page.locator('iframe[name="c-hvxeozm9v6ob"]').contentFrame().locator('[id="8"]').click();
        await page.locator('iframe[name="c-hvxeozm9v6ob"]').contentFrame().locator('[id="4"]').click();
        await page.locator('iframe[name="c-hvxeozm9v6ob"]').contentFrame().locator('[id="5"]').click();
        await page.locator('iframe[name="c-hvxeozm9v6ob"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
        await page.locator('iframe[name="c-hvxeozm9v6ob"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
    });
});
