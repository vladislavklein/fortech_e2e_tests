import { error } from "../../../support/main-page/feedback-form/consts";

describe("NAME input validation: VALID", () => {
  beforeEach("Visit to main page", () => {
    cy.catchAndStubbedYandexTrackerRequests()
      .ignoreSyntaxError()
      .visit("/")
      .wait(1000);
  });

  it("name without Space & Lowercase - is correct", () => {
    cy.enterName("examplename")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowNameInputIsNotExist();
  });
  it("name with Space & Upercase - is correct", () => {
    cy.enterName("EXAMPLE NAME")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowNameInputIsNotExist();
  });
  it("name with Two Space - is correct", () => {
    cy.enterName("Example NAME SecondName")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowNameInputIsNotExist();
  });
  it("name with minimal count letters - is correct", () => {
    cy.enterName("Abc")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowNameInputIsNotExist();
  });
  it("name with Cyrillic Text - is correct", () => {
    cy.enterName("Кириллица")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowNameInputIsNotExist();
  });
});

describe("NAME input validation: NOT VALID", () => {
  beforeEach("Visit to main page", () => {
    cy.catchAndStubbedYandexTrackerRequests()
      .ignoreSyntaxError()
      .visit("/")
      .wait(1000);
  });
  it("name with empty filed - is not correct", () => {
    cy.enterName("{enter}", { force: true })
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowNameInput(error.pleaseEnterName);
  });
  it("name with Space only - is not correct", () => {
    cy.enterName(" ", { force: true })
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowNameInput(error.pleaseEnterName);
  });
  it("name with Numbers - is not correct", () => {
    cy.enterName("Name12345")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowNameInput(error.pleaseEnterName);
  });
  it("name with Special Symbols - is not correct", () => {
    cy.enterName("Name!")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowNameInput(error.pleaseEnterName);
  });
  it("name less than 3 symbols - is not correct", () => {
    cy.enterName("Ab")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowNameInput(error.pleaseEnterName);
  });
  it("name with 3 symbols (Spaces only) - is not correct", () => {
    cy.enterName("   ", { force: true })
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowNameInput(error.pleaseEnterName);
  });
});

describe("EMAIL input validation: VALID", () => {
  beforeEach("Visit to main page", () => {
    cy.catchAndStubbedYandexTrackerRequests()
      .ignoreSyntaxError()
      .visit("/")
      .wait(1000);
  });
  it("email with Lowercase - is correct", () => {
    cy.enterEmail("mail@fortech.dev")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInputIsNotExist();
  });
  it("email with Uppercase - is correct", () => {
    cy.enterEmail("MAIL@FORTECH.DEV")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInputIsNotExist();
  });
  it("email with Numbers in name - is correct", () => {
    cy.enterEmail("mail12345@fortech.dev")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInputIsNotExist();
  });
  it("email with Numbers in domain - is correct", () => {
    cy.enterEmail("mail@12fortech345.dev") //  Нужно добавить в скип?
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInputIsNotExist();
  });
  it("email with Hyphen in name - is correct", () => {
    cy.enterEmail("mail-mail@fortech.dev")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInputIsNotExist();
  });
  it("email with Hyphen in domain - is correct", () => {
    cy.enterEmail("mail@for-tech.dev") //  Нужно добавить в скип?
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInputIsNotExist();
  });
  it("email with Underscore in name - is correct", () => {
    cy.enterEmail("mail_mail@fortech.dev")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInputIsNotExist();
  });
  it("email with Dot in name - is correct", () => {
    cy.enterEmail("mail.mail@fortech.dev")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInputIsNotExist();
  });
  it("email with Dual domain - is correct", () => {
    cy.enterEmail("mail@fortech.domain.dev") //  Нужно добавить в скип?
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInputIsNotExist();
  });
});

describe("EMAIL input validation: NOT VALID", () => {
  beforeEach("Visit to main page", () => {
    cy.catchAndStubbedYandexTrackerRequests()
      .ignoreSyntaxError()
      .visit("/")
      .wait(1000);
  });
  it("email with Empty field - is not correct", () => {
    cy.enterEmail("{enter}")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInput(error.pleaseEnterEmail);
  });
  it("email with Space only - is not correct", () => {
    cy.enterEmail(" ", "{enter}")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInput(error.pleaseEnterEmail);
  });
  it("email with Dot before name - is not correct", () => {
    cy.enterEmail(".mail@fortech.dev")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInput(error.pleaseEnterEmail);
  });
  it("email with Dot after name - is not correct", () => {
    cy.enterEmail("mail.@fortech.dev")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInput(error.pleaseEnterEmail);
  });
  it("email with Dot before domain - is not correct", () => {
    cy.enterEmail("mail@.fortech.dev")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInput(error.pleaseEnterEmail);
  });
  it("email with Dot after domain - is not correct", () => {
    cy.enterEmail("mail@fortech..dev")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInput(error.pleaseEnterEmail);
  });
  it("email without Dot in domain - is not correct", () => {
    cy.enterEmail("mail@fortechdev")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInput(error.pleaseEnterEmail);
  });
  it("email without @ - is not correct", () => {
    cy.enterEmail("mailfortech.dev")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInput(error.pleaseEnterEmail);
  });
  it("email with Space in name - is not correct", () => { // Не могу пропечатать символ пробела через тест
    cy.enterEmail("mail mail@fortech.dev")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInput(error.pleaseEnterEmail);
  });
  it("email with Space in domain - is not correct", () => { // Не могу пропечатать символ пробела через тест
    cy.enterEmail("mail@for tech.dev", { force: true }) 
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInput(error.pleaseEnterEmail); 
  });
  it("email with Underscore in domain - is not correct", () => {
    cy.enterEmail("mail@for_tech.dev")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInput(error.pleaseEnterEmail);
  });
  it("email without Name - is not correct", () => {
    cy.enterEmail("@fortech.dev")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInput(error.pleaseEnterEmail);
  });
  it("email without Domain - is not correct", () => {
    cy.enterEmail("mail@")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowEmailInput(error.pleaseEnterEmail);
  });
});

describe("PHONE input +7 Region validation: VALID", () => {
  beforeEach("Visit to main page", () => {
    cy.catchAndStubbedYandexTrackerRequests()
      .ignoreSyntaxError()
      .visit("/")
      .wait(1000);
  });

  it("phone with 10 numbers - is correct only", () => {
    cy.enterPhone("1234567890")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowPhoneInputIsNotExist();
  });
});

describe("PHONE input +7 Region validation: NOT VALID", () => {
  beforeEach("Visit to main page", () => {
    cy.catchAndStubbedYandexTrackerRequests()
      .ignoreSyntaxError()
      .visit("/")
      .wait(1000);
  });
  it("phone less than 10 numbers (9) - is not correct", () => {
    cy.enterPhone("123456789")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowPhoneInput(error.pleaseEnterPhone);
  });
  it("phone large than 10 numbers - is not enter", () => {
    cy.enterPhone("123456789011111")
      .expectPhoneInputValueIs("+7 (123) 456-78-90")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowPhoneInputIsNotExist();
  });
  it("phone with empty field - is not correct", () => {
    cy.enterPhone('{enter}', {force:true})
      .expectPhoneInputValueIs("+7")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowPhoneInput(error.pleaseEnterPhone);
  });
  it("phone with letters - is not enter", () => {
    cy.enterPhone('abcABC')
      .expectPhoneInputValueIs("+7")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowPhoneInput(error.pleaseEnterPhone);
  });
  it("phone with Special symbols - is not enter", () => {
    cy.enterPhone("+!@#$%^&*()")
      .expectPhoneInputValueIs("+7")
      .checkCheckbox()
      .clickOnButton("submit")
      .expectErrorMessageBelowPhoneInput(error.pleaseEnterPhone);
  });

});

