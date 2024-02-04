import { useState } from "react";
import { useSelector } from "react-redux";

function Section({ details }) {
  const isDarkMode = useSelector((state) => state.mode.dark);
  const { imgUrl, text, title, order, altImage } = details;
  return (
    <section
      className={`home-main-section radius-1 row ${
        // Simple Condition To Make The Page Looks Fine
        order == 1 ? "pd-l-1" : "pd-r-1"
      } pd-y-1 ${isDarkMode ? `dark-1` : `white-1`}`}
    >
      {order == 1 ? (
        <>
          <div className="col-ty-12 col-6">
            <img src={imgUrl} alt={altImage} className="radius-ly-1" />
          </div>
          <div className="text col-ty-12 col-6 pd-1">
            <h1 className="text-title">{title}</h1>
            {text}
          </div>
        </>
      ) : (
        <>
          <div className="text col-ty-12 col-6 pd-1">
            <h1 className="text-title">{title}</h1>
            {text}
          </div>
          <div className="col-ty-12 col-6">
            <img src={imgUrl} alt={altImage} className="radius-ry-1" />
          </div>
        </>
      )}
    </section>
  );
}

export default Section;
