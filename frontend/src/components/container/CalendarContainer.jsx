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
    const {
      calendar: { birthdays, startCreating, creating },
      auth: { logOut }
    } = this.props.store;
    if (birthdays.length < 1) return <div>Loading...</div>;
    return (
      <Calendar
        logOut={logOut}
        birthdays={birthdays}
        creating={creating}
        startCreating={startCreating}
      />
    );
  }
}
export default inject("store")(observer(CalendarContainer));
