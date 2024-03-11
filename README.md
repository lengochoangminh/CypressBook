# Branch 1 - Interact to the basic web elements

1. Access the page https://rahulshettyacademy.com/AutomationPractice/
2. Interact to the basic elements

- Radio button, Suggestion text box, Dropdown & Checkbox
- Element Display Example - Visible invisible
- Mouse Hover Example
- Handle Web Table
- Switch to Alert Example

3. Interact to the iFrame. Require to install the additional dependency

# Branch 2 - Accessibility Test with AXE

- Require to install the additional 2 dependencies: $ npm install --save-dev cypress-axe axe-core

# Branch 3 - Intercept request => Spy and stub network requests and responses

- Stubbing the API's response by returning one book only
- Request/Response Modification with routeHandler

# Branch 5 - Visual Test with the plugin "cypress-visual-regression"

1. Generate the base images by CLI: **npx cypress run --spec "cypress/e2e/visual-regression.cy.js" --env type=base**
2. Update the URL to '/index_v2.html' in cypress/e2e/visualtest.cy.js to make the different points
3. Generate the actual & different images: **npx cypress run --spec "cypress/e2e/visual-regression.cy.js" --env type=regression**

# Branch 6 - Page Object Model Design Pattern + Cypress-cucumber-preprocessor plugin
