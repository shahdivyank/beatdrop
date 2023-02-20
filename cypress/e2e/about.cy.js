/// <reference types="cypress"

context("About", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Find 'about'", () => {
    cy.get("Nav").contains("about");
  });
});
