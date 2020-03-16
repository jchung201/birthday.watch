import React, { Component } from "react";
import moment from "moment";
import axios from "axios";
import Row from "../presentational/Row.jsx";
import RowEdit from "../presentational/RowEdit.jsx";
import { API_URL } from "../../utilities/URL";

class RowContainer extends Component {
  state = {
    name: "",
    birthDate: "",
    days: 0,
    time: "",
    note: ""
  };
  componentDidMount() {}

  createRow = ({ date, name, description, days }) => {
    axios
      .post(
        `${API_URL}/rest/birthdays/`,
        { date, name, description, days },
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
      .then(() => {
        this.props.fetchDates();
        this.props.finishCreating();
      })
      .catch(error => {
        console.error(error);
        this.props.logOut();
      });
  };
  onChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  render() {
    const { name, birthDate, days, time, note } = this.state;
    if (this.props.creating) {
      return (
        <RowEdit
          name={name}
          birthDate={birthDate}
          days={days}
          time={time}
          note={note}
          save={this.createRow}
          onChange={this.onChange}
        />
      );
    }
  }
}
export default RowContainer;
