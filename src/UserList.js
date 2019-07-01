import React, { Component } from "react";

class UserList extends Component {
  state = {
    displayScores: true,
  };

  handleScoreDisplayToggle(ev) {
    this.setState({displayScores : !this.state.displayScores})
    console.log("click");
    // this.setState(tmp);
  }
  
  render() {
    const users = this.props.items;
    return (
      <div>
        <h2>User List</h2>
        <ol>
          {users.map((item, index) =>
            <li key={index}>
              {item.username} played{" "}
              {this.state.displayScores ? item.games : "*"} games.
            </li>
          )}
        </ol>
        <div>
          <label>Show the Number of Games Played</label>
          <input
            checked={this.state.displayScores}
            onClick={this.handleScoreDisplayToggle.bind(this)}
            type="checkbox"
          />
        </div>
      </div>
    );
  }

 
}

export default UserList;
