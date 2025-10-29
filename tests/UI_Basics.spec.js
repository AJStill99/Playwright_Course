const {test} = require('@playwright/test');

test('First Test', async ({browser}) => {
    // Instead of page, can pass nothing and be treated as an anon function
    // the await keyword will execute the command and wait for it to finish
    // Need to declare async before using await

    const context = await browser.newContext();

    // Start a new instance with fixed properties within the brackets bit of this function
    // For exmaple, can control the cookie settings, geolocation (proxy), permissions, etc.

    const page = await context.newPage();

    // Opens a new tab in the browser context

    /* The above block of code will be down automatically using the page fixture, 
    so need for it here */

    await page.goto('https://www.example.com');
    // Navigates to the URL

    // Creates a new context, a new page, and goes to the URL

});

// easier way to write this below:

test('Browser context test', async ({page}) => {
    await page.goto('https://www.example.com');
    // This achieves the same as above, far cleaner
});

