import React from "react";
import "./Creative.css";

const Creative = ({ title, subtitle, color }) => {
  return (
    <li
      className="creative"
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
    </li>
  );
};

export default Creative;
