import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import NewForm from "./components/NewForm.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmars: []
    };
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
