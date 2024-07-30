import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "./Tile.css";

const FlipTile = ({ imageSrc, backText }) => {
  const [state, setState] = useState(0); // 0: original, 1: flipped, 2: enlarged

  const handleClick = (e) => {
    e.stopPropagation();
    if (state === 0) {
      setState(1); // Flip the card
    } else if (state === 1) {
      setState(2); // Enlarge the card
    }
  };

  const handleShrink = (e) => {
    e.stopPropagation();
    setState(0); // Return to original state
  };

  return (
    <div
      className={`flip-card ${state === 1 ? "flipped" : ""} ${
        state === 2 ? "enlarged" : ""
      }`}
      onClick={state !== 2 ? handleClick : null}
    >
      <div className={`flip-card-inner`}>
        <div className="flip-card-front">
          <Card>
            <Card.Img variant="top" src={imageSrc} />
          </Card>
        </div>
        <div className="flip-card-back">
          <Card>
            <Card.Body>
              <Card.Text>{backText}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      {state === 2 && (
        <button className="close-button" onClick={handleShrink}>
          X
        </button>
      )}
    </div>
  );
};

export default FlipTile;
