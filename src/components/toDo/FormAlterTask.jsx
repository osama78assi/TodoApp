import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { deleteTask, alterTask } from "../../stateSlices/tasksSlice";
import FloatComponent from "../global/FloatComponent";
import Input from "../global/Input";
import InputGroup from "../global/InputGroup";
import Overlay from "../global/Overlay";
import ColorPalette from "./ColorPalette";
import InputErr from "../global/InputErr";

function FormAlterTask() {
  const isDarkMode = useSelector((state) => state.mode.dark);
  const [strQuery] = useSearchParams();
  const [taskTitle, setTaskTitle] = useState(strQuery.get("title"));
  const [taskColor, setTaskColor] = useState(strQuery.get("color"));
  const [titleErr, setTitleErr] = useState("");
  const [insureDelete, setInsureDelete] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handelClose(e) {
    e.preventDefault();
    navigate(-1, { replace: true });
  }

  function handelAlterTask(e) {
    e.preventDefault();
    if (taskTitle == "") {
      setTitleErr("Title Can't Be Empty");
      return;
    }
    dispatch(
      alterTask(
        strQuery.get("groupId"),
        strQuery.get("taskId"),
        taskColor,
        taskTitle
      )
    );
    navigate(-1, {replace: true});
  }

  function handleDeleteTask(e) {
    e.preventDefault();
    if (insureDelete == "") {
      setInsureDelete("Click Again To Delete");
      return;
    }
    dispatch(deleteTask(strQuery.get("groupId"), strQuery.get("taskId")));
    navigate(-1, { replace: true });
  }

  return (
    <>
      <Overlay />
      <FloatComponent>
        <form
          className={`pd-1 ${
            isDarkMode ? "dark-1" : "white-1"
          } col-ty-12 col-sm-12 col-6`}
        >
          <button className="close" onClick={(e) => handelClose(e)}>
            ❌
          </button>

          <InputGroup label="Change Task Name" labelFor="name">
            <Input
              req={true}
              id="name"
              name="name"
              type="text"
              val={taskTitle}
              onType={setTaskTitle}
            />
            {titleErr ? <InputErr msg={titleErr} /> : <></>}
          </InputGroup>

          <ColorPalette
            label={"Change Task Color"}
            value={taskColor}
            getColor={setTaskColor}
          />

          <InputGroup addLabel={false}>
            <input
              type="submit"
              value={"Save Changes"}
              onClick={(e) => handelAlterTask(e)}
            />
            <input
              type="submit"
              value={"Delete Task"}
              onClick={(e) => handleDeleteTask(e)}
              className="del"
            />
            {insureDelete ? <InputErr msg={insureDelete} /> : null}
          </InputGroup>
        </form>
      </FloatComponent>
    </>
  );
}

export default FormAlterTask;
