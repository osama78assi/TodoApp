import { useSelector } from "react-redux";
import Group from "./Group";
import GroupContainer from "./GroupContainer";
import Tasks from "./Tasks";
import AddGroup from "./AddGroup";
import TaskOptions from "./TaskOptions";

function landing() {
  const isDarkMode = useSelector((state) => state.mode.dark);
  const groups = useSelector((state) => state.groups);

  return (
    <div className={`layout ${isDarkMode ? "dark-4" : "white-3"}`}>
      <main className="row container"></main>
      <GroupContainer>
        {groups.map((group) => (
          <Group key={group.id} data={group}>
            <Tasks groupId={group.id} />
            <TaskOptions data={group} />
          </Group>
        ))}
        <AddGroup />
      </GroupContainer>
    </div>
  );
}

export default landing;
