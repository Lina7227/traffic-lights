import React from "react";
import "./Card.css";

function Card({ data }) {
  const classRed = `light ${
    data.color === "DWNCNT_RED" ? "light-red_on" : "light-red"
  }`;

  const classYellow = `light ${
    data.color === "DWNCNT_OFF" ? "light-yellow_on" : "light-yellow"
  }`;

  const classGreen = `light ${
    data.color === "DWNCNT_GRN" ? "light-green_on" : "light-green"
  }`;

  return (
    <>
      <li className="element">
        <h2 className="element__title">{data.adress}</h2>
        <div className={classRed}></div>
        <div className={classYellow}></div>
        <div className={classGreen}></div>
        <div className="duration">
          <p className="duration__text">{data.duration}</p>
        </div>
      </li>
    </>
  );
}

export default Card;
