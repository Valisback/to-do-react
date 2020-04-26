import React, { Component } from "react";

class App extends Component {
  state = {
    nbItem: 6,
  };
  render() {
    return this.itemRender();
  }

  itemRender = () => {
    return (
      <div>
        <input type="checkbox" value="elem1" />
        <span> 1st element </span>
        <input type="checkbox" value="elem1" />
        <span> 2nd element </span>
        <input type="checkbox" value="elem1" />
        <span> 3rd element </span>
        <input type="checkbox" value="elem1" />
        <span> 4th element </span>
        <input type="checkbox" value="elem1" />
        <span> 5th element </span>
      </div>
    );
  };
}

export default App;
