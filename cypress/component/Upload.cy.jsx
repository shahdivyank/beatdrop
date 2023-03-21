import Upload from "../../components/Upload";

describe("Upload.cy.jsx", () => {
  it("Check if component mounted!", () => {
    cy.mount(<Upload />);
  });

  it("Check if component mounted with props!", () => {
    cy.mount(<Upload setToggleUpload="TEST FUNC" token="TEST TOKEN" />);
  });
});
