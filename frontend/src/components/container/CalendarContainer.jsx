import React, { Component } from "react";
import Calendar from "../presentational/Calendar.jsx";
import axios from "axios";
import { API_URL } from "../../utilities/URL";

class CalendarContainer extends Component {
  componentDidMount() {}
  render() {
    const { logOut } = this.props;
    return <Calendar logOut={logOut} />;
  }
}
export default CalendarContainer;
