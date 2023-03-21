import View from "../../components/View";

describe("View.cy.jsx", () => {
  it("Check if component mounted!", () => {
    cy.mount(<View />);
  });

  it("Check if component mounted with multiple props with test props!", () => {
    cy.mount(
      <View
        id="TEST ID"
        song="TEST SONG"
        name="TEST NAME"
        artist="TEST ARTIST"
        externalurl="TEST EXTERNAL"
        previewurl="TEST PREVIEW"
        description="TEST DESCRIPTION"
        location="TEST LOCATION"
        image="TEST IMAGE"
        time="TEST TIME"
        hashtags="TEST HASHTAGS"
        setToggleView="TEST FUNC"
        dropLikes="TEST LIKES"
      />
    );
  });

  it("Check if component mounted with multiple props with valid image and time props!", () => {
    cy.mount(
      <View
        id="TEST ID"
        song="TEST SONG"
        name="TEST NAME"
        artist="TEST ARTIST"
        externalurl="TEST EXTERNAL"
        previewurl="TEST PREVIEW"
        description="TEST DESCRIPTION"
        location="TEST LOCATION"
        image="https://dashboard.snapcraft.io/site_media/appmedia/2017/12/spotify-linux-256.png"
        time={{ seconds: new Date().getTime() / 1000 }}
        hashtags="TEST HASHTAGS"
        setToggleView="TEST FUNC"
        dropLikes="TEST LIKES"
      />
    );
  });
});
