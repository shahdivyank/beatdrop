import AboutNav from "@/components/AboutNav";
import Developers from "@/components/Developers";
import Introduction from "@/components/Introduction";
import React from "react";
import { Col, Row } from "react-bootstrap";

const about = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 -z-10 overflow-hidden bg-beatdrop-lightgrey">
        <title>About</title>
        <svg
          width="100vw"
          height="100%"
          viewBox="0 0 1440 1693"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M703.356 1214.83C335.498 1057.57 -123.872 1124.04 -372.755 868.005C-615.729 618.046 -357.683 158.595 -219.037 -9.81947C-105.331 -147.94 612.685 818.64 884.995 828.923C1132.51 838.269 838.184 200.495 1108 305.852C1459.26 443.008 1997.31 468.47 2118.41 717.624C2248.12 984.503 1594.37 881.552 1481.2 1073.68C1383.77 1239.09 1801.44 1642.26 1546.53 1688.51C1302.11 1732.87 1011.51 1346.57 703.356 1214.83Z"
            fill="#E9E9E9"
          />
        </svg>
      </div>
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
