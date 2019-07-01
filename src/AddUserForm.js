import React, { Component } from "react";

class AddUserForm extends Component {
  state = {
    current: {
      first: "",
      last: "",
      username: "",
      games: 0,
    },
    errors: ""
    
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="first"
          placeholder="First Name"
          value={this.state.current.first}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="last"
          placeholder="Last Name"
          value={this.state.current.last}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="User Name"
          value={this.state.current.username}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
        <div className="error">{this.state.errors}</div>
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    if(! this.props.checkCallback(this.state.current.username)){
        const tmp = Object.assign({}, this.state.current);
        this.props.addCallback(tmp);
        this.setState({
            current: {
              first: "",
              last: "",
              username: "",
              games: 0,
            },
            errors: ""
            
          })
    }else {
        this.setState({errors: "Username already exists!"})
    }    
  };

  handleChange = event => {
    console.log(event.target);
    const tmp = Object.assign({}, this.state.current);
    tmp[event.target.name] = event.target.value;
    this.setState(prevState => ({ current: tmp }));
  };

  inputIsEmpty = () => {
    return this.state.current.first === "" || this.state.current.last === "" || this.state.current.username === "";
  };
}
export default AddUserForm;
