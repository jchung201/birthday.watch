import React, { Component } from "react";
import ReactDOM from "react-dom";
import { API_URL } from "./utilities/URL";
import axios from "axios";

import HomeContainer from "./components/container/HomeContainer.jsx";
import CalendarContainer from "./components/container/CalendarContainer.jsx";

class App extends Component {
  state = { loggedIn: false };
  componentDidMount() {
    let access_token = localStorage.getItem("access_token");
    let refresh_token = localStorage.getItem("refresh_token");
    let scope = localStorage.getItem("scope");
    let token_type = localStorage.getItem("token_type");
    let expiry_date = localStorage.getItem("expiry_date");
    if (
      access_token !== "undefined" &&
      refresh_token !== "undefined" &&
      scope !== "undefined" &&
      token_type !== "undefined" &&
      expiry_date !== "undefined"
    ) {
      this.setState({ loggedIn: true });
    } else {
      let search = window.location.search;
      let params = new URLSearchParams(search);
      let code = params.get("code");
      axios
        .post(`${API_URL}/rest/auth/token`, { code })
        .then(
          ({
            data: {
              access_token,
              refresh_token,
              scope,
              token_type,
              expiry_date
            }
          }) => {
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("refresh_token", refresh_token);
            localStorage.setItem("scope", scope);
            localStorage.setItem("token_type", token_type);
            localStorage.setItem("expiry_date", expiry_date);
            this.setState({ loggedIn: true });
          }
        )
        .catch(error => {
          console.error(error);
        });
    }
  }
  logIn = () => {
    axios
      .get(`${API_URL}/rest/auth/url`)
      .then(({ data }) => {
        window.location = data;
      })
      .catch(error => {
        console.error(error);
      });
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
