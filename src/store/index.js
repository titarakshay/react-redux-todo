import { createStore, combineReducers } from "redux";
import { ADD_TODO, REMOVE_TODO } from "./Types";

let initialState = {
  allTodo: [],
  activeTab: "All",
};

let rootReducer = combineReducers({
  allTodo: allTodoReducer,
  activeTab: tabReducer,
});

function allTodoReducer(state = initialState.allTodo, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: Date.now(), text: action.payload, isDone: false },
      ];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
    case "CLEAR_COMPLETED": {
      return state.filter((todo) => !todo.isDone);
    }
    case "EDIT_TODO": {
      return state.map((todo) => {
        if (todo.id === action.id) {
          todo.text = action.text;
          return todo;
        }
        return todo;
      });
    }
    case "ARROW_SELECT": {
      let newList = state.filter((todo) => !todo.isDone);
      if (newList.length > 0) {
        return state.map((todo) => {
          todo.isDone = true;
          return todo;
        });
      } else {
        return state.map((todo) => {
          todo.isDone = false;
          return todo;
        });
      }
    }
    default:
      return state;
  }
}

function tabReducer(state = initialState.activeTab, action) {
  switch (action.type) {
    case "CHANGE_TAB":
      console.log(action, "we are in init");
      return action.payload;
    default:
      return state;
  }
}

export let store = createStore(rootReducer);
