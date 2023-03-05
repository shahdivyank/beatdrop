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
          width="fill"
          height="100%"
          className="block"
          viewBox="0 0 1440 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M437.203 795.855C173.227 595.871 -209.059 557.268 -357.691 301.772C-502.795 52.3418 -203.515 -265.02 -58.4251 -372.528C60.5668 -460.697 443.718 459.47 660.383 522.264C857.32 579.339 748.636 8.12468 944.259 146.784C1198.93 327.294 1626 455.498 1673.37 679.875C1724.12 920.214 1219.63 706.599 1090.25 838.258C978.869 951.603 1233.61 1359.08 1019.59 1345.18C814.389 1331.86 658.334 963.381 437.203 795.855Z"
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
