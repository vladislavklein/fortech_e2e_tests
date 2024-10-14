// form inputs

Cypress.Commands.add("typeName", (name) => {
  cy.get('input[name="name"]').clear().type(name);
});

Cypress.Commands.add("typeEmail", (emailValue) => {
  cy.get('input[name="email"]').clear().type(emailValue);
});

Cypress.Commands.add("typePhoneNumber", (phoneNumber) => {
  cy.get('input[name="phone"]').clear().type(phoneNumber);
});

Cypress.Commands.add("typeDescription", (description) => {
  cy.get('textarea[name="taskDescription"]').clear().type(description);
});

Cypress.Commands.add("typeTgNickname", (typeTgNickname) => {
  cy.get('textarea[name="taskDescription"]').clear().type(typeTgNickname);
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
  const emailValue = Cypress.config().baseEmail;

  cy.get('div')
    .contains(emailTitle)
    .nextUntil('a')
    .contains(emailValue)
    .click({force: true})
    .should(() => {
      expect(`mailto:` + emailValue).to.eq(`mailto:${emailValue}`);
  });
});

Cypress.Commands.add("clickOnTelegramLinkButton", () => {

  const tgTitle = 'Телеграм:';
  const tgLink = Cypress.config().baseTg;

  cy.get('div')
    .contains(tgTitle)
    .find('a')
    .contains(tgLink)
    .click({force: true})
});

Cypress.Commands.add("clickOnPolicyAcceptButton", () => {
  cy.get('label[for="policyAccept"]').click();
});

Cypress.Commands.add("clickOnSubmitButton", () => {
  cy.get('button[type="submit"]').click();
});