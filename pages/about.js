import React from "react";
import Introduction from "@/components/Introduction";
import AboutSVG from "@/components/AboutSVG";
import { Col, Row } from "react-bootstrap";
import AboutSVGIntroduction from "@/components/AboutSVGIntroduction";

const about2 = () => {
  return (
    <div>
      <AboutSVG />
      <Row>
        <Col xl={8}>
          <Introduction />
        </Col>
        <Col xl={4}>
          <AboutSVGIntroduction />
        </Col>
      </Row>
    </div>
  );
};

export default about2;
