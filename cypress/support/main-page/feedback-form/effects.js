// Error Message below Name:

Cypress.Commands.add("expectErrorMessageBelowNameInput", (errMsg) => {
  cy.get('input[name="name"]')
    .next("p")
    .should("have.text", errMsg);
}); // Exist

Cypress.Commands.add("expectErrorMessageBelowNameInputIsNotExist", () => {
  cy.get('input[name="name"]')
    .next("p")
    .should("not.exist");
}); // not Exist

Cypress.Commands.add("expectErrorMessageBelowNameInputIs", (existOrNot, errMsg) => {
  const message = {
    exist: "have.text",
    notExist: "not.exist",
  }
  cy.get('input[name="name"]')
    .next("p")
    .should(`${message[existOrNot]}`,`${errMsg}`);
}); // just for example: Exist & not Exist in one command (not used in test, but work)

// Error Message below Email:
Cypress.Commands.add("expectErrorMessageBelowEmailInput", (errMsg) => {
  cy.get('input[name="email"]')
    .next("p")
    .should("have.text", errMsg);
});

Cypress.Commands.add("expectErrorMessageBelowEmailInputIsNotExist", () => {
  cy.get('input[name="email"]')
    .next("p")
    .should("not.exist");
});

// Error Message below Phone:
Cypress.Commands.add("expectErrorMessageBelowPhoneInput", (errMsg) => {
  cy.get('input[name="phone"]')
    .parent('div')
    .nextAll("p")
    .should("have.text", errMsg);
});

Cypress.Commands.add("expectErrorMessageBelowPhoneInputIsNotExist", () => {
  cy.get('input[name="phone"]')
    .parent('div')
    .nextAll("p")
    .should("not.exist");
});

// Error Message below Checkbox:
Cypress.Commands.add("expectErrorMessageBelowCheckbox", (errMsg) => {
  cy.get('input[type="checkbox"]')
    .nextAll("p").eq(1)
    .should("have.text", errMsg);
});

Cypress.Commands.add("expectErrorMessageBelowCheckboxIsNotExist", () => {
  cy.get('input[type="checkbox"]')
    .nextAll("p").eq(1)
    .should("not.exist");
});

// Success Submit Message:
Cypress.Commands.add("expectSuccessSubmitMessage", () => {
  cy.get('div[class="style__MessageBlock-sc-vjdo4-21 iYpsDG"]')
    .should("be.visible"); // div[class="gatsby-image-wrapper-constrained"]
});

Cypress.Commands.add("expectSuccessSubmitMeassageNotExist", () => {
  cy.get('div[class="style__MessageBlock-sc-vjdo4-21 iYpsDG"]')
    .should("not.exist");
});

// Phone input values expect
Cypress.Commands.add("expectPhoneInputValueIs", (phnValue) => {
  cy.get('input[name="phone"]')
    .should("have.value", phnValue);
});