/// <reference types="cypress"

context("Welcome", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Find 'hear the world from another’s perspective'", () => {
    cy.get("h3").contains("hear the world from another’s perspective");
  });
});
