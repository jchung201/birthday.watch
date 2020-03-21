import React, { Component } from "react";
import Calendar from "../presentational/Calendar.jsx";
import { observer, inject } from "mobx-react";

class CalendarContainer extends Component {
  state = { creating: false };
  componentDidMount() {
    this.props.store.calendar.fetchBirthdays();
  }
  startCreating = () => {
    console.log("ok");
  };

  render() {
    const { logOut } = this.props;
    const { birthdays } = this.props.store.calendar;
    if (birthdays.length < 1) return <div>Loading...</div>;
    return (
      <Calendar
        logOut={logOut}
        birthdays={birthdays}
        creating={this.state.creating}
        startCreating={this.startCreating}
      />
    );
  }
}
export default inject("store")(observer(CalendarContainer));
