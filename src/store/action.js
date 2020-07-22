import { REMOVE_TODO, TOGGLE_TODO, CHANGE_TAB, ADD_TODO } from "./Types";

export const handleInputAction = (e) => {
  return {
    type: ADD_TODO,
    payload: e.target.value,
  };
};

export const handleRemoveAction = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};
export const handleToggleAction = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};
export const handleTabAction = (payload) => {
  return {
    type: CHANGE_TAB,
    payload,
  };
};
export const handleClearAction = (type) => {
  return {
    type,
  };
};
