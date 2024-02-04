import { useState } from "react";
import { useSelector } from "react-redux";

function Card({ details }) {
  const { title, features, price, imgUrl, imgAlt } = details;
  const isDarkMode = useSelector((state) => state.mode.dark);
  return (
    <div
      className={`card pd-1 col-12 col-md-6 col-lg-4 col-xl-4 radius-1 ${
        isDarkMode ? "dark-1" : "white-1"
      }`}
    >
      <h1>{title}</h1>
      <div className="card-content pd-1">
        <ul className="card-list">
          <img src={imgUrl} alt={imgAlt} />
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <p>
          Just For <strong>{price}</strong>
        </p>
      </div>
      <button className="card-buy radius-1">Buy</button>
    </div>
  );
}

export default Card;
