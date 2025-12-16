// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({
  testDir: './tests',
  // Specifies the directory where the test files are located
  timeout: 60 * 1000,
  // Gives time in millisecond format for clarity
  reporter: 'html',
  expect: {
    timeout: 30 * 1000,
    // Maximum time expect() should wait for the condition to be met
    // waits for 30 seconds - this might be a bit high for most cases
  },
  use: {
    navigationTimeout: 60 * 1000,
    browserName: 'chromium', 
    // Default browser to use
    headless: false,
    // Show the browser UI, running in headed mode
    viewport: { width: 1280, height: 720 },
    // Sets the browser size

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
});

module.exports = config;
// Makes available to other files

