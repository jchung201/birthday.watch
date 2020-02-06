import React, { Component } from "react";
import ReactDOM from "react-dom";

import HomeContainer from "./components/container/HomeContainer.jsx";
class App extends Component {
  state = { loggedIn: false };
  render() {
    const { loggedIn } = state;
    if (loggedIn) {
      return <HomeContainer />;
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
