import { useSelector } from "react-redux";
import GroupHeader from "./GroupHeader";
import GroupBody from "./GroupBody";
import { useEffect, useRef, useState } from "react";

let cooldown = false;

function Group({ children, data }) {
  const isDarkMode = useSelector((state) => state.mode.dark);
  const tasks = useSelector((state) => state.tasks);
  const [height, setHeight] = useState("0");
  const [isExpanded, setIsExpanded] = useState(true);

  const groupRef = useRef(null);
  const headerRef = useRef(null);
  const bodyRef = useRef(null);

  // Handel Collapse Effect
  function handelCollapse() {
    if (cooldown) {
      setIsExpanded(!isExpanded);
      cooldown = false;
    }
  }

  // Handel Height Of The Group In The Initial Render (Make It Number Not Auto)
  useEffect(() => {
    setHeight(getComputedStyle(groupRef.current).height);
  }, []);

  // Change Height Of The Group Depending On Expand State
  useEffect(() => {
    // Geting Height Of The Elements
    const headerHeight = +getComputedStyle(headerRef.current).height.split(
      "p"
    )[0];
    const bodyHeight = +getComputedStyle(bodyRef.current).height.split("p")[0];
    if (isExpanded) {
      setHeight(`${headerHeight + bodyHeight}px`);
    } else {
      setHeight(`${headerHeight}px`);
    }
  }, [isExpanded, tasks]);

  // Cooldown In The Expand Button
  useEffect(() => {
    setTimeout(() => {
      cooldown = true;
    }, 500);
  }, [isExpanded]);

  return (
    <div
      className={`group ${
        data.color == "default"
          ? isDarkMode
            ? "dark-3"
            : "white-3"
          : `${data.color}-light`
      }`}
      ref={groupRef}
      style={{ ...(height != "0" ? { height: height } : {}) }}
    >
      <GroupHeader
        handelCollapse={handelCollapse}
        isExpanded={isExpanded}
        headerRef={headerRef}
        data={data}
      />
      <GroupBody bodyRef={bodyRef} data={data}>
        {children}
      </GroupBody>
    </div>
  );
}

export default Group;
