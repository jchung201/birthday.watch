import React, { Component } from "react";
import Calendar from "../presentational/Calendar";
import { observer, inject } from "mobx-react";

import { StoreInterface } from "../../interfaces/store";

interface OwnProps {
  store?: StoreInterface;
}

class CalendarContainer extends Component<OwnProps> {
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
