import React, { Component } from "react";
import Row from "../presentational/Row.jsx";
import moment from "moment";

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
    const birthDate = moment(date.start.dateTime).format("MMM Do");
    const days =
      date.reminders.overrides &&
      Math.ceil(date.reminders.overrides[0].minutes / 60 / 24);
    const time =
      date.reminders.overrides && moment(date.start.dateTime).format("h:mm a");
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
