import React, { Component } from "react";
import Home from "../presentational/Home.jsx";
class HomeContainer extends Component {
  render() {
    const { logIn } = this.props;
    return <Home logIn={logIn} />;
  }
}
export default HomeContainer;
