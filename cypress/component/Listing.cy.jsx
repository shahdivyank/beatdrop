import Listing from "../../components/Listing";

describe("Listing.cy.jsx", () => {
  it("Check if component mounted!", () => {
    cy.mount(<Listing />);
  });

  it("Check if component mounted with props!", () => {
    cy.mount(<Listing setToggleUpload="TEST FUNC" token="TEST TOKEN" />);
  });
});
