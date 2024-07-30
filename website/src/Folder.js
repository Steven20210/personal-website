// Folder.js
import React, { useState } from "react";
import "./Folder.css";

const Folder = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleFolder = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className={`folder-container ${isOpen ? "open" : "closed"}`}>
      <div className="folder-bar" onClick={toggleFolder}>
        <span className="folder-name">{name}</span>
      </div>
      <div className="folder-content">{children}</div>
    </div>
  );
};

export default Folder;
