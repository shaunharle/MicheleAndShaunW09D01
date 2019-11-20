import React, { Component } from "react";
import axios from "axios";

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const baseURL = this.props.baseURL;
    const response = await axios.post(`${baseURL}/bookmarks`, {
      title: this.state.title,
      url: this.state.url
    });
    this.setState({
      title: "",
      url: ""
    });
    this.props.handleAddbook(response.data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title"></label>

        <input
          type="text"
          id="title"
          name="title"
          onChange={this.handleChange}
          value={this.state.title}
          placeholder="Title"
        />
        <label htmlFor="url"></label>
        <input
          type="text"
          id="url"
          name="url"
          onChange={this.handleChange}
          value={this.state.url}
          placeholder="URL"
        />
        <input type="submit" value="Add a Bookmarks" />
      </form>
    );
  }
}

export default NewForm;
