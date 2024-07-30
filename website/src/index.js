import React from "react";
import ReactDOM from "react-dom/client";
import BasicExample from "./App";
import reportWebVitals from "./reportWebVitals";
import FlipTile from "./Tile";
import Section from "./Intro";
import { Container } from "react-bootstrap";
import Languages from "./languages";
import Folder from "./Folder";
import "./index.css";

const imageSrc =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"; // Replace with actual image URL
const percentage = 75; // Set the fill percentage (0-100)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Container
    className="d-flex flex-column align-items-left"
    style={{ minHeight: "100vh" }}
  >
    <BasicExample />
    <Section />
    <Folder name="Languages">
      <Languages imageSrc={imageSrc} percentage={percentage} />
    </Folder>
    <Folder name="Experiences">
      <FlipTile
        imageSrc="https://via.placeholder.com/300x200"
        backText="This is the back of the card"
      />
      <FlipTile
        imageSrc="https://via.placeholder.com/300x200"
        backText="This is the back of the card"
      />
    </Folder>
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
