// inputs:
Cypress.Commands.add("enterInput", (inputName, inputValue) => {
  const inputMap = {
    name: 'name="name"',
    email: 'name="email"',
    phone: 'name="phone"',
    descript: 'name="description"',
    checkbox: 'type="checkbox"',
  };
  cy.get('input[${inputMap[inputName]}]').clear().type(inputValue);
});

Cypress.Commands.add("enterName", (inputValue) => {
  cy.get('input[name="name"]').type(inputValue)
});

Cypress.Commands.add("enterEmail", (inputValue) => {
  cy.get('input[name="email"]').type(inputValue)
});

Cypress.Commands.add("enterPhone", (inputValue) => {
  cy.get('input[name="phone"]').type(inputValue)
});

// buttons:
Cypress.Commands.add("clickOnButton", (name) => {
  const buttonMap = {
    submit: "submit", // Отправить
  };
  cy.get(`button[type="${buttonMap[name]}"]`).click();
}); // v.1

Cypress.Commands.add("clickOnSubmitButton", () => {
  cy.get('button[type="submit"]').click();
}); // v.2

// addition buttons (in Phone input):
Cypress.Commands.add("clickOnFlagDropdownButton", () => {
  cy.get('div[class="flag-dropdown "]').click();
});

Cypress.Commands.add("choiseCountryInCountriesList", () => {
  cy.get('ul[role="listbox"]')
    .children("li")
    .then(($listItems) => {
      const randomIndex = Math.floor(Math.random() * $listItems.length);
      cy.wrap($listItems).eq(randomIndex).click();
    });
}); // Рандомный выбор

Cypress.Commands.add("selectRussiaInCountriesList", () => {
  cy.get('ul[class="country-list "]')
    .find('li[data-flag-key="flag_no_5"]')
    .click();
});

// checkbox:
Cypress.Commands.add("checkCheckbox", () => {
  cy.get('input[type="checkbox"]').check();
});

// Upload Input:
Cypress.Commands.add("uploadFile", (fileDirectory) => {
  cy.get('input[type="file"]').invoke("show").selectFile(fileDirectory);
});

// clickable text:
// Cypress.Commands.add("clickOnOurEmailText", () => {
//   const stub = cy.stub().as("myStub");
//   cy.get('p[class="style__LinkBlock-sc-vjdo4-18 vBDzI"]')
//     .find("a")
//     .click()
//     .then(() => {});
// });

Cypress.Commands.add("clickOnPrivacyPolicyTextAndExpectSuccessRedirect", () => {
  cy.get('p[class="style__PolicyFormText-sc-vjdo4-13 hdUGNV"]')
    .find("a")
    .click()
    .url()
    .should("include", "policy");
});