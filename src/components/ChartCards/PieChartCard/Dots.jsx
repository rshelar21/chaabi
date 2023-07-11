import React from "react";
import "./PieChartCard.css";

const Dots = ({ item }) => {
  return (
    <>
      <div className="dot__body">
        <div
          className="dots"
          style={{ backgroundColor: `var(${item.color})` }}
        />
        <span className="dots__headline">{item.title}</span>
      </div>
    </>
  );
};

export default Dots;
