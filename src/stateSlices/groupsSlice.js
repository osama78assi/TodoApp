import { createSlice } from "@reduxjs/toolkit";
import { getRandomId } from "../helper";

function setGroups(groups) {
  // In Real Life We Send A Request To The Server With Method Like
  // Delete, Post...etc Depending On The Type Of Action
  // async function get() {
  //   const req = await fetch("server/groups?name=dddd&pass=ss2eds", {
  //     method: "",
  //     headers: "",
  //     body: groups,
  //   });
  //   const data = await req();
  //   return data;
  // }
  localStorage.setItem("groups", JSON.stringify(groups));
}

function getGroups() {
  // In Real Life Data Come From The Server
  // async function get() {
  //   const req = await fetch("server/groups?name=dddd&pass=ss2eds");
  //   const data = await req();
  //   return data;
  // }
  const groups = localStorage.getItem("groups");
  if (groups) {
    return JSON.parse(groups);
  } else {
    localStorage.setItem("groups", JSON.stringify([]));
    return [];
  }
}

// let groups = groups: [
//   {
//     id: getRandomId(),
//     name: "vacations",
//     createdAt: new Intl.DateTimeFormat("en-UK").format(new Date()),
//     color: "red-item-1",
//   },
// ],

const initialState = getGroups();

const slice = createSlice({
  name: "groups",
  initialState: getGroups(),
  reducers: {
    addGroup: {
      prepare(id, name, color) {
        return {
          payload: {
            id,
            name,
            color,
            createdAt: new Intl.DateTimeFormat("en-UK").format(new Date()),
          },
        };
      },
      reducer(state, action) {
        state.push({
          id: action.payload.id,
          name: action.payload.name,
          color: action.payload.color,
          createdAt: action.payload.createdAt,
        });
      },
    },

    alterGroup: {
      prepare(id, newName, newColor) {
        return {
          payload: {
            id,
            newName,
            newColor,
          },
        };
      },
      reducer(state, action) {
        return state.map((groupe) => {
          if (groupe.id == action.payload.id) {
            return {
              ...groupe,
              name: action.payload.newName || groupe.name,
              color: action.payload.newColor || groupe.color,
              createdAt: new Intl.DateTimeFormat("en-UK").format(new Date()),
            };
          }
          return groupe;
        });
      },
    },

    deleteGroup(state, action) {
      return state.filter((group) => group.id != action.payload);
    },
  },
});

const groupsSlice = slice.reducer;

function addGroup(id, name, color) {
  return function (dispatch, getState) {
    dispatch(slice.actions.addGroup(id, name, color));
    setGroups(getState().groups);
  };
}

function alterGroup(id, newName = "", newColor = "") {
  return function (dispatch, getState) {
    dispatch(slice.actions.alterGroup(id, newName, newColor));
    setGroups(getState().groups);
  };
}

function deleteGroup(id) {
  return function (dispatch, getState) {
    dispatch(slice.actions.deleteGroup(id));
    setGroups(getState().groups);
  };
}

export default groupsSlice;

export { addGroup, alterGroup, deleteGroup };
