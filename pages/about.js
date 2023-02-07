import Introduction from "@/components/Introduction";
import React from "react";
import { Col, Row } from "react-bootstrap";

const about = () => {
  return (
    <Row>
      <Col xl={3}></Col>
      <Col xl={9}>
        <Introduction />
      </Col>
    </Row>
  );
};

export default about;
