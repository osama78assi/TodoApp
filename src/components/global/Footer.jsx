import { useState } from "react";
import { useSelector } from "react-redux";

function Footer() {
  const date = new Date();
  const isDarkMode = useSelector((state) => state.mode.dark);
  return (
    <footer className={`footer pd-y-1 ${isDarkMode ? "dark-1": "white-1"}`}>
      <p>&copy; - Copyright Osama Assi 2020 - {date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
