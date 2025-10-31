const {test} = require('@playwright/test');

test('First Test', async ({browser}) => {
    // Instead of page, can pass nothing and be treated as an anon function
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
    await page.goto('https://www.example.com');
    // This achieves the same as above, far cleaner
    console.log("Passing");
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


