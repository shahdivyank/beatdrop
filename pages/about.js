import WhatIsBeatdrop from "@/components/WhatIsBeatdrop";
import AboutSVG from "@/components/AboutSVG";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutSVGIntroduction from "@/components/AboutSVGIntroduction";
import WhoIsBeatdrop from "@/components/WhoIsBeatdrop";

const AboutPage = () => {
  return (
    <div className="bg-beatdrop-lightgrey flex justify-center items-center flex-col pt-0 font-outfit">
      <AboutSVG />

      <Row className="flex justify-center items-start w-10/12 ">
        <Col
          xl={8}
          className="m-0 p-0 flex justify-center items-start flex-col"
        >
          <WhatIsBeatdrop />
          <WhoIsBeatdrop />
        </Col>
        <Col xl={4}>
          <AboutSVGIntroduction />
        </Col>
      </Row>
    </div>
  );
};

export default AboutPage;
