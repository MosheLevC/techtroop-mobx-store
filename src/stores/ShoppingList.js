/* eslint-disable */
import { observable, action, makeObservable } from "mobx";
import { Item } from "./Item";

export class ShoppingList {
  constructor() {
    this.list = [];
    this.length = 0;

    makeObservable(this, {
      list: observable,
      length: observable,
      checkItem: action,
      addItem: action,
    });
  }
  checkItem = (name) => {
    let item = this.list.find((i) => i.name === name);
    item.completed = !item.completed;
  };
  addItem = (name) => {
    this.list.push(new Item(name));
  };
  editItem = () => {
    // your code here
  };
  deleteItem = () => {
    // your code here
  };
}
