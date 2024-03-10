describe("Visual testing login page", () => {
  it("visual testing- capturing base visual", () => {
    // cy.visit('/index_v2.html') // using this url when executing 'npm run test'
    cy.visit("https://demo.applitools.com/index_v2.html");
    cy.compareSnapshot("login", {
      capture: "fullPage",
      errorThreshold: 0.0,
    });
  });
});
