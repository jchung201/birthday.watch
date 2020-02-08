import React, { Component } from "react";
import ReactDOM from "react-dom";
import { API_URL } from "./utilities/URL";
import axios from "axios";

import HomeContainer from "./components/container/HomeContainer.jsx";
import CalendarContainer from "./components/container/CalendarContainer.jsx";

class App extends Component {
  state = { loggedIn: true };
  logIn = () => {
    const url = axios
      .get(`${API_URL}/rest/auth/url`)
      .then(({ data }) => {
        console.log(data);
        this.setState({ loggedIn: true });
      })
      .catch(error => {
        console.error(error);
      });
  };
  logOut = () => {
    this.setState({ loggedIn: false });
  };
  render() {
    const { loggedIn } = this.state;
    if (loggedIn) {
      return <CalendarContainer logOut={this.logOut} />;
    }
    return <HomeContainer logIn={this.logIn} />;
  }
}
console.log(API_URL);

ReactDOM.render(<App />, document.getElementById("app"));
