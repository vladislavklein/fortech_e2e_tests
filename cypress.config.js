const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    viewportWidth: 1920, // Ширина экрана
    viewportHeight: 1080, // Высота экрана

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },

  env: {
    EMAIL: process.env.CYPRESS_EMAIL,
    PASSWORD: process.env.CYPRESS_PASS,
    BASE_URL: process.env.CYPRESS_BASE_URL
  },

});
