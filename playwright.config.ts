import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // If you want sequential execution (no parallel)
  fullyParallel: false,
  workers: 1,

  // CI safety
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  // Timeouts (good defaults)
  timeout: 60_000,
  expect: { timeout: 10_000 },

  // ✅ Always open the HTML report after execution
  reporter: [
    ['html', { open: 'always' }],
  ],

  use: {
    headless: false,               // ✅ visible browser always
    viewport: null,                // ✅ allows real window sizing (needed for maximize)
    actionTimeout: 15_000,
    navigationTimeout: 45_000,
    trace: 'on',
    screenshot: 'on',
    video: 'on',
    permissions: [],

    // ✅ Maximize Chrome
    launchOptions: {
      args: ['--start-maximized'],
    },

    // Optional: if you use baseURL in tests like page.goto('/')
    // baseURL: 'https://example.com',
  },

  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',         // ✅ runs real Google Chrome (not bundled chromium)
      },
    },
  ],
});
