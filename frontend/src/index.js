import React, { Component } from "react";
import ReactDOM from "react-dom";

import HomeContainer from "./components/container/HomeContainer.jsx";
import CalendarContainer from "./components/container/CalendarContainer.jsx";

class App extends Component {
  state = { loggedIn: false };
  logIn = () => {
    this.setState({ loggedIn: true });
  };
  render() {
    const { loggedIn } = this.state;
    if (loggedIn) {
      return <CalendarContainer />;
    }
    return <HomeContainer logIn={this.logIn} />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
