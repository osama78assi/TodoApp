import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddGroup() {
  const isDarkMode = useSelector((state) => state.mode.dark);
  const navigate = useNavigate();

  return (
    <div className="group group-add">
      <div className={`header ${isDarkMode ? "dark-1" : "white-1"}`}>
        <div className="details">
          <h2>Add New Group</h2>
        </div>
        <div className="btns">
          <div className={`btn ${isDarkMode ? "dark-1" : "white-1"}`}>
            <button className="add" onClick={() => {
              navigate(`newGroup`);
            }}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddGroup;
