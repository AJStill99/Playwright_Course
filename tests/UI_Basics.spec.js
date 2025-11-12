const {test, expect} = require('@playwright/test');

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

test("CSS Selectors and Playwright locators", async ({page}) => {
    const userName = await page.locator('#username');
    const signIn = await page.locator('#signInBtn');
    const cardTitles = await page.locator('.card-body a')
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    // CSS selectors
    await userName.fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await signIn.click();
    // Can use type, or fill for the above code block but fill is better now
    // Notice we are refactoring code here

    // This will produce an error as the username is incorrect
    // Will need to handle the error message popup

    await page.locator("[style*='block']");
    // Partial match using wildcard * for style attribute
    // Don't need to explicitly wait to load, as plywright does this automatically

    console.log(await page.locator("[style*='block']").textContent());
    // Logs the error message text

    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    // await expect(page.locator("[style*='block']")).toContainText('Incorrectt');
    // Assertion to check error message contains 'Incorrect'
    // The above will fail due to the typo in the text, but display how the expect timeout works really well, commented out to avoid a test failure
    await userName.fill("");
    // will fill an emtpy string

    // Correct username and password
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    await page.locator("[type='password']").fill("learning");

    console.log(await cardTitles.first().textContent());
    // This will return the first element of the selectors if multiple
    // Can achieve a similar affect by using .nth(0)
    // The above could be used in a for loop maybe? 

    const allTitles = await cardTitles.allTextContents();
    // Not waiting until contents are present
    // Returns all elements
    // Will pass in this instance because Playwright will wait for .textContent assertion, but if this is commented out, it will return nothing
    console.log(allTitles);  
});

test("UI Controls", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const userName = await page.locator('#username');
    const signIn = await page.locator('#signInBtn');

    // SECTION - DROPDOWNS
    const dropDown = await page.locator("select.form-control")
    // reason for using this locator is because the class form-control is not unique, but pairing it with select is
    await dropDown.selectOption("consult")
    // Passing the value into this method, otherwise will try to get them all

    /* 
    NOTE - focuses on:
    - Going to page (getting the username and signin button stored)
    - Storing the dropdown in a variable, and selecting an option from the list
    */

    // SECTION - RADIO BUTTONS

    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click(); // Click will wait for 30s for element to appear on the page 
    console.log(await page.locator(".radiotextsty").last().isChecked()) // Will return a boolean value, if/else statement may be good here? 
    await expect(page.locator(".radiotextsty").last()).toBeChecked();

    // SECTION - CHECKBOXES

    await page.locator("#terms").click();
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck(); // Uncheck the box
    expect(await page.locator('#terms').isChecked()).toBeFalsy(); // Returns false this time as has been unchecked, no isUnchecked method so this is a workaround


    /* 
    NOTE: Focus here:
    - Getting the last radio button as there are multiple of them
    - Clicking the okay button from the pop up that appears after selecting one of the radio buttons
    - Using assertion to ensure our selection has been made
    */




});


