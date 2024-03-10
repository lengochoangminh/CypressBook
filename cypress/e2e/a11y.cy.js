describe("Accessibility Test", () => {
  it("A11y", () => {
    cy.visit("https://ecommerce-playground.lambdatest.io/");
    cy.injectAxe();

    // scan the entire page by default
    cy.checkA11y();

    // scan the specific selector only
    // cy.checkA11y('#entry_217838 p');

    // exclude the specific selector
    // cy.checkA11y({ exclude: ['#entry_217838 p'] });
  });
});
