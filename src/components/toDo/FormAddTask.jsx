import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../stateSlices/tasksSlice";
import Overlay from "../global/Overlay";
import FloatComponent from "../global/FloatComponent";
import Input from "../global/Input";
import InputGroup from "../global/InputGroup";
import InputErr from "../global/InputErr";
import ColorPalette from "./ColorPalette";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function FormAddTask() {
  const isDarkMode = useSelector((state) => state.mode.dark);
  const [strQuery] = useSearchParams();
  const [taskTitle, setTaskTitle] = useState("");
  const [taskColor, setTaskColor] = useState("default");
  const [titleErr, setTitleErr] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const groupId = strQuery.get("groupId");

  function handelAddTask(e) {
    e.preventDefault();
    if (taskTitle !== "") {
      setTitleErr("");
      dispatch(addTask(groupId, taskTitle.trim(), taskColor));
      navigate(-1, { replace: true });
    } else {
      setTitleErr("Task Title Mustn't Be Empty");
    }
  }

  function handelClose(e) {
    navigate(-1, { replace: true });
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <Overlay />
      <FloatComponent>
        <form
          onSubmit={(e) => handelAddTask(e)}
          className={`pd-1 ${
            isDarkMode ? "dark-1" : "white-1"
          } col-ty-12 col-sm-12 col-6`}
        >
          <button className="close" onClick={(e) => handelClose(e)}>
            ❌
          </button>

          <InputGroup label="Group Name" labelFor="group">
            <Input
              req={true}
              id="group"
              name="group"
              type="text"
              val={strQuery.get("groupName")}
              dis={true}
            />
          </InputGroup>

          <InputGroup label="Task Title" labelFor="title">
            <Input
              req={true}
              id="title"
              name="title"
              type="text"
              val={taskTitle}
              onType={setTaskTitle}
              refEle={inputRef}
            />
            {titleErr ? <InputErr msg={titleErr} /> : <></>}
          </InputGroup>
          <ColorPalette label={"Select Color"} getColor={setTaskColor} />
          <input type="submit" value={"Add"} />
        </form>
      </FloatComponent>
    </>
  );
}

export default FormAddTask;
