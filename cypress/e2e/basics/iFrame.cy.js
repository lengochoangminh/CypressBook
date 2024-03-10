/** === Prerequisites: Installed the dependency cypress-iframe by CLI: $ npm install -D cypress-iframe ===**/
import "cypress-iframe";

describe("Working with iFrame", function () {
  it.only("iFrame", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
  });
});
