import React, { Component } from "react";

import axios from "axios";
import { API_URL, WEB_URL } from "../../utilities/URL";

import HomeContainer from "./HomeContainer.jsx";
import CalendarContainer from "./CalendarContainer.jsx";
import { observer, inject } from "mobx-react";

class App extends Component {
  componentDidMount() {
    const { authenticate } = this.props.store.auth;
    authenticate();
  }
  logIn = async () => {
    try {
      const authUrl = await axios.get(`${API_URL}/rest/auth/url`);
      window.location = authUrl.data;
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    const { loggedIn } = this.props.store.auth;
    if (loggedIn) return <CalendarContainer />;
    return <HomeContainer logIn={this.logIn} />;
  }
}

export default inject("store")(observer(App));
