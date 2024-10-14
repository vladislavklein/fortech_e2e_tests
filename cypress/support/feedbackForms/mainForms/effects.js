Cypress.Commands.add("expectPlaceholderContainsCountryCode", (countryCode) => {
  cy.get('input[name="phone"]')
    .invoke("val")
    .should("include", `${countryCode}`);
});

// messages after submitting form

Cypress.Commands.add("expectSubmitSuccessfulVisible", () => {
  const sucessfulTitle = "";
  const sucessfulText = "";

  cy.get("div")
    .contains(errorTitle)
    .parents()
    .contains(errorText)
    .should("be.visible");
});

Cypress.Commands.add("expectSubmitErrorVisible", () => {
  const errorTitle = "Ошибка";
  const errorText = "Отправить сообщение не удалось. Пожалуйста попробуйте позже.";
  
  cy.get("div")
    .contains(errorTitle)
    .parents()
    .contains(errorText)
    .should("be.visible");
});
