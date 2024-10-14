const user = {
  name: "Тест",
  nameAndSecondName: "Тестовый Пользователь",
  fullName: "Тестовый Пользователь Отчество",
};

const email = {
  correct: "test@fortech.dev",
};

const countryCode = {
  russia: { name: "Russia", code: "+7" },
};

const pnoneNumber = {
  standart: "9040000000",
};

const description = {
  small: "Это тест",
  long: "В 2017 году был открыт офис будущего Fortech. Основной фокус деятельности был направлен на разработку веб-сервисов для клиентов в США, Англии, Австралии, Германии, Великобритании, Израиле и других заграничных странах.",
};

describe("Test Feedback-Form Type 1: includes Name, Email & Phone", () => {
  beforeEach("Visit to main page", () => {
    cy.catchAndStubbedYandexTrackerRequests()
      .ignoreSyntaxError()
      .visit("/")
      .wait(1000);
  });

  it("Submit form with correct inputs", () => {
    cy.typeName(user.fullName)
      .typeEmail(email.correct)
      .typePhoneNumber(pnoneNumber.standart)
      .typeDescription(description.small)
      .clickOnSubmitButton()
      // .expectSubmitSuccessfulVisible();
  });

  xit("Submit form with incorrect inputs", () => {
    cy.typeName()
      .typeEmail()
      .typePhoneNumber()
      .typeDescription()
      .clickOnSubmitButton()
      // .expectSubmitErrorVisible();
  });

  it("Select CountryCode in PhoneNumber Input", () => {
    cy.clickOnCountryCodeDropdownButton()
      .selectCountryCode(countryCode.russia.name)
      .expectPlaceholderContainsCountryCode(countryCode.russia.code)
  });

  it.only("Additional button clicks on FeedbackForm", () => {
    cy.clickOnMailLinkButton()
      .clickOnTelegramLinkButton()
      .clickOnPolicyAcceptButton()
  });

});
