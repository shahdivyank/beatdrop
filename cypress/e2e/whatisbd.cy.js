/// <reference types="cypress"

context("WhatisBeatDrop", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/about");
  });

  it("Find 'what is beatdrop'", () => {
    cy.get("p").contains("what is beatdrop");
  });
});
