import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Intro.css"; // Import the CSS file for additional styling if needed
import "bootstrap/dist/css/bootstrap.min.css";
import Typewriter from "react-typewriter-effect";
import stevenPhoto from "./steven_photo.jpg";
const Section = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} className="text-center text-md-start">
          <h2 className="description-title">Steven Li</h2>
          <div className="typewriter-text">
            <Typewriter
              text="Aspiring Software Developer"
              cursorColor="#000"
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
              options={{
                loop: true,
                wrapperClassName: "typewriter-text",
              }}
            />
          </div>
        </Col>
        <Col md={6} className="text-center">
          <img
            src={stevenPhoto}
            alt="Person"
            className="img-fluid rounded-circle"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
