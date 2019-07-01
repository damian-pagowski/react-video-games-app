import React, { Component } from "react";
import UserList from "./UserList";
import AddUserForm from "./AddUserForm";

class UserPanel extends Component {
  state = {
    items: [],
  };

  render() {
    return (
      <div>
        <AddUserForm 
        addCallback={this.addItem.bind(this)}
        checkCallback={this.checkUserExist.bind(this)} />
        <UserList items={this.state.items} />
      </div>
    );
  }

  checkUserExist(username){
      const filtered = this.state.items.filter(item => item.username === username);
      return filtered.length > 0;
  }

  addItem(item) {
    this.setState(oldState => ({
      items: [...oldState.items, item],
    }));
  }
}

export default UserPanel;
