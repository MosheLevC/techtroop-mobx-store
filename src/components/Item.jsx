import React, { Component } from "react";
import { observer } from "mobx-react";

class Item extends Component {
  checkItem = () => {
    const { item } = this.props;
    item.completed = !item.completed;
  };
  editItem = () => {
    //your code here
  };
  deleteItem = () => {
    //your code here
  };
  render() {
    let item = this.props.item;
    return (
      <div className={item.completed ? "crossed" : ""}>
        <input type="checkbox" checked={item.completed} onChange={this.checkItem} />
        {item.name}
      </div>
    );
  }
}

export default observer(Item);
