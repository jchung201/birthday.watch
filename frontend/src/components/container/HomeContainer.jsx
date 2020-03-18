import React, { Component } from "react";
import Home from "../presentational/Home.jsx";
import { observer, inject } from "mobx-react";

class HomeContainer extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { logIn } = this.props;
    return <Home logIn={logIn} />;
  }
}
export default inject("store")(observer(HomeContainer));
