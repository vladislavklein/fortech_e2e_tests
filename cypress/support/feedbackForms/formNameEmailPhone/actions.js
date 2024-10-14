// form inputs

Cypress.Commands.add("typeName", (name) => {
  cy.get('input[name="name"]').clear().type(name);
});

Cypress.Commands.add("typeEmail", (email) => {
  cy.get('input[name="email"]').clear().type(email);
});

Cypress.Commands.add("typePhoneNumber", (phoneNumber) => {
  cy.get('input[name="phone"]').clear().type(phoneNumber);
});

Cypress.Commands.add("typeDescription", (description) => {
  cy.get('textarea[name="taskDescription"]').clear().type(description);
});

// form buttons:

Cypress.Commands.add("clickOnCountryCodeDropdownButton", () => {
  cy.get('div[class="flag-dropdown "]').click();
});

Cypress.Commands.add("selectCountryCode", (country) => {
  cy.get('ul[class="country-list "]')
    .contains(country)
    .click();
});

Cypress.Commands.add("clickOnMailLinkButton", () => {

  const emailTitle = 'Наша почта:';
  const email = 'partners@fortech.dev';

  cy.get('div')
    .contains(emailTitle)
    .next('contains', email)
    .click();
});

Cypress.Commands.add("clickOnTelegramLinkButton", () => {

  const tgTitle = 'Телеграм:';
  const tgLink = '@fortech_sales';

  cy.get('div')
    .contains(tgTitle)
    .next('contains', tgLink)
    .click();
});

Cypress.Commands.add("clickOnPolicyAcceptButton", () => {
  cy.get('label[for="policyAccept"]').click();
});

Cypress.Commands.add("clickOnSubmitButton", () => {
  cy.get('button[type="submit"]').click();
});