import { createSlice } from "@reduxjs/toolkit";
import { getRandomId } from "../helper";

function getTasks() {
  const tasks = localStorage.getItem("tasks");
  if (tasks) {
    return JSON.parse(tasks);
  } else {
    localStorage.setItem("tasks", JSON.stringify({}));
    return {};
  }
}

function setTasks(groupId, targetTasks) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks = {
    ...tasks,
    [groupId]: targetTasks,
  };
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

/*
{
  groupId: [
    {task1}, {task2},{ task3}
  ],
}
*/

const initialState = getTasks();
const slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTaskArr(state, action) {
      state[action.payload] = [];
    },

    addTask: {
      prepare(groupId, title, color) {
        return {
          payload: {
            groupId: groupId,
            taskId: getRandomId(),
            title: title,
            color: color,
            createdAt: new Intl.DateTimeFormat("en-UK").format(new Date()),
            checked: false,
          },
        };
      },
      reducer(state, action) {
        state[action.payload.groupId] = [
          ...state[action.payload.groupId],
          {
            id: action.payload.taskId,
            title: action.payload.title,
            color: action.payload.color,
            createdAt: action.payload.createdAt,
            checked: action.payload.checked,
          },
        ];
      },
    },

    checkTask: {
      prepare(groupId, taskId, checked) {
        return {
          payload: {
            groupId,
            taskId,
            checked,
          },
        };
      },
      reducer(state, action) {
        state[action.payload.groupId] = state[action.payload.groupId].map(
          (task) => {
            if (task.id === action.payload.taskId) {
              return {
                ...task,
                checked: action.payload.checked,
              };
            }
            return task;
          }
        );
      },
    },

    alterTask: {
      prepare(groupId, taskId, newColor, newTitle) {
        return {
          payload: {
            groupId,
            taskId,
            newColor,
            newTitle,
            createdAt: new Intl.DateTimeFormat("en-UK").format(new Date()),
          },
        };
      },
      reducer(state, action) {
        state[action.payload.groupId] = state[action.payload.groupId].map(
          (task) => {
            if (task.id === action.payload.taskId) {
              return {
                ...task,
                color: action.payload.newColor || task.color,
                title: action.payload.newTitle || task.title,
                createdAt: action.payload.createdAt,
              };
            }
            return task;
          }
        );
      },
    },

    deleteTask: {
      prepare(groupId, taskId) {
        return {
          payload: {
            groupId,
            taskId,
          },
        };
      },
      reducer(state, action) {
        state[action.payload.groupId] = state[action.payload.groupId].filter(
          (task) => task.id != action.payload.taskId
        );
      },
    },
  },
});

// Custom Middleware Because Local Storage Is Side Effect

function addTaskArr(groupId) {
  return function (dispatch, getState) {
    dispatch(slice.actions.addTaskArr(groupId));
    setTasks(groupId, getState().tasks[groupId]);
  };
}

function addTask(groupId, title, color) {
  return function (dispatch, getState) {
    dispatch(slice.actions.addTask(groupId, title, color));
    setTasks(groupId, getState().tasks[groupId]);
  };
}

function checkTask(groupId, taskId, checked) {
  return function (dispatch, getState) {
    dispatch(slice.actions.checkTask(groupId, taskId, checked));
    setTasks(groupId, getState().tasks[groupId]);
  };
}

function alterTask(groupId, taskId, newColor = "", newTitle = "") {
  return function (dispatch, getState) {
    dispatch(slice.actions.alterTask(groupId, taskId, newColor, newTitle));
    setTasks(groupId, getState().tasks[groupId]);
  };
}

function deleteTask(groupId, taskId) {
  return function (dispatch, getState) {
    dispatch(slice.actions.deleteTask(groupId, taskId));
    setTasks(groupId, getState().tasks[groupId]);
  };
}

export default slice.reducer;

export { alterTask, addTask, checkTask, addTaskArr, deleteTask };
