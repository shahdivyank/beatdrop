import {
  SiNextdotjs,
  SiJavascript,
  SiFigma,
  SiGithub,
  SiPrettier,
  SiEslint,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiCypress,
} from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const WhatIsBeatdrop = () => {
  return (
    <section id="introduction">
      <p className="text-6xl font-semibold pt-0 font-outfit">
        what is beatdrop
      </p>
      <div className="bg-white rounded-3xl font-outfit">
        <div>
          <p className="m-0 text-2xl text-beatdrop-purple my-3 pl-8 pt-8">
            description and motivation
          </p>
          <div className="border-l-2 border-beatdrop-darkgrey px-8 ml-8">
            <p className="text-md">
              BeatDrop is a geographic-based music-sharing application. The goal
              of BeatDrop is for you to document experiences by linking your
              current location to a song of your choosing, and then allowing you
              to share it to the public, or keep it for your own catalog. You
              will be able to drop a beat which will detail the following:
            </p>
            <ul className="list-disc">
              <li>location</li>
              <li>time</li>
              <li>song link</li>
              <li>
                caption <span className="text-[#D9D9D9]">(optional)</span>
              </li>
            </ul>
            <p className="text-md">
              Our motivation for this platform is to create an interactive
              website that documents special moments that can only be audibly
              captured. BeatDrop catalogs the places you have been to and allows
              you to share music and attach memories of your surroundings.
              Glance back at memories and explore community BeatDrops to
              <span className="text-beatdrop-pink font-bold">
                {" "}
                hear the world from another’s perspective.
              </span>
            </p>
          </div>
        </div>
        <div className="pb-16">
          <p className="m-0 text-2xl text-beatdrop-purple my-3 pl-8">
            tech stack
          </p>
          <div className="border-l-2 border-beatdrop-darkgrey px-8 ml-8">
            <Row className="flex w-1/2">
              <Col className="m-1 px-4 py-2 bg-black rounded-full text-white flex items-center !max-w-fit whitespace-nowrap">
                <SiNextdotjs className="mr-2" />
                NEXT
              </Col>
              <Col className="m-1 px-4 py-2 bg-[#CF0000] rounded-full text-white flex items-center !max-w-fit whitespace-nowrap">
                <FaGoogle className="mr-2" />
                GOOGLE CLOUD PLATFORM
              </Col>
              <Col className="m-1 px-4 py-2 bg-[#FEB538] rounded-full text-white flex items-center !max-w-fit whitespace-nowrap">
                <SiJavascript className="mr-2" />
                JAVASCRIPT
              </Col>
              <Col className="m-1 px-4 py-2 bg-[#00C2FF] rounded-full text-white flex items-center !max-w-fit whitespace-nowrap">
                <SiTailwindcss className="mr-2" />
                TAILWINDCSS
              </Col>
              <Col className="m-1 px-4 py-2 bg-[#005069] rounded-full text-white flex items-center !max-w-fit whitespace-nowrap">
                <SiCss3 className="mr-2" />
                CSS3
              </Col>
              <Col className="m-1 px-4 py-2 bg-[#D96100] rounded-full text-white flex items-center !max-w-fit whitespace-nowrap">
                <SiHtml5 className="mr-2" />
                HTML
              </Col>
              <Col className="m-1 px-4 py-2 bg-[#FFBC4A] rounded-full text-white flex items-center !max-w-fit whitespace-nowrap">
                <SiFirebase className="mr-2" />
                FIREBASE
              </Col>
              <Col className="m-1 px-4 py-2 bg-[#3B054F] rounded-full text-white flex items-center !max-w-fit whitespace-nowrap">
                <SiEslint className="mr-2" />
                ESLINT
              </Col>
              <Col className="m-1 px-4 py-2 bg-[#2C4952] rounded-full text-white flex items-center !max-w-fit whitespace-nowrap">
                <SiPrettier className="mr-2" />
                PRETTIER
              </Col>
              <Col className="m-1 px-4 py-2 bg-black rounded-full text-white flex items-center !max-w-fit whitespace-nowrap">
                <SiCypress className="mr-2" />
                CYPRESS
              </Col>
              <Col className="m-1 px-4 py-2 bg-[#0013C2] rounded-full text-white flex items-center !max-w-fit whitespace-nowrap">
                <SiGithub className="mr-2" />
                GITHUB ACTIONS
              </Col>
              <Col className="m-1 px-4 py-2 bg-[#E12A62] rounded-full text-white flex items-center !max-w-fit whitespace-nowrap">
                <SiFigma className="mr-2" />
                FIGMA
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsBeatdrop;
