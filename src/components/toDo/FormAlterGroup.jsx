import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { alterGroup, deleteGroup } from "../../stateSlices/groupsSlice";
import { deleteTask } from "../../stateSlices/tasksSlice";
import InputErr from "../global/InputErr";
import InputGroup from "../global/InputGroup";
import Input from "../global/Input";
import Overlay from "../global/Overlay";
import FloatComponent from "../global/FloatComponent";
import ColorPalette from "./ColorPalette";

// To Not Created It Every Re-render
const deletedTask = new Set();

function FormAlterGroup() {
  const [strQuery] = useSearchParams();
  const isDarkMode = useSelector((state) => state.mode.dark);
  const tasks = useSelector((state) => state.tasks[strQuery.get("id")]);
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState(strQuery.get("name"));
  const [groupColor, setGroupColor] = useState(strQuery.get("color"));
  const [nameErr, setNameErr] = useState("");
  const [insureDelete, setInsureDelete] = useState("");
  const dispatch = useDispatch();

  function handelClose(e) {
    e.preventDefault();
    navigate(-1, { replace: true });
  }

  // Handle Submit Form And Update The Group
  function handelAlterGroup(e) {
    e.preventDefault();
    if (groupName == "") {
      setNameErr("Group Name Can't Be Empty");
      return;
    }
    deletedTask.forEach((id) => {
      dispatch(deleteTask(strQuery.get("id"), id));
    });
    dispatch(alterGroup(strQuery.get("id"), groupName.trim(), groupColor));
    navigate(-1, { replace: true });
  }

  function handleDeleteGroup(e) {
    e.preventDefault();
    if (insureDelete == "") {
      setInsureDelete("Click Again To Delete");
      return;
    }
    dispatch(deleteGroup(strQuery.get("id")));
    navigate(-1, { replace: true });
  }

  // Handle Add Tasks To Delete
  function addDeleted(item) {
    if (deletedTask.has(item)) {
      deletedTask.delete(item);
      return;
    }
    deletedTask.add(item);
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

          <InputGroup label="Change Group Name" labelFor="name">
            <Input
              req={true}
              id="name"
              name="name"
              type="text"
              val={groupName}
              onType={setGroupName}
            />
            {nameErr ? <InputErr msg={nameErr} /> : <></>}
          </InputGroup>

          {tasks.length ? (
            <>
              <p className="label-delete">
                Selete Tasks To <span className="red-item-1">Delete</span>
              </p>
              <div className="edit-tasks">
                {tasks.map((task) => (
                  <InputGroup
                    key={task.id}
                    label={task.title}
                    labelFor={task.id}
                  >
                    <Input
                      id={task.id}
                      val={task.id}
                      name={"tasks"}
                      onType={addDeleted}
                      type={"checkbox"}
                    ></Input>
                  </InputGroup>
                ))}
              </div>
            </>
          ) : null}

          <ColorPalette
            label={"Change Group Color"}
            value={groupColor}
            getColor={setGroupColor}
          />

          <InputGroup addLabel={false}>
            <input
              type="submit"
              value={"Save Changes"}
              onClick={(e) => handelAlterGroup(e)}
            />
            <input
              type="submit"
              value={"Delete Group"}
              onClick={(e) => handleDeleteGroup(e)}
              className="del"
            />
            {insureDelete ? <InputErr msg={insureDelete} /> : null}
          </InputGroup>
        </form>
      </FloatComponent>
    </>
  );
}

export default FormAlterGroup;
