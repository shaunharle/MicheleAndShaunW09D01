import React, { Component } from "react";
import axios from "axios";

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.title]: event.currentTarget.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const baseURL = this.props.baseURL;
    const response = await axios.post(`${baseURL}/bookmarks`, {
      title: this.state.title
    });
    this.setState({
      title: ""
    });
    this.props.getBookmarks();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor=""></label>

        <input
          type="text"
          id="name"
          title="title"
          onChange={this.handleChange}
          value={this.state.title}
          placeholder="add a bookmars"
        />
        <input type="submit" value="Add a Bookmarks" />
      </form>
    );
  }
}

export default NewForm;
