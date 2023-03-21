/// <reference types="cypress"

context("Profile", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/profile");
  });

  it("Find 'drops'", () => {
    cy.get("div").contains("drops");
  });
});
