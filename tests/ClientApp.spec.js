const {test, expect} = require('@playwright/test');

test.only('Borwser Context-validating error login', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill("anshika@gmail.com");
    await page.locator('#userPassword').fill("Iamking@000");
    await page.locator("[value='Login']").click("middle");
    // Clicks the middle of the button? Need to get more comfortable reading the docs

    // On this particular site, we want to wait until all networks calls have been made
    await page.waitForLoadState('networkidle');
    // waits until network comes to an idle state; aka, not more calls are being made
    /* 
    Essentially what we are doing here is waiting until the network tab returns the data from the products endpoint, 
    and is then displayed by the FE so we can continue with our test(s)
    */
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles)

});