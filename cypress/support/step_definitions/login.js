// import "./commands";
// And Keyword is not supported
import { Then, When, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the login page", () => {
  //navigate to the base URL https://app.smalltalk2.me with /auth route
  cy.visit("/auth");
});

When("the user enters valid credentials", () => {
  //enter valid email
  cy.typeBySelector("sign-in-email", "bb.mx.fr@gmail.com");
  //enter valid password
  cy.typeBySelector("sign-in-password", "123456");
});

When("clicks the login button", (buttonText) => {
  //intercept login API to spy on it
  cy.interceptAPI("/api2/auth/login", "POST").as("loginRequest");
  //click on Log in button
  cy.clickBySelector("sign-in-submit", "data-test");
});

Then("the user should be redirected to the home page", (pageTitle) => {
  //check 200 status code
  cy.verifyAPIStatusCode("@loginRequest");
  //element assertion in home page
  cy.verifyElement("Featured", "have.text", "Featured");
  //verify that the current url is the baseUrl
  cy.verifyURL(Cypress.config("baseUrl"));

  //todo verify that local storage is storing token element
});

When("the user enters incorrect password", (buttonText) => {
  //enter valid email
  cy.typeBySelector("sign-in-email", "bb.mx.fr@gmail.com");
  //enter invalid password
  cy.typeBySelector("sign-in-password", "1234567");
});

Then("an error message should be displayed", (pageTitle) => {
  ///alert message element assertion
  cy.verifyElement(
    "Wrong password. Try again or click Forgot password to reset it.",
    "be.visible"
  );
});

Then("the user should remain on the login page", () => {
  //check the current URl is still the same
  cy.verifyURL("auth");

  //todo verify that local storage in not storing token element
  //todo verify that API is not calling using intercept
});

When("the user clicks on the 'Forgot Password' link", () => {
  //click on forget password? button
  cy.clickBySelector("/auth/restore", "href");
});

Then("the user should be redirected to the password reset page", () => {
  //assertion page h1 element
  cy.verifyElement("Reset Password", "have.text", "Reset Password");
  //url page assertion
  cy.verifyURL("/auth/restore");
  //negative assertion page h1
  cy.verifyElement("Reset Password", "not.have.text", "Log in");
});

When(
  "the user clicks the login button without entering any credentials",
  () => {
    //click on Log in button
    cy.clickBySelector("sign-in-submit", "data-test");
  }
);

Then(
  "an error message should be displayed indicating that the fields cannot be empty",
  () => {
    //message alert assertion
    cy.verifyElement(`Required field`, "be.visible");

    //todo verify that local storage in not storing token element
    //todo verify that API is not calling using intercept
  }
);
