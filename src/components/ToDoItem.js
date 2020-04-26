import React, { Component } from "react";

class ToDoItem extends Component {
  state = {};
  render() {
    return this.itemRender();
  }

  itemRender = () => {
    return (
      <div className="toDoWrapper">
        <div className="itemWrapper">
          <input type="checkbox" value="elem1" />
          <span> 1st element </span>
        </div>
        <div className="itemWrapper">
          <input type="checkbox" value="elem1" />
          <span> 1st element </span>
        </div>
        <div className="itemWrapper">
          <input type="checkbox" value="elem1" />
          <span> 1st element </span>
        </div>
        <div className="itemWrapper">
          <input type="checkbox" value="elem1" />
          <span> 1st element </span>
        </div>
      </div>
    );
  };
}

export default ToDoItem;
