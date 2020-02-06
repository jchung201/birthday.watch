import React, { Component } from "react";
import Calendar from "../presentational/Calendar.jsx";
class CalendarContainer extends Component {
  render() {
    const { logOut } = this.props;
    return <Calendar logOut={logOut} />;
  }
}
export default CalendarContainer;
