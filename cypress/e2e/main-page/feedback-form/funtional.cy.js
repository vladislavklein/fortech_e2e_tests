import { correct } from "../../../support/main-page/feedback-form/consts";
import { error } from "../../../support/main-page/feedback-form/consts";
import { file } from "../../../support/main-page/feedback-form/consts";

describe("Feedback form Submits", () => {
  beforeEach("Visit to main page", () => {
    cy.catchAndStubbedYandexTrackerRequests()
      .ignoreSyntaxError()
      .visit("/")
      .wait(1000);
  });

  it("Submit Form with full options", () => {
    cy.enterName(correct.name)
      .enterEmail(correct.email)
      .clickOnFlagDropdownButton()
      .selectRussiaInCountriesList()
      .enterPhone(correct.phone)
      .uploadFile(file.txt)
      .checkCheckbox()
      .clickOnButton("submit")
      .expectSuccessSubmitMessage();
  });

  it("Form without Name - is not submit", () => {
    cy.enterEmail(correct.email)
      .enterPhone(correct.phone)
      .checkCheckbox()
      .clickOnButton("submit")
      .expectSuccessSubmitMeassageNotExist();
  });

  it("Form without Email - is not submit", () => {
    cy.enterName(correct.name)
      .enterPhone(correct.phone)
      .checkCheckbox()
      .clickOnButton("submit")
      .expectSuccessSubmitMeassageNotExist();
  });

  it("Form without Phone - is not submit", () => {
    cy.enterName(correct.name)
      .enterEmail(correct.email)
      .checkCheckbox()
      .clickOnButton("submit")
      .expectSuccessSubmitMeassageNotExist();
  });

  it("Form without checked Checkbox - is not submit", () => {
    cy.enterName(correct.name)
      .enterEmail(correct.email)
      .enterPhone(correct.phone)
      .clickOnButton("submit")
      .expectErrorMessageBelowCheckbox(error.pleaseConfirmPrivacyPolicy)
      .expectSuccessSubmitMeassageNotExist();
  });

  // it("OurEmail text is clickable and correct", () => {
  // });

  it("Privacy policy text is clickable and correct", () => {
    cy.clickOnPrivacyPolicyTextAndExpectSuccessRedirect();
  });
});

cy.get('text="another"')