/// <reference types="cypress"

context("WhatisBeatDrop", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Find 'abo'", () => {
    cy.get("Nav").contains("about");
  });
});
