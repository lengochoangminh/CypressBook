describe("Interacting with the basic elements", () => {
  beforeEach(function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  it("Radio button, Suggestion text box, Dropdown & Checkbox Example", () => {
    // Radio buttons
    cy.get('[value="radio2"]').check().should("be.checked");

    // Suggestion text box - Auto-complete text box
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each(($e1, index, $list) => {
      if ($e1.text() === "India") {
        cy.wrap($e1).click();
      }
    });

    // Dropdown
    cy.get("select").select("option2").should("have.value", "option2");

    // Check boxes
    cy.get('[type="checkbox"]').check(["option1", "option3"]);
    cy.get("#checkBoxOption2")
      .check()
      .should("be.checked")
      .and("have.value", "option2");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
  });

  it("Element Display Example - Visible invisible", () => {
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");
  });

  it("Mouse Hover Example", function () {
    cy.get("div.mouse-hover-content").invoke("show");
    cy.contains("Top").click({ force: true });
    // cy.url().should('include','top')
  });

  it("Handle Web Table", function () {
    cy.get("tr td:nth-child(2)").each(($e1, index, $list) => {
      const text = $e1.text();
      if (text.includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (price) {
            const priceText = price.text();
            expect(priceText).to.equal("25");
          });
      }
    });
  });

  it("Switch to Alert Example", function () {
    //Notice that Cypress will auto accept Alerts so we don't need to handle to click on OK button like Selenium
    cy.get("#alertbtn").click();

    //Similar for Confirmation dialog => Cypress will auto accept confirmations
    cy.get('[value="Confirm"]').click();

    //Cause Cypress will auto accept Alerts, therefore we need to use the event "window:alert" to assert the text displayed
    cy.on("window:alert", (str) => {
      //Mocha
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    //Cause Cypress will auto accept Alerts, therefore we need to use the event "window:alert" to assert the text displayed
    cy.on("window:confirm", (str) => {
      //Mocha
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    // Remove the attribute “target” to open the new page on the same window
    // cy.get("#opentab").invoke("removeAttr", "target").click();
    // cy.url().should("include", "qaclickacademy");
    // cy.go("back");
  });
});
