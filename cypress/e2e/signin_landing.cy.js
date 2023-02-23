/// <reference types="cypress"

context("Sign in", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Find 'sign in'", () => {
    cy.get("button").contains("sign in");
  });
});
