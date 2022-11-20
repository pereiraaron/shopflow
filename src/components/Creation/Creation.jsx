import React, { useState } from "react";
import ColorSelector from "../ColorSelector/ColorSelector";
import "./Creation.css";

const Creation = ({ colors, creatives, setCreatives, toggleCreation }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [color, setColor] = useState("");

  const handleCreationClick = () => {
    setCreatives([...creatives, { title, subtitle, color }]);
    closeCreation();
  };

  const closeCreation = () => {
    setTitle("");
    setSubtitle("");
    setColor("");
    toggleCreation();
  };

  return (
    <section className="creation">
      {/* First Container */}
      <div className="creation__heading">
        <h3>Creative Creation</h3>
        <h3 onClick={closeCreation} style={{ cursor: "pointer" }}>
          X
        </h3>
      </div>
      {/* First Container Ends */}
      {/* Second Container */}
      <div className="creation__input">
        <label htmlFor="filterText" className="subtitle">
          title
        </label>
        <input
          type="text"
          id="filterText"
          name="filterText"
          placeholder="Enter Title"
          style={{ padding: "4px" }}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      {/* Second Container Ends */}
      {/* Third Container */}
      <div className="creation__input">
        <label htmlFor="filterText" className="subtitle">
          subtitle
        </label>
        <input
          type="text"
          id="filterText"
          name="filterText"
          placeholder="Enter Subtitle"
          style={{ padding: "4px" }}
          value={subtitle}
          onChange={(e) => {
            setSubtitle(e.target.value);
          }}
        />
      </div>
      {/* Third Container Ends */}
      {/* Fourth Container */}
      <div className="creation__color">
        <label className="subtitle">background color</label>
        <ColorSelector
          colors={colors}
          selectedColor={color}
          selectColor={setColor}
          type={"creation"}
        />
      </div>
      {/* Fourth Container Ends */}
      {/* Fifth Container */}
      <button
        className="creation__button"
        onClick={handleCreationClick}
        disabled={
          title.trim().length === 0 ||
          subtitle.trim().length === 0 ||
          color.length === 0
        }
      >
        Done
      </button>
      {/* Fifth Container Ends */}
    </section>
  );
};

export default Creation;
