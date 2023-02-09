import AboutNav from "@/components/AboutNav";
import Developers from "@/components/Developers";
import Introduction from "@/components/Introduction";
import React from "react";
import { Col, Row } from "react-bootstrap";

const about = () => {
  return (
    <div className="bg-beatdrop-lightgrey">
      <Row>
        <Col xl={3}>
          <AboutNav />
        </Col>
        <Col xl={9}>
          <Introduction />
          <Developers />
        </Col>
      </Row>
    </div>
  );
};

export default about;
