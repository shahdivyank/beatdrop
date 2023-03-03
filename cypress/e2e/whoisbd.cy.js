context("WhoisBeatDrop", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/about");
  });

  it("Find 'who is beatdrop'", () => {
    cy.get("p").contains("who is beatdrop");
  });
});
