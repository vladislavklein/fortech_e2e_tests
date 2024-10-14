const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    baseEmail: process.env.CYPRESS_BASE_EMAIL,
    baseTg: process.env.CYPRESS_BASE_TG,

    viewportWidth: 1920, // Ширина экрана
    viewportHeight: 1080, // Высота экрана

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },

  env: {
    BASE_URL: process.env.CYPRESS_BASE_URL,
    BASE_EMAIL: process.env.CYPRESS_BASE_EMAIL,
    BASE_TG: process.env.CYPRESS_BASE_TG
  },

});
