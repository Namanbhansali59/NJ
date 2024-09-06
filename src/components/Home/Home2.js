import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hi, I'm Naman Jain, and I recently completed my Master's in Computer Applications with a specialization in AI and ML. 
              <br />
              <br />Throughout my academic journey, I've honed my skills in
              <i>
                <b className="purple"> data analysis, SQL, and web technologies like HTML and CSS. </b>
              </i>
              <br />
              <br />
              I also have hands-on experience in building &nbsp;
              <i>
                <b className="purple">machine learning models and working on web development projects </b> and
                also in areas related to{" "}
                <b className="purple">
                  Data Science.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I channel my passion 
              For <b className="purple">Travelling</b> and
              <i>
                <b className="purple">
                  {" "}
                  Bike rides.
                </b>
              </i>
              &nbsp;  I have travelled to several places in Nepal and currently exploring India.
              <i>
                <b className="purple"> Pokhara and Mustang are my favourites.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Namanbhansali59/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/namanbhansali59/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/naman-jain-3247831b7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/naman__jain.exe/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
