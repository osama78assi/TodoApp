import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { addGroup } from "../../stateSlices/groupsSlice";
import { addTaskArr } from "../../stateSlices/tasksSlice";
import Input from "../global/Input";
import FloatComponent from "../global/FloatComponent";
import InputGroup from "../global/InputGroup";
import InputErr from "../global/InputErr";
import Overlay from "../global/Overlay";
import ColorPalette from "./ColorPalette";
import { getRandomId } from "../../helper";

function FormAddGroup() {
  const isDarkMode = useSelector((state) => state.mode.dark);
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("default");
  const [nameErr, setNameErr] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  function handelAddGroup(e) {
    e.preventDefault();
    if (groupName != "") {
      const id = getRandomId();
      setNameErr("");
      // Add The Group With The Id
      dispatch(addGroup(id, groupName.trim(), groupColor));
      // Prepare An Array Of Tasks For This Group Depending On The Id
      dispatch(addTaskArr(id));
      navigate(-1, { replace: true });
    } else {
      setNameErr("Name Mustn't Be Empty");
    }
  }

  function handelClose(e) {
    e.preventDefault();
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
          onSubmit={(e) => handelAddGroup(e)}
          className={`pd-1 ${
            isDarkMode ? "dark-1" : "white-1"
          } col-ty-12 col-sm-12 col-6`}
        >
          <button className="close" onClick={(e) => handelClose(e)}>
            ❌
          </button>

          <InputGroup label="Group Name" labelFor="name">
            <Input
              req={true}
              id="name"
              name="name"
              type="text"
              val={groupName}
              onType={setGroupName}
              refEle={inputRef}
            />
            {nameErr ? <InputErr msg={nameErr} /> : <></>}
          </InputGroup>
          <ColorPalette label={"Select Color"} getColor={setGroupColor} />
          <input type="submit" value={"Add"} />
        </form>
      </FloatComponent>
    </>
  );
}

export default FormAddGroup;
