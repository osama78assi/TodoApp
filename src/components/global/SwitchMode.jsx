import { useDispatch, useSelector } from "react-redux";
import { setDay, setDark } from "../../stateSlices/modeSlice";

function SwitchMode() {
  const isDarkMode = useSelector((state) => state.mode.dark);
  const dispatch = useDispatch();

  function setMode() {
    if (isDarkMode === true) {
      dispatch(setDay());
    } else {
      dispatch(setDark());
    }
  }

  return (
    <button
      className={`switch`}
      style={{ backgroundColor: isDarkMode ? "black" : "white" }}
    >
      <span
        onClick={() => setMode()}
        style={{
          boxShadow: `${
            isDarkMode
              ? "inset 0px 0px 5px #e9e9e9fc"
              : "inset 0px 0px 5px #161616fc"
          }`,
          left: `${isDarkMode ? "" : "calc(60px - 0.5rem)"}`,
        }}
      ></span>
      <img src="/public/sun.png" alt="sun"></img>
      <img src="/public/moon.png" alt="moon" />
    </button>
  );
}

export default SwitchMode;
