const { defineConfig } = require("cypress");
const { configureVisualRegression } = require("cypress-visual-regression");

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
  },
});
