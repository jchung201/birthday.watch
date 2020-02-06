import React, { Component } from "react";
import ReactDOM from "react-dom";

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

ReactDOM.render(<App />, document.getElementById("app"));
