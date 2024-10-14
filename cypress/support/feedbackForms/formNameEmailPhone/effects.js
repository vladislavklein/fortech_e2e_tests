Cypress.Commands.add("ExpectConfirmMessageIsVisible", () => {
  const errorMessageText = "Отправить сообщение не удалось. Пожалуйста попробуйте позже.";

  cy.get(".style__MessageBlock]")
    .find(errorMessageText)
    .should("be.visible");
});

Cypress.Commands.add("expectErrorMessageIsVisible", () => {
  const errorTitle = "Ошибка";
  const errorText = "Отправить сообщение не удалось. Пожалуйста попробуйте позже.";
  
  cy.get("div")
    .contains(errorTitle)
    .parents()
    .contains(errorText)
    .should("be.visible");
});
