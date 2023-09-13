import { legacy_createStore } from "redux";
import { createAction } from "@reduxjs/toolkit";

export const addToDo = createAction("ADD");
export const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== parseInt(action.payload));
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

export default store;
