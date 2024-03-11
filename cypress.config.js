const { defineConfig } = require("cypress");
const { configureVisualRegression } = require("cypress-visual-regression");

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    env: {
      visualRegressionType: "regression",
      visualRegressionBaseDirectory: "cypress/screenshots/base",
      visualRegressionDiffDirectory: "cypress/screenshots/diff",
      visualRegressionGenerateDiff: "always",
      visualRegressionFailSilently: true,
    },
    screenshotsFolder: "./cypress/screenshots/actual",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configureVisualRegression(on);
    },
    specPattern: "cypress/e2e/*.feature",
    setupNodeEvents,
  },
});
