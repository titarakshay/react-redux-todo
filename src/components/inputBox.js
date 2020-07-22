import React from "react";
import arrow from "./img.jpg";
import { connect } from "react-redux";
import { handleClearAction, handleInputAction } from "../store/action";

class Inputbox extends React.Component {
  constructor(props) {
    super();
  }
  handleInput = (e) => {
    if (e.keyCode === 13 && e.target.value.trim() !== "") {
      this.props.dispatch(handleInputAction(e));
      e.target.value = "";
    }
  };
  handleClear = (type) => {
    this.props.dispatch(handleClearAction(type));
  };
  render() {
    return (
      <>
        <div className="input-div">
          <img
            onClick={() => {
              this.handleClear("ARROW_SELECT");
            }}
            className="img"
            src={arrow}
            alt=""
          />
          <input
            onKeyUp={this.handleInput}
            className="add"
            type="text"
            placeholder="What need to be done ?"
          />
        </div>
      </>
    );
  }
}
function mapState(state) {
  return { state };
}

export default connect(mapState)(Inputbox);
