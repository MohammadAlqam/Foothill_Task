import "./commands";
// And Keyword is not supported
import {
  Then,
  When,
  Given,
  And,
} from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the login page", () => {
  cy.visit("/auth");
});

When("the user enters valid credentials", () => {
  // cy.typeBySeclector("sign-in-email", "mohammadalqam199@gmail.com");
});

When("clicks the login button", (buttonText) => {
  //cy.contains(pageTitle).should("be.visible");
});

Then("the user should be redirected to the home page", (pageTitle) => {
  //cy.contains(pageTitle).should("be.visible");
});

Then("a welcome message should be displayed", (buttonText) => {
  //cy.contains(pageTitle).should("be.visible");
});

When(
  "the user enters incorrect credentials (invalid username or password)",
  (buttonText) => {
    //cy.contains(pageTitle).should("be.visible");
  }
);

When("clicks the login button", (buttonText) => {
  //cy.contains(pageTitle).should("be.visible");
});

Then("an error message should be displayed", (pageTitle) => {
  //cy.contains(pageTitle).should("be.visible");
});

Then("the user should remain on the login page", (buttonText) => {
  //cy.contains(pageTitle).should("be.visible");
});

When("the user clicks on the 'Forgot Password' link", (buttonText) => {
  //cy.contains(pageTitle).should("be.visible");
});

Then(
  "the user should be redirected to the password reset page",
  (pageTitle) => {
    //cy.contains(pageTitle).should("be.visible");
  }
);

When(
  "the user clicks the login button without entering any credentials",
  (buttonText) => {
    //cy.contains(pageTitle).should("be.visible");
  }
);

Then(
  "an error message should be displayed indicating that the fields cannot be empty",
  (pageTitle) => {
    //cy.contains(pageTitle).should("be.visible");
  }
);

When(
  "the user enters incorrect credentials multiple times (exceeding the allowed limit)",
  (buttonText) => {
    //cy.contains(pageTitle).should("be.visible");
  }
);

Then("the user account should be locked", (pageTitle) => {
  //cy.contains(pageTitle).should("be.visible");
});

Then("an appropriate message should be displayed", (buttonText) => {
  //cy.contains(pageTitle).should("be.visible");
});

When(
  "the user clicks on the password visibility toggle button",
  (buttonText) => {
    //cy.contains(pageTitle).should("be.visible");
  }
);

Then("the password should be visible as plain text", (pageTitle) => {
  //cy.contains(pageTitle).should("be.visible");
});

Then("when clicked again, it should be masked", (buttonText) => {
  //cy.contains(pageTitle).should("be.visible");
});

When("the user logs in with the 'Remember Me' option checked", (buttonText) => {
  //cy.contains(pageTitle).should("be.visible");
});

Then(
  "the user's session should persist across browser sessions",
  (pageTitle) => {
    //cy.contains(pageTitle).should("be.visible");
  }
);

Given("the user is logged in", () => {
  //cy.contains(pageTitle).should("be.visible");
});

When("the user clicks on the logout button", (buttonText) => {
  //cy.contains(pageTitle).should("be.visible");
});

Then("the user should be redirected to the login page", (pageTitle) => {
  //cy.contains(pageTitle).should("be.visible");
});

Then("the session should be terminated", (buttonText) => {
  //cy.contains(pageTitle).should("be.visible");
});
