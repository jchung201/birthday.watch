import React, { Component } from "react";
import moment from "moment";
import Row from "../presentational/Row.jsx";
import RowEdit from "../presentational/RowEdit.jsx";
import { API_URL } from "../../utilities/URL";

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
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    const scope = localStorage.getItem("scope");
    const token_type = localStorage.getItem("token_type");
    const expiry_date = localStorage.getItem("expiry_date");
    const { date } = this.props;
    const { birthDate, name, note, days, time } = this.state;
    axios
      .patch(
        `${API_URL}/rest/birthdays/${date.id}`,
        {
          date: birthDate,
          name,
          description: note,
          days,
          time
        },
        {
          headers: {
            Authorization: JSON.stringify({
              access_token,
              refresh_token,
              scope,
              token_type,
              expiry_date
            })
          }
        }
      )
      .then(({ data }) => {
        this.setState({
          editing: false,
          name: data.summary.substring(0, data.summary.length - 12),
          birthDate: moment(data.start.dateTime).format("MMM Do"),
          days:
            data.reminders.overrides &&
            Math.ceil(data.reminders.overrides[0].minutes / 60 / 24),
          time:
            data.reminders.overrides &&
            moment(data.start.dateTime).format("h:mm a"),
          note: data.location
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  onChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
    console.log(this.state);
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
          onChange={this.onChange}
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
