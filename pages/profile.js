import React, { useEffect, useState } from "react";
import ProfileImage from "@/components/ProfileImage";
import ProfileInformation from "@/components/ProfileInformation";
import Profiledrops from "@/components/Profiledrops";
import { Col, Row } from "react-bootstrap";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import axios from "axios";
// import { data } from "cypress/types/jquery";

const Profile = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [uid, setUID] = useState("");
  const [profileInfo, setProfileInfo] = useState();
  const [privateDrops, setPrivateDrops] = useState([]);

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
            console.log("API NOT REACHED");
          });
        axios
          .post("/api/getPrivateDrops", {
            uid: currentState.uid,
          })
          .then((response) => {
            setPrivateDrops(response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
            console.log("API NOT REACHED");
          });
      }
    });
  }, []);

  return (
    <div className=" text-black">
      <div className="top-0 left-0 overflow-hidden  bg-beatdrop-lightgrey ">
        <svg
          width="100vw"
          height="100%"
          viewBox="0 0 1440 635"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M660.925 528.095C379.668 472.636 5.3013 523.934 -171.814 417.784C-344.725 314.155 -97.2627 91.7486 28.7898 8.22842C132.168 -60.2683 623.07 350.5 840.617 342.879C1038.35 335.952 858.394 56.7877 1065.57 92.8832C1335.28 139.873 1764.67 127.175 1839.88 235.956C1920.44 352.477 1405.06 334.879 1297.35 428.121C1204.63 508.394 1504.2 674.376 1295.63 707.138C1095.64 738.553 896.531 574.552 660.925 528.095Z"
            fill="#E9E9E9"
          />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-4">
        <title>profile</title>
        <Row className="flex justify-center mt-3 items-start">
          <Col xl={3} className=" flex justify-end items-center !pr-12">
            <ProfileImage image={image} />
          </Col>
          <Col
            xl={9}
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

            <Profiledrops privateDrops={privateDrops} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Profile;
