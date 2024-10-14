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

describe("NAME input validation: VALID", () => {
  beforeEach("Visit to main page", () => {
    cy.catchAndStubbedYandexTrackerRequests()
      .ignoreSyntaxError()
      .visit("https://new.fortech.dev/")
      .wait(1000);
  });

  it("Correct type all fields and click send", () => {
    cy.typeName(user.fullName)
      .typeEmail(email.correct)
      .clickOnCountryCodeDropdownButton()
      .selectCountryCode(countryCode.russia.name)
      .expectCountryCodeNumberIncludeInPlaceholderValue(countryCode.russia.code)
      .typePhoneNumber(pnoneNumber.standart)
      .typeDescription(description.small)
      .clickOnSubmitButton()
      .expectErrorMessageIsVisible();
  });

  it("Select CountryCode in PhoneNumber Input", () => {
    cy.clickOnCountryCodeDropdownButton()
      .selectCountryCode("Russia")
      .typePhoneNumber("9000000000")
      .typeDescription("Тест описание")
      .clickOnSubmitButton()
      .expectErrorMessageIsVisible();
  });
});
