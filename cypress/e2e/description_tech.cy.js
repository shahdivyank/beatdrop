/// <reference types="cypress"

context("Description & Tech Stack", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/about");
  });

  it("Find 'description and motivation'", () => {
    cy.get("p").contains("description and motivation");
  });

  it("Find 'tech stack'", () => {
    cy.get("p").contains("tech stack");
  });
});
