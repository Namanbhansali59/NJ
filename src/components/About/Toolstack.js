import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiVercel,
  SiWindows11,
} from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";



function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGoogleAnalytics />
      </Col>
    </Row>
  );
}

export default Toolstack;
