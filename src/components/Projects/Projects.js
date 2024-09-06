import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import Customer from "../../Assets/Projects/codeEditor.png";
import mail from "../../Assets/Projects/chatify.png";
import unemployment from "../../Assets/Projects/Blog.png";
import DDS from "../../Assets/Projects/Blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mail}
              isBlog={false}
              title="Automate Mail"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DDS}
              isBlog={false}
              title="Driver-Drowsiness-system"
              description="This Python script utilizes OpenCV to detect faces and eyes in a live video stream from a webcam. It calculates the Eye Aspect Ratio (EAR) to detect drowsiness in the driver. When the EAR falls below a certain threshold for a specific duration, it triggers an alarm indicating that the driver is drowsy."
              ghLink="https://github.com/Namanbhansali59/Driver-Drowsiness-Detection-using-Python"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Customer}
              isBlog={false}
              title="customer-segmentation-lifetime-value "
              description="Customer segmentation is the process of dividing customers into groups based on shared characteristics such as behavior, demographics, or purchasing patterns. By segmenting customers, businesses can tailor their marketing strategies and offerings to better meet the needs of different customer segments."
              ghLink="https://github.com/Namanbhansali59/customer-segmentation-lifetime-value"
                         
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={unemployment}
              isBlog={false}
              title="Analyzing-Unemployment-Rates-During-COVID-19"
              description="This project involves analyzing unemployment rates during the COVID-19 pandemic. The goal is to understand the trends and forecast future unemployment rates using time series analysis.The project includes data cleaning, visualization, and ARIMA modeling."
              ghLink="https://github.com/Namanbhansali59/Analyzing-Unemployment-Rates-During-COVID-19"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Namanbhansali59/Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
