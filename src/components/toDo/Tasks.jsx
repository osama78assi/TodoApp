import { useSelector } from "react-redux";
import Task from "./Task";

function Tasks({ groupId }) {
  const tasks = useSelector((state) => state.tasks[groupId]);
  return tasks.map((task) => (
    <Task key={task.id} task={task} groupId={groupId} />
  ));
}

export default Tasks;
