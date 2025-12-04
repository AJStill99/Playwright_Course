const {test, expect} = require('@playwright/test');

test('Browser context test', async ({page}) => {
    await page.goto('https://www.example.com');
    console.log("Running test...");
    console.log(await page.title());
    await expect(page).toHaveTitle("Example Domain");
});

test('UI Test', async ({page}) => {
    await page.goto('https://google.com');
    await page.reload();
    // Check for any refresh issues 
    const currentUrl = await page.url();
    console.log(currentUrl);
});

test("Page playwright tests", async ({page}) => {
    await page.goto("https://google.com");
    console.log(await page.title());
    console.log(`Running in browser: ${page.context().browser().browserType().name()}`);
    // Makes it clear which browser is being used

    await expect(page).toHaveTitle("Google");
});

test("CSS Selectors and Playwright locators", async ({page}) => {
    // Initialize
    const userName = await page.locator('#username');
    const signIn = await page.locator('#signInBtn');
    const cardTitles = await page.locator('.card-body a')
    // STEP - Go to URL
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    // SECTION - CSS selectors
    await userName.fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await signIn.click();
    // This will produce an error as the username is incorrect
    // Will need to handle the error message popup

    await page.locator("[style*='block']");
    // Partial match using wildcard * for style attribute
    // Don't need to explicitly wait to load, as plywright does this automatically
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await userName.fill(""); // will fill an emtpy string
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    await page.locator("[type='password']").fill("learning");

    console.log(await cardTitles.first().textContent()); // Can achieve a similar affect by using .nth(0)
    const allTitles = await cardTitles.allTextContents();
    // Will pass in this instance because Playwright will wait for .textContent assertion, but if this is commented out, it will return nothing
    console.log(allTitles);  
});

test("UI Controls", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    const userName = page.locator('#username'); // Await not need for storing a variable as no action is required
    const signIn = page.locator('#signInBtn');

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

    await page.locator("#terms").click(); // need to await to perform the ACTION at the end, is not need to store variables
    await expect(page.locator('#terms')).toBeChecked();
    await page.locator('#terms').uncheck(); // Uncheck the box
    expect(await page.locator('#terms').isChecked()).toBeFalsy(); // Returns false this time as has been unchecked, no isUnchecked method so this is a workaround
    // Notice the await is inside the brackets, because the action is needed inside the brackets
    // the await keyword is tied to actions
    // Also note the toBeFalsey() method is chained to the assertion inside the expect method




    /* 
    NOTE: Focus here:
    - Getting the last radio button as there are multiple of them
    - Clicking the okay button from the pop up that appears after selecting one of the radio buttons
    - Using assertion to ensure our selection has been made
    */




});


