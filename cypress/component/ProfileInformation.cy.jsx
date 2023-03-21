import ProfileInformation from "../../components/ProfileInformation";

describe("ProfileInformation.cy.jsx", () => {
  it("Check if component mounted!", () => {
    cy.mount(<ProfileInformation />);
  });

  it("Check if component mounted with props!", () => {
    cy.mount(
      <ProfileInformation
        name="TEST NAME"
        drops={1}
        description="TEST DESCRIPTION"
        uid="TEST UID"
      />
    );
  });

  it("Check if component has name, drops!", () => {
    cy.mount(
      <ProfileInformation
        name="TEST NAME"
        drops={1}
        description="TEST DESCRIPTION"
        uid="TEST UID"
      />
    );
    cy.get("span").contains("TEST NAME");
    cy.get("span").contains("1 drop");
  });
});
