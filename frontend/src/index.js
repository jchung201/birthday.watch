import React, { Component } from "react";
import ReactDOM from "react-dom";

import HomeContainer from "./components/container/HomeContainer.jsx";
import CalendarContainer from "./components/container/CalendarContainer.jsx";

class App extends Component {
  state = { loggedIn: false };
  render() {
    const { loggedIn } = this.state;
    if (loggedIn) {
      return <CalendarContainer />;
    }
    return <HomeContainer />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
