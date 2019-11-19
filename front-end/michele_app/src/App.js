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
      bookmars: []
    };
    this.getHolidays = this.getHolidays.bind(this);
  }
  componentDidMount() {
    this.getHolidays();
  }
  async getHolidays() {
    const response = await axios(`${baseURL}/bookmarks`);
    const data = response.data;
  }

  render() {
    return (
      <div className="container">
        <h1>Holidays! Celebrate!</h1>
        <NewForm />
      </div>
    );
  }
}

export default App;
