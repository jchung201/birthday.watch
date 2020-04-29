import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import { StoreInterface } from "../interfaces/store";

import Home from "./Home";
import Calendar from "./Calendar";

interface OwnProps {
  store?: StoreInterface;
}

class App extends Component<OwnProps> {
  componentDidMount() {
    const { authenticate } = this.props.store.auth;
    authenticate();
  }

  render() {
    const { loggedIn } = this.props.store.auth;
    if (loggedIn) return <Calendar />;
    return <Home />;
  }
}

export default inject("store")(observer(App));
