import React from "react";
import { handleTabAction, handleClearAction } from "../store/action";
import { connect } from "react-redux";
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  handleTab = (payload) => {
    this.props.dispatch(handleTabAction(payload));
  };
  handleClear = (type) => {
    this.props.dispatch(handleClearAction(type));
  };
  render() {
    return (
      <footer className="container center">
        <div className="footer">
          <span className="left">
            {this.props.filterlist.filter((todo) => !todo.isDone).length} items
            left
          </span>
          <button
            className="all"
            onClick={() => {
              this.handleTab("ALL");
            }}
          >
            ALL
          </button>
          <button
            className="active"
            onClick={() => {
              this.handleTab("ACTIVE");
            }}
          >
            ACTIVE
          </button>
          <button
            className="completed"
            onClick={() => {
              this.handleTab("COMPLETE");
            }}
          >
            COMPLETE
          </button>
          <button
            className="clearcompleted"
            onClick={() => {
              this.handleClear("CLEAR_COMPLETED");
            }}
          >
            CLEAR COMPLETE
          </button>
        </div>
      </footer>
    );
  }
}

function mapState(state) {
  return { state };
}
export default connect(mapState)(Footer);
