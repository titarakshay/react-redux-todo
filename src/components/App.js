import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Inputbox from "./inputBox";
import Todolist from "./Todolist";
import Footer from "./footer";
let filterlist = [];

class App extends React.Component {
  constructor() {
    super();
  }

  filterTodo(tab, todos) {
    switch (tab) {
      case "ACTIVE":
        return todos.filter((todo) => !todo.isDone);
      case "COMPLETE":
        return todos.filter((todo) => todo.isDone);
      default:
        return todos;
    }
  }
  render() {
    filterlist = this.filterTodo(
      this.props.state.activeTab,
      this.props.state.allTodo
    );

    return (
      <>
        <main className="container center">
          <Header />
          <div className="innerbox">
            <Inputbox />
            {this.props.state ? <Todolist filterlist={filterlist} /> : ""}
          </div>
        </main>
        <Footer filterlist={filterlist} />
      </>
    );
  }
}

function mapState(state) {
  return { state };
}
export default connect(mapState)(App);
