import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Overlay() {
  const isDarkMode = useSelector((state) => state.mode.dark);
  const [hide, setHide] = useState(true);

  useEffect(() => {
    setHide(!hide);
  }, []);
  return (
    <div
      style={{ ...(hide ? { opacity: "0", pointerEvents: "none" } : {}) }}
      className={`overlay ${isDarkMode ? "white-overlay" : "dark-overlay"}`}
    ></div>
  );
}

export default Overlay;
