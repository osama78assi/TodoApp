import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function FloatComponent({ children }) {
  const isDarkMode = useSelector((state) => state.mode.dark);
  const [hide, setHide] = useState(true);

  useEffect(() => {
    setHide(!hide);
  }, []);

  return (
    <div
      style={{ ...(hide ? { opacity: "0", pointerEvents: "none" } : {}) }}
      className={`float container radius-1 pd-y-1 ${
        isDarkMode ? "dark-1" : "white-1"
      }`}
    >
      {children}
    </div>
  );
}

export default FloatComponent;
