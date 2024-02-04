import { useState } from "react";
import { useSelector } from "react-redux";

function PageTitle({ text, type = 4, classes }) {
  const isDarkMode = useSelector((state) => state.mode.dark);
  return (
    <div
      className={`layout ${
        isDarkMode
          ? `dark-${type} text-white`
          : `white-${type} text-blue-strong`
      } ${classes ? classes : ""}`}
    >
      <h1 className="page-title pd-y-2">{text}</h1>
    </div>
  );
}

export default PageTitle;
