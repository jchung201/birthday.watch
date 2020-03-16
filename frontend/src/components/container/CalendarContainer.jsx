import React, { Component } from "react";
import Calendar from "../presentational/Calendar.jsx";
import axios from "axios";
import { API_URL } from "../../utilities/URL";

class CalendarContainer extends Component {
  state = { dates: [], loading: true };
  componentDidMount() {
    this.fetchDates();
  }
  fetchDates = () => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    const scope = localStorage.getItem("scope");
    const token_type = localStorage.getItem("token_type");
    const expiry_date = localStorage.getItem("expiry_date");

    if (access_token && refresh_token && scope && token_type && expiry_date) {
      axios
        .get(`${API_URL}/rest/birthdays/`, {
          headers: {
            Authorization: JSON.stringify({
              access_token,
              refresh_token,
              scope,
              token_type,
              expiry_date
            })
          }
        })
        .then(({ data }) => {
          this.setState({ dates: data, loading: false });
        })
        .catch(error => {
          console.error(error);
          this.props.logOut();
        });
    } else {
      this.props.logOut();
    }
  };
  newRow = () => {};
  render() {
    const { logOut } = this.props;
    if (this.state.loading) return <div>Loading...</div>;
    return <Calendar logOut={logOut} dates={this.state.dates} />;
  }
}
export default CalendarContainer;
