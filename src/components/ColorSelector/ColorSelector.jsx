import React from "react";
import "./ColorSeclector.css";

const ColorSelector = ({
  colors,
  selectedColor,
  selectColor,
  type,
  disabled = false,
}) => {
  return (
    <div className="selector">
      {colors.map((color) => {
        return (
          <div className="selector__color" key={color}>
            <input
              type="radio"
              id={color + type}
              value={color}
              name={type}
              checked={selectedColor === color}
              onChange={(e) => selectColor(e.target.value)}
              disabled={disabled}
            />
            <label
              className="selector__label"
              htmlFor={color + type}
              style={{
                "--color": `${color}`,
              }}
            ></label>
          </div>
        );
      })}
    </div>
  );
};

export default ColorSelector;
