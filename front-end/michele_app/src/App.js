import React, { Component } from "react";

import "./App.css";
import axios from "axios";
import NewForm from "./components/NewForm.js";

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
      bookmarks: []
    };
    this.getBookmarks = this.getBookmarks.bind(this);
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

  render() {
    return (
      <div className="container">
        <h1>bookmars! Celebrate!</h1>
        <NewForm getBookmarks={this.getBookmarks} baseURL={baseURL} />
        <table>
          <tbody>
            {this.state.bookmarks.map(bookmarks => {
              return (
                <tr>
                  <td key={bookmarks._id}> {bookmarks.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
