import React, { Component } from "react";
import Row from "../presentational/Row.jsx";
import RowEdit from "../presentational/RowEdit.jsx";
import moment from "moment";

class RowContainer extends Component {
  state = {
    editing: false,
    name: "",
    birthDate: "",
    days: 0,
    time: "",
    note: ""
  };
  componentDidMount() {
    const { date } = this.props;
    this.setState({
      name: date.summary.substring(0, date.summary.length - 12),
      birthDate: moment(date.start.dateTime).format("MMM Do"),
      days:
        date.reminders.overrides &&
        Math.ceil(date.reminders.overrides[0].minutes / 60 / 24),
      time:
        date.reminders.overrides &&
        moment(date.start.dateTime).format("h:mm a"),
      note: date.location
    });
  }
  edit = () => {
    this.setState({ editing: true });
  };
  save = () => {
    this.setState({ editing: false });
  };

  render() {
    const { name, birthDate, days, time, note, editing } = this.state;
    if (editing) {
      return (
        <RowEdit
          name={name}
          birthDate={birthDate}
          days={days}
          time={time}
          note={note}
          save={this.save}
        />
      );
    }
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
