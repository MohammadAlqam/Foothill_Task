//this command for typing into input field, take 2 parameters selector and input
Cypress.Commands.add("typeBySelector", (selector, input) => {
  cy.get(`[data-test=${selector}]`).type(input);
});

//this command for clicking into a button, take 2 parameters selector and it's key or type
Cypress.Commands.add("clickBySelector", (selector, typeOfSelector) => {
  cy.get(`[${typeOfSelector}="${selector}"]`).click();
});

//this command to verify the current URL equal or contain specific URL, take only URL parameter
Cypress.Commands.add("verifyURL", (URL) => {
  cy.url().should("contains", URL);
});

//this command to verify DOM element, take 3 parameters text or selector, JQuery and expected value
Cypress.Commands.add("verifyElement", (text, JQuery, expectedValue) => {
  cy.contains(`${text}`, { timeout: 10000 }).should(
    `${JQuery}`,
    `${expectedValue}`
  );
});

//this command to intercept API, take 2 parameters URL and HTTP method
Cypress.Commands.add("interceptAPI", (URL, method) => {
  cy.intercept({
    method: method,
    url: URL,
  });
});

//this command to verify response status code from intercepted API, take only alias parameter
Cypress.Commands.add("verifyAPIStatusCode", (alias) => {
  cy.wait(`${alias}`, { timeout: 10000 })
    .its("response.statusCode")
    .should("eq", 200);
});
