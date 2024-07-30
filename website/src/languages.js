// HealthBar.js
import React, { useState, useEffect } from "react";
import "./languages.css"; // Import the CSS file for styling

const Languages = ({ imageSrc, percentage }) => {
  const [fill, setFill] = useState(0);

  useEffect(() => {
    // Add a slight delay before setting the fill percentage to simulate loading
    const timer = setTimeout(() => {
      setFill(percentage);
    }, 500); // Adjust the delay as needed (in milliseconds)

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="health-bar-container">
      <img
        src={imageSrc}
        alt="Programming Language"
        className="language-image"
      />
      <div className="health-bar">
        <div className="health-bar-fill" style={{ width: `${fill}%` }}></div>
      </div>
    </div>
  );
};

export default Languages;
