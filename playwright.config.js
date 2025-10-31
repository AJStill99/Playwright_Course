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
  },
  use: {
    browserName: 'chromium', 
    // Default browser to use

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});

module.exports = config;
// Makes available to other files

