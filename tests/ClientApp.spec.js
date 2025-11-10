const {test, expect} = require('@playwright/test');

test('Borwser Context-validating error login', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('#userEmail').fill("anshika@gmail.com");
    await page.locator('#userPassword').fill("Iamking@000");
    await page.locator("[value='Login']").click("middle"); // Clicks the middle of the button? Need to get more comfortable reading the docs

    await page.waitForLoadState('networkidle'); // On this particular site, we want to wait until all networks calls have been made
    // waits until network comes to an idle state; aka, not more calls are being made
    
    /* 
    Essentially what we are doing here is waiting until the network tab returns the data from the products endpoint, 
    and is then displayed by the FE so we can continue with our test(s)
    */

    //Alternative option, if the above method doesn't work (THE ABOVE IS NOT RECOMMENDED)
    await page.locator(".card-body b").first().waitFor();
    // waitFor will fail for multiple elements returned, hence putting first() here
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles)

    /* 
    What we have done for the above, is:
    - Go to client app on RahulShettyAacademy
    - Located both the email and password elements and filled them with hardcoded values
    - Located the login button and logged in 

    - The next section focuses on getting all the elements with the .card-body attirbute, but Playwright doesn't like this
      so using two different methods to achieve a similar goal: waiting until the network page is idle (aka sending no more requests)
      and, putting an assertion to locate an element using waitFor, and first() as waitFor() doesn't work well with multiple return values
      only then will you be able able to log 'titles' successfully, and the test be a TRUE pass
    */
});