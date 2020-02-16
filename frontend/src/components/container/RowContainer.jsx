import React, { Component } from "react";
import Row from "../presentational/Row.jsx";
import dateFormat from "dateformat";

class RowContainer extends Component {
  state = { editing: false };
  edit = () => {
    this.setState({ editing: true });
  };
  save = () => {
    this.setState({ editing: false });
  };

  render() {
    const { date } = this.props;
    const name = date.summary.substring(0, date.summary.length - 12);
    const birthDate = dateFormat(date.start.dateTime, "mmmm dS");
    const days =
      date.reminders.overrides && date.reminders.overrides[0].minutes;
    const time =
      date.reminders.overrides && date.reminders.overrides[0].minutes;
    const note = date.location;
    return (
      <Row
        name={name}
        birthDate={birthDate}
        days={days}
        time={time}
        note={note}
        edit={this.edit}
      />
    );
  }
}
export default RowContainer;
