import React from "react";
import { connect } from "react-redux";
import { handleToggleAction, handleRemoveAction } from "../store/action";

class Todolist extends React.Component {
  constructor(props) {
    super();
    this.state = {
      edit: false,
      todoID: "",
      text: "",
    };
  }
  handleRemove = (id) => {
    this.props.dispatch(handleRemoveAction(id));
  };
  handleToggle = (id) => {
    this.props.dispatch(handleToggleAction(id));
  };

  handleEdit = (id, text) => {
    this.setState({ todoID: id, edit: true, text });
  };
  handleEditSumbit = (e, id) => {
    if (e.keyCode === 13 && e.target.value.trim() !== "") {
      this.props.dispatch({
        type: "EDIT_TODO",
        text: e.target.value,
        id,
      });
      this.setState({ todoID: "", edit: false });
    }
  };
  render() {
    return (
      <ul className="list container">
        {this.props.filterlist.map((todo) => {
          return (
            <li className="li_styles">
              {!(this.state.edit && todo.id === this.state.todoID) ? (
                <>
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => {
                      this.handleToggle(todo.id);
                    }}
                  />
                  <p
                    className="para"
                    onDoubleClick={() => this.handleEdit(todo.id, todo.text)}
                    className="text"
                  >
                    {todo.text}
                  </p>
                  <button
                    onClick={() => {
                      this.handleRemove(todo.id);
                    }}
                  >
                    X
                  </button>
                </>
              ) : (
                <input
                  type="text"
                  value={this.state.text}
                  onKeyUp={(e) => this.handleEditSumbit(e, todo.id)}
                  onChange={(e) => {
                    this.setState({ text: e.target.value });
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>
    );
  }
}
function mapState(state) {
  return { state };
}

export default connect(mapState)(Todolist);
