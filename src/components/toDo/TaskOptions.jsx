import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkTask } from "../../stateSlices/tasksSlice";
import Checked from "./Checked";

function TaskOptions({ data }) {
  const isDarkMode = useSelector((state) => state.mode.dark);
  const tasks = useSelector((state) => state.tasks[data.id]);
  
  const checkedAll = tasks.reduce(
    (acc, cur) => acc && cur?.checked,
    tasks.length
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handelAddTask() {
    navigate(`newTask?groupId=${data.id}&groupName=${data.name}`);
  }

  function handelCheckAllTasks() {
    if (checkedAll) {
      tasks.forEach((task) => {
        dispatch(checkTask(data.id, task.id, false));
      });
    } else {
      tasks.forEach((task) => {
        if (!task.checked) {
          dispatch(checkTask(data.id, task.id, true));
        }
      });
    }
  }

  return (
    <div
      className={`task task-add ${
        data.color == "default"
          ? isDarkMode
            ? "dark-3"
            : "white-3"
          : `${data.color}-light`
      }`}
    >
      <div className="task-details">
        <h6>Options</h6>
      </div>
      <div className="row">
        <div className="option">
          <h6>Add Task</h6>
          <button
            className={`btn ${isDarkMode ? "dark-1" : "white-2"}`}
            onClick={handelAddTask}
          >
            +
          </button>
        </div>
        <div className="option">
          <h6>{checkedAll ? "Uncheck All Tasks" : "Check All Tasks"}</h6>
          <Checked
            check={tasks.length == 0 ? null : checkedAll}
            onCheck={handelCheckAllTasks}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskOptions;
