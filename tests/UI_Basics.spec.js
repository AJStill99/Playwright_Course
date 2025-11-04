const {test, expect} = require('@playwright/test');

test('First Test', async ({browser}) => {
    // Instead of page or browser, can pass nothing and be treated as an anon function
    // the await keyword will execute the command and wait for it to finish
    // Need to declare async before using await

    // const context = await browser.newContext();

    // ^Start a new instance with fixed properties within the brackets bit of this function
    // For exmaple, can control the cookie settings, geolocation (proxy), permissions, etc.

    // const page = await context.newPage();

    // ^Opens a new tab in the browser context

    /* The above block of code will be done automatically using the page fixture, 
    so need for it here */

    // await page.goto('https://www.example.com');

    // ^Navigates to the URL

    // Creates a new context, a new page, and goes to the URL

});

// easier way to write this below:

test('Browser context test', async ({page}) => {
    // This achieves the same as above, but far cleaner
    await page.goto('https://www.example.com');
    console.log("Running test...");

    //Get title, and put assertion if correct
    console.log(await page.title());
    await expect(page).toHaveTitle("Example Domain");
    // Assertion to check title is correct
});

test('UI Test', async ({page}) => {
    await page.goto('https://google.com');

    await page.reload();
    // Check for any refresh issues 

    const currentUrl = await page.url();
    console.log(currentUrl);
});

// Can run using the --headed flag to see the browser UI

// test.only("UI Basics, only running this test in a batch command", async ({page}) => {
//     console.log("UI Basics test started");
// });

// When run, only the above test will run in the batch command

test("Page playwright tests", async ({page}) => {
    await page.goto("https://google.com");
    console.log(await page.title());
    console.log(`Running in browser: ${page.context().browser().browserType().name()}`);
    // Makes it clear which browser is being used

    await expect(page).toHaveTitle("Google");


});

test.only("CSS Selectors and Playwright locators", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    // CSS selectors
    await page.locator('#username').fill("rahulshetty");
    // Can use type, or fill for the above line, but fill is better now
    await page.locator("[type='password']").fill("learning");
    await page.locator("#signInBtn").click();

    // This will produce an error as the username is incorrect
    // Will need to handle the error message popup

    await page.locator("[style*='block']");
    // Partial match using wildcard * for style attribute
    // Don't need to explicitly wait to load, as plywright does this automatically

    console.log(await page.locator("[style*='block']").textContent());
    // Logs the error message text

    await expect(page.locator("[style*='block']")).toContainText('Incorrectt');
    // Assertion to check error message contains 'Incorrect'
    // The above will fail due to the typo in the text, but display how the expect timeout works really well

    
});


