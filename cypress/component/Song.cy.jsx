import Song from "../../components/Song";

describe("Song.cy.jsx", () => {
  it("Check if component mounted!", () => {
    cy.mount(<Song />);
  });

  it("Check if component mounted with multiple props with test props!", () => {
    cy.mount(
      <Song
        id="TEST ID"
        song="TEST SONG"
        image="TEST IMAGE"
        artist="TEST ARTIST"
        previewurl="TEST PREVIEW"
        externalurl="TEST EXTERNAL"
        username="TEST USERNAME"
        time="TEST TIME"
        hashtags="TEST HASHTAGS"
        longitude="TEST LNG"
        latitude="TEST LAT"
        description="TEST DESCRIPTION"
        setSelectedSong="TEST FUNC"
        toggleView="TEST VIEW"
        setToggleView="TEST FUNC"
        setToggleUpload="TEST FUNC"
        name="TEST NAME"
        likes="TEST LIKES"
      />
    );
  });

  it("Check if component mounted with multiple props with valid image and time props!", () => {
    cy.mount(
      <Song
        id="TEST ID"
        song="TEST SONG"
        image="https://dashboard.snapcraft.io/site_media/appmedia/2017/12/spotify-linux-256.png"
        artist="TEST ARTIST"
        previewurl="TEST PREVIEW"
        externalurl="TEST EXTERNAL"
        username="TEST USERNAME"
        time={{ seconds: new Date().getTime() / 1000 }}
        hashtags="TEST HASHTAGS"
        longitude="TEST LNG"
        latitude="TEST LAT"
        description="TEST DESCRIPTION"
        setSelectedSong="TEST FUNC"
        toggleView="TEST VIEW"
        setToggleView="TEST FUNC"
        setToggleUpload="TEST FUNC"
        name="TEST NAME"
        likes="TEST LIKES"
      />
    );
  });
});
