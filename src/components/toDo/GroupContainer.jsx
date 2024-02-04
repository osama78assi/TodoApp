import { useSelector } from "react-redux";

function GroupContainer({ children }) {
  const isDarkMode = useSelector((state) => state.mode.dark);
  return (
    <div className={`layout layout-group ${isDarkMode ? "dark-3" : "white-3"}`}>
      <div className="container pd-1">{children}</div>
    </div>
  );
}

export default GroupContainer;
