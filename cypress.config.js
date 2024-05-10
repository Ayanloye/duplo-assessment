const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://www.saucedemo.com",
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    viewportHeight: 938,
    viewportWidth: 1560,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
