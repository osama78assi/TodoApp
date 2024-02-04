import { useSelector } from "react-redux";
import EditImg from "./EditImg";
import DateContainer from "./DateContainer";
import { useNavigate } from "react-router-dom";

function GroupHeader({ handelCollapse, isExpanded, headerRef, data }) {
  const isDarkMode = useSelector((state) => state.mode.dark);
  const navigate = useNavigate();

  function handleAlter() {
    navigate(`editGroup?id=${data.id}&name=${data.name}&color=${data.color}`);
  }

  return (
    <div
      className={`header ${
        data.color == "default"
          ? isDarkMode
            ? "dark-1"
            : "white-1"
          : data.color
      }`}
      ref={headerRef}
    >
      <div className="details">
        <h2>{data.name}</h2>
        <DateContainer date={data.createdAt} />
      </div>
      <div className="btns">
        <div
          className={`btn ${isDarkMode ? "dark-1" : "white-1"}`}
          onClick={() => handleAlter()}
        >
          <EditImg />
        </div>
        <div
          className={`btn ${isDarkMode ? "dark-1" : "white-1"}`}
          onClick={() => handelCollapse()}
        >
          <button className="collapse">{isExpanded ? "-" : "+"}</button>
        </div>
      </div>
    </div>
  );
}

export default GroupHeader;
