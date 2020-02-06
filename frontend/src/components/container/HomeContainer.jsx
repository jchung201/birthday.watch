import React, { Component } from "react";
import Home from "../presentational/Home.jsx";
class HomeContainer extends Component {
  state = { loggedIn: false };

  handleSuccess = () => {};
  handleFail = () => {};
  render() {
    const { loggedIn } = this.state;
    return <Home loggedIn={loggedIn} />;
  }
}
export default HomeContainer;
