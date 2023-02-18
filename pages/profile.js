import React, { useEffect, useState } from "react";
import ProfileImage from "@/components/ProfileImage";
import ProfileInformation from "@/components/ProfileInformation";
import Profiledrops from "@/components/Profiledrops";
import { Col, Row } from "react-bootstrap";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Profile = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        setImage(currentState.photoURL);
        setName(currentState.displayName);
      }
    });
  }, []);

  return (
    <div className="bg-beatdrop-lightgrey pt-20 min-h-screen">
      <title>profile</title>
      <Row className="flex justify-center items-start">
        <Col xl={4} className="m-0 p-0 flex justify-center items-center">
          <ProfileImage image={image} />
        </Col>
        <Col
          xl={8}
          className="flex justify-center flex-col items-start p-0 m-0"
        >
          <ProfileInformation name={name} drops={1} friends={123456} />
          <Profiledrops />
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
