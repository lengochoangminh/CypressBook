describe("Visual Test With Applitools", () => {
  // This method performs setup before each test.
  beforeEach(() => {
    cy.eyesOpen({
      // The name of the application under test.
      // All tests for the same app should share the same app name.
      // Set this name wisely: Applitools features rely on a shared app name across tests.
      appName: "Research Bank",

      // The name of the test case for the given application.
      // Additional unique characteristics of the test may also be specified as part of the test name,
      // such as localization information ("Home Page - EN") or different user permissions ("Login by admin").
      testName: "Researching",
    });
  });
  it("Applitools Demo", () => {
    // Load the login page.
    cy.visit("https://demo.applitools.com");

    // Verify the full login page loaded correctly.
    cy.eyesCheckWindow({
      tag: "Login page",
      target: "window",
      fully: true,
    });

    // Perform login.
    cy.get("#username").type("andy");
    cy.get("#password").type("i<3pandas");
    cy.get("#log-in").click();

    // Verify the full main page loaded correctly.
    // This snapshot uses LAYOUT match level to avoid differences in closing time text.
    cy.eyesCheckWindow({
      tag: "Main page",
      target: "window",
      fully: true,
      matchLevel: "Layout",
    });
  });

  afterEach(() => {
    // Close Eyes to tell the server it should display the results.
    cy.eyesClose();
  });
});
