import React, { Component } from "react";
import axios from "axios";

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name"></label>

        <input
          type="text"
          id="name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="add a bookmars"
        />
        <input type="submit" value="Add a Bookmarks" />
      </form>
    );
  }
}

export default NewForm;
