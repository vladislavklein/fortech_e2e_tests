// ignore and disable Yandex Metrix:
Cypress.Commands.add("catchAndStubbedYandexTrackerRequests", () => {
  cy.intercept("GET", "https://mc.yandex.ru/**", {
    statusCode: 200,
    body: {},
  }).as("getYandexMetric");
  cy.intercept("POST", "https://mc.yandex.ru/**", {
    statusCode: 200,
    body: {},
  }).as("postYandexMetric");
});

// ignore "SyntaxError: Unexpected token '&'":
Cypress.Commands.add("ignoreSyntaxError", () => {
  Cypress.on("uncaught:exception", (err) => {
    // and don't want to fail the test so we return false
    if (err.message.includes("&")) {
      return false;
    }
  });
});

// scrolling:
Cypress.Commands.add("scrollingPageTo", (position)  => {
  const pagePosition = {
    bottom: 'bottom',
  };
  cy.scrollTo(pagePosition[position]);
});
