import React, { useEffect, useState } from "react";
import ProfileImage from "@/components/ProfileImage";
import ProfileInformation from "@/components/ProfileInformation";
import Profiledrops from "@/components/Profiledrops";
import { Col, Row } from "react-bootstrap";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";

const Profile = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [uid, setUID] = useState("");
  const [profileInfo, setProfileInfo] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        setImage(currentState.photoURL);
        setName(currentState.displayName);
        setUID(currentState.uid);
        console.log(currentState);
        axios
          .post("/api/getUserInfo", {
            uid: currentState.uid,
          })
          .then((response) => {
            setProfileInfo(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }, []);

  return (
    <div className=" text-black">
      <div className="top-0 left-0 overflow-hidden  bg-beatdrop-lightgrey ">
        <svg
          width="100vw"
          height="100vh"
          viewBox="0 0 1440 648"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M984.5 602.5C736.046 525.307 -212.629 331.011 -398.5 203.5C-579.959 79.0155 -141.597 -41.5423 -75.0001 -127C-20.3823 -197.085 877.686 304.253 1049 308C1204.71 311.406 1255.95 76.9071 1437 128.5C1672.7 195.665 1715.37 39.9097 1820.6 164.627C1933.33 298.218 1308.87 268.244 1261 365.5C1219.79 449.228 1912.66 602.186 1758.94 626.793C1611.53 650.388 1192.63 667.164 984.5 602.5Z"
            fill="#E9E9E9"
          />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4">
        <title>profile</title>
        <Row className="flex justify-center mt-3 items-start">
          <Col xl={4} className=" flex justify-end items-center !pr-12">
            <ProfileImage image={image} />
          </Col>
          <Col
            xl={8}
            className="flex justify-center flex-col items-start p-0 m-0"
          >
            {profileInfo && (
              <ProfileInformation
                name={name}
                drops={profileInfo.dropCount}
                description={profileInfo.bio}
                uid={uid}
              />
            )}

            <Profiledrops />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
