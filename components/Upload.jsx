import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";

const colors = [
  "bg-beatdrop-orange",
  "bg-beatdrop-pink",
  "bg-beatdrop-teal",
  "bg-beatdrop-purple",
  "bg-beatdrop-yellow",
];

const Upload = ({ setToggleUpload, token }) => {
  const [data, setData] = useState({
    name: "",
    uid: "",
    hashtags: new Set(),
    latitude: 0.0,
    longitude: 0.0,
    likes: 0,
    songID: "",
    timestamp: "",
  });
  const [city, setCity] = useState("");
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [image, setImage] = useState("");
  const [results, setResults] = useState([]);
  const [tag, setTag] = useState("");
  const [authInfo, setAuthInfo] = useState({});
  const [coords, setCoords] = useState({});
  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(false);

  const handleUpload = () => {
    const dataPackage = {
      ...data,
      ...authInfo,
      ...coords,
      hashtags: [...data.hashtags],
      timestamp: new Date().getTime() / 1000,
    };

    const errorHandling = {};

    if (
      dataPackage.description === "" ||
      dataPackage.description === undefined
    ) {
      errorHandling["description"] = "Please provide a description!";
    }

    if (dataPackage.songID === "" || dataPackage.songID === undefined) {
      errorHandling["songID"] = "Please provide a song!";
    }

    setErrors(errorHandling);
    if (Object.keys(errorHandling).length === 0) {
      axios
        .post("/api/uploadDrop", dataPackage)
        .then((response) => {
          console.log(response);
          setToggleUpload(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSearch = () => {
    if (song === "" || artist === "") {
      setErrors({ ...errors, songID: "Enter a valid song and artist!" });
      return;
    }

    axios
      .post("/api/searchSpotify", { token: token, song: song, artist: artist })
      .then((response) => {
        setResults(response.data);
        setVisible(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearchClick = (result) => {
    setData({ ...data, songID: result.id });
    setImage(result.album.images[0].url);
  };

  const handleTagSubmit = (e) => {
    e.preventDefault();
    setData({ ...data, hashtags: new Set([...data.hashtags, tag]) });
    setTag("");
  };

  const handleTagRemove = (hashtag) => {
    const hashtags = data.hashtags;
    hashtags.delete(hashtag);
    setData({ ...data, hashtags: hashtags });
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        setAuthInfo({
          name: currentState.displayName,
          uid: currentState.uid,
        });
      }
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        axios
          .post(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
          )
          .then((response) => {
            setCity(
              response.data.plus_code.compound_code
                .split(",")[0]
                .split(" ")[1] +
                ", " +
                response.data.plus_code.compound_code.split(",")[1]
            );
            setCoords({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          });
      });
    }
  }, []);

  return (
    <>
      <div className="h-fit grid grid-cols-9 shadow-sm rounded-4xl bg-[#F5F5F5] w-full mx-6 my-2">
        <div className="col-span-4 m-5 flex justify-center items-center flex-col ">
          {image === "" && (
            <div className="bg-[#EBEBEB] rounded-2xl w-9/12 aspect-square flex justify-center items-center mb-3">
              <BsMusicNoteBeamed className="text-9xl text-[#F5F5F5]" />
            </div>
          )}
          {image !== "" && (
            <div className="bg-[#EBEBEB] rounded-xl w-9/12 aspect-square flex justify-center items-center">
              <Image
                src={image}
                className="rounded-2xl w-full h-full"
                alt="album"
                //unsure about these values below. not sure which image this is.
                width={500}
                height={500}
              />
            </div>
          )}

          <Dropdown className="!bg-none m-0 p-0">
            <Dropdown.Toggle className="after:!content-none p-0 m-0 px-2 !bg-[#F5F5F5] !border-none">
              <div className="flex justify-center items-center bg-white rounded-full">
                <input
                  className="w-full p-1 px-3 text-sm bg-white outline-none text-black"
                  type="text"
                  placeholder="song name"
                  name="first"
                  autoComplete="off"
                  onChange={(e) => setSong(e.target.value)}
                  maxLength={50}
                />
                <input
                  className="w-full p-1 px-3 text-sm bg-white outline-none text-black"
                  type="text"
                  placeholder="artist name"
                  name="first"
                  autoComplete="off"
                  onChange={(e) => setArtist(e.target.value)}
                  maxLength={50}
                />
                <FiSearch
                  className="text-3xl m-2 text-[#D9D9D9]"
                  onClick={handleSearch}
                />
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className={`${visible ? "!inline" : "!hidden"}`}>
              {results.length !== 0 &&
                results.map((result, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => {
                      handleSearchClick(result);
                      setVisible(false);
                    }}
                    className="!flex justify-start items-center"
                  >
                    <Image
                      src={result.album.images[0].url}
                      className="rounded-full"
                      alt="album image"
                      width={40}
                      height={40}
                    />
                    <p className="mb-0">
                      {result.name} by {result.artists[0].name}
                    </p>
                  </Dropdown.Item>
                ))}
              {/* {results.length === 0 && (
                <Dropdown.Item>YOU NEED TO TYPE FIRST</Dropdown.Item>
              )} */}
            </Dropdown.Menu>
          </Dropdown>
          {errors["songID"] && (
            <p className="text-red-500">{errors["songID"]}</p>
          )}
        </div>

        <div className="col-span-5 border-l-2 border-[#EBEBEB] px-10 my-4 flex justify-center items-start flex-col  ">
          <div className="flex justify-between w-full m-0 ">
            <div className="text-2xl mr-10 font-semibold ">{authInfo.name}</div>
            <div className="flex">
              <div className="text-xs  bg-beatdrop-pink rounded-full w-fit h-fit  m-2 p-1 px-3 text-white ">
                {city}
              </div>

              <div>
                <FaTimes
                  className="hover:text-red-500 hover:cursor-pointer "
                  onClick={() => setToggleUpload(false)}
                />
              </div>
            </div>
          </div>

          <textarea
            className="w-full resize-none text-black h-[20vh] p-3 text-sm mt-2 rounded-2xl border-solid border-2 border-beatdrop-grey bg-beatdrop-lightgrey"
            type="text"
            id="first"
            placeholder="write message here"
            name="first"
            onChange={(e) => setData({ ...data, description: e.target.value })}
            maxLength={280}
          />
          {errors["description"] && (
            <p className="text-red-500">{errors["description"]}</p>
          )}

          <div className="my-3">
            <div className="text-xs text-[#BABABA] mb-2">TAGS</div>
            <form onSubmit={handleTagSubmit}>
              <input
                className="text-black pl-3 py-1 text-sm rounded-full border-solid border-2 border-beatdrop-grey bg-beatdrop-lightgrey w-fit"
                type="text"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="add tag"
                name="first"
                autoComplete="off"
                maxLength={20}
              />
            </form>
            <Row className="flex justify-start items-center w-fit m-0 py-3">
              {[...data.hashtags].map((hastag, index) => (
                <Col key={index} className="!max-w-fit p-1">
                  <button
                    className={`${
                      colors[index % colors.length]
                    } text-white px-3 py-1 rounded-full flex justify-center items-center`}
                  >
                    #{hastag}
                    <FaTimes
                      className="hover:text-red-500 ml-2"
                      onClick={() => handleTagRemove(hastag)}
                    />
                  </button>
                </Col>
              ))}
            </Row>
          </div>

          <button
            onClick={handleUpload}
            className="bg-beatdrop-pink rounded-full text-white w-full text-xs py-1.5 hover:bg-beatdrop-yellow"
          >
            UPLOAD BEATDROP{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Upload;
