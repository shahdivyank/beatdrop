import React from "react";
import Developer from "./Developer";
import { Col, Row } from "react-bootstrap";
import Jisoo from "../public/jisoo.png";

const developers = [
  {
    name: "Bobby Lerias",
    image: Jisoo,
  },
  {
    name: "Rodrigo Llamas",
    image: Jisoo,
  },
  {
    name: "William Huang",
    image: Jisoo,
  },
  {
    name: "Mariam Golwalla",
    image: Jisoo,
  },
  {
    name: "Zergio Ruvalcaba",
    image: Jisoo,
  },
  {
    name: "Divyank Shah",
    image: Jisoo,
  },
];

const Developers = () => {
  return (
    <section id="developers">
      <Row className="flex py-4">
        {developers.map((developer, index) => (
          <Col key={index} xl={4}>
            <Developer name={developer.name} image={developer.image} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Developers;
