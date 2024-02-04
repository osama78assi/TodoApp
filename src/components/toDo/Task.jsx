import { useDispatch, useSelector } from "react-redux";
import { checkTask } from "../../stateSlices/tasksSlice";
import Checked from "./Checked";
import DateContainer from "./DateContainer";
import EditImg from "./EditImg";
import { useNavigate } from "react-router-dom";

function Task({ task, groupId }) {
  const isDarkMode = useSelector((state) => state.mode.dark);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCheck(val) {
    dispatch(checkTask(groupId, task.id, val));
  }

  function handleAlter() {
    navigate(
      `editTask?groupId=${groupId}&taskId=${task.id}&title=${task.title}&color=${task.color}`
    );
  }

  return (
    <div className={`task ${task.color == "default" ? "" : task.color}`}>
      <div className="task-details">
        <Checked check={task.checked} onCheck={handleCheck} />
        <p>{task.title}</p>
      </div>
      <div className="row">
        <DateContainer date={task.createdAt} />
        <button
          className={`btn ${isDarkMode ? "dark-1" : "white-2"}`}
          onClick={() => handleAlter()}
        >
          <EditImg />
        </button>
      </div>
    </div>
  );
}

export default Task;
