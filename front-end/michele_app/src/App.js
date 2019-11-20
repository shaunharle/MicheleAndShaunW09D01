import React, { Component } from "react";

import "./App.css";
import axios from "axios";
import NewForm from "./components/NewForm.js";
import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/index.css";
import Show from "./components/Show.js";

let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "your heroku bakend url here";
}

// baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
console.log("current base URL:", baseURL);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      bookmark: {}
    };
    this.getBookmarks = this.getBookmarks.bind(this);
    this.deleteBookmarks = this.deleteBookmarks.bind(this);
    this.getBookmark = this.getBookmark.bind(this);
    this.handleAddbook = this.handleAddbook.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }
  componentDidMount() {
    this.getBookmarks();
  }
  async getBookmarks() {
    const response = await axios(`${baseURL}/bookmarks`);
    const data = response.data;
    this.setState({
      bookmarks: data
    });
  }
  getBookmark(bookmark) {
    this.setState({ bookmark: bookmark });
  }
  handleAddbook(bookmark) {
    const copybookmark = [...this.state.bookmarks];
    copybookmark.unshift(bookmark);
    this.setState({
      bookmarks: copybookmark
    });
  }

  async deleteBookmarks(id) {
    await axios.delete(`${baseURL}/bookmarks/${id}`);
    const filteredBookmarks = this.state.bookmarks.filter(bookmarks => {
      return bookmarks._id !== id;
    });

    this.setState({
      bookmarks: filteredBookmarks
    });
  }

  sayHello() {
    alert("Hello!");
  }

  render() {
    return (
      <div className="container">
        <table>
          <header>
            <h1>Bookmars! Great!</h1>
          </header>

          <div className="bo">
            <h1 style={{ color: "yellow" }}>Add a new Bookmars!!</h1>
            <NewForm handleAddbook={this.handleAddbook} baseURL={baseURL} />
            <tbody>
              {this.state.bookmarks.map(bookmarks => {
                return (
                  <tr>
                    <td
                      key={bookmarks._id}
                      onMouseOver={() => this.getBookmark(bookmarks)}
                    >
                      <h1> CIAO {bookmarks.title}</h1>
                      <ul>
                        <li>{bookmarks.title}</li>
                      </ul>

                      <a href={bookmarks.url} target="_blank">
                        {bookmarks.url}
                      </a>
                    </td>
                    <td onClick={() => this.deleteBookmarks(bookmarks._id)}>
                      X
                    </td>
                  </tr>
                );
              })}
            </tbody>
            {this.state.bookmark && <Show bookmark={this.state.bookmark} />}
          </div>
        </table>
      </div>
    );
  }
}

export default App;
