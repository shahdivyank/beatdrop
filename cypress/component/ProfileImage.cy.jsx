import ProfileImage from "../../components/ProfileImage";

describe("ProfileImage.cy.jsx", () => {
  it("Check if component mounted!", () => {
    cy.mount(<ProfileImage />);
  });

  it("Check if component mounted with props!", () => {
    cy.mount(<ProfileImage image="TEST IMAGE" />);
  });

  it("Check if component mounted with valid props!", () => {
    cy.mount(
      <ProfileImage image="https://dashboard.snapcraft.io/site_media/appmedia/2017/12/spotify-linux-256.png" />
    );
  });
});
