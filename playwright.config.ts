import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  /* Run tests sequentially (best for debugging) */
  fullyParallel: false,

  /* Fail build if test.only left */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Single worker to avoid multiple browsers */
  workers: 1,

  /* Reporter */
  reporter: 'html',

  /* Global settings */
  use: {

    headless: false,        // 👈 Force browser visible
    //slowMo: 300,            // 👈 Optional (see steps slowly)
    trace: 'on-first-retry'

  },

  /* Browser projects */
  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false     // 👈 IMPORTANT (prevents override)
      },
    },

    // Uncomment if needed later

    // {
    //   name: 'firefox',
    //   use: { 
    //     ...devices['Desktop Firefox'],
    //     headless: false 
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: { 
    //     ...devices['Desktop Safari'],
    //     headless: false 
    //   },
    // },

  ],

});
