describe("NAME input validation: VALID", () => {
  beforeEach("Visit to main page", () => {
    cy.catchAndStubbedYandexTrackerRequests()
      .ignoreSyntaxError()
      .visit("https://new.fortech.dev/")
      .wait(1000)
  });

  it("Submit Form with full options", () => {
    cy.typeName("Тест Имя")
      .typeEmail("test@email.dev")
      .clickOnCountryCodeDropdownButton()
      .selectCountryCode("Russia")
      .typePhoneNumber("9000000000")
      .typeDescription("Тест описание")
      .clickOnSubmitButton()
      .expectErrorMessageIsVisible()
  });
});
