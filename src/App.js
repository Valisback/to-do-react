import React, { Component } from "react";
import ToDoItem from "./components/ToDoItem";
import "./index.css";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    nbItem: 6,
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ToDoItem />;
      </React.Fragment>
    );
  }
}

export default App;
