import { useSelector } from "react-redux";

function GroupBody({ children, bodyRef, data }) {
  const isDarkMode = useSelector((state) => state.mode.dark);

  return (
    <div
      className={`body pd-1 ${
        data.color == "default"
          ? isDarkMode
            ? "dark-3"
            : "white-3"
          : `${data.color}-light`
      }`}
      ref={bodyRef}
    >
      {children}
    </div>
  );
}

export default GroupBody;
