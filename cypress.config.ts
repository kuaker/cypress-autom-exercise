const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true
  },
  video: true,
  retries: 3,
  chomeWebSecurity: false,
  viewportWidth: 1440,
  viewportHeight: 900,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/e2e/tests/**/*.{js,jsx,ts,tsx}",
    baseUrl: "https://automationexercise.com/",
  },
});
