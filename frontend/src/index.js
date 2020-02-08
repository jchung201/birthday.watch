import React, { Component } from "react";
import ReactDOM from "react-dom";
import { API_URL } from "./utilities/API";

import HomeContainer from "./components/container/HomeContainer.jsx";
import CalendarContainer from "./components/container/CalendarContainer.jsx";

class App extends Component {
  state = { loggedIn: true };
  logIn = () => {
    this.setState({ loggedIn: true });
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
