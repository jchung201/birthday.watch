import React, { Component } from "react";
import moment from "moment";
import axios from "axios";
import {
  ContentRow,
  ContentColumn,
  ContentText,
  ContentInput,
} from "./styled/rowStyled";
import { API_URL } from "../utilities/URL";

class Row extends Component<any> {
  state = {
    editing: false,
    name: "",
    birthDate: "",
    days: 0,
    time: "",
    note: "",
    color: "white",
  };
  componentDidMount() {
    const { birthday } = this.props;
    if (birthday === null) return;
    this.setState({
      name: birthday.summary.substring(0, birthday.summary.length - 12),
      birthDate: moment(birthday.start.dateTime).format("MMM Do"),
      days:
        birthday.reminders.overrides &&
        Math.ceil(birthday.reminders.overrides[0].minutes / 60 / 24),
      time:
        birthday.reminders.overrides &&
        moment(birthday.start.dateTime).format("h:mm a"),
      note: birthday.location,
    });
  }
  edit = () => {
    this.setState({ editing: true, color: "orange" });
  };
  save = () => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    const scope = localStorage.getItem("scope");
    const token_type = localStorage.getItem("token_type");
    const expiry_date = localStorage.getItem("expiry_date");
    const { date } = this.props;
    const { birthDate, name, note, days, time } = this.state;
    //TODO: Turn dates into dates and time into usable
    axios
      .patch(
        `${API_URL}/rest/birthdays/${date.id}`,
        {
          event: {
            date: birthDate,
            name,
            description: note,
            days: Number(days),
            time,
          },
        },
        {
          headers: {
            Authorization: JSON.stringify({
              access_token,
              refresh_token,
              scope,
              token_type,
              expiry_date,
            }),
          },
        }
      )
      .then(({ data }) => {
        this.setState({
          editing: false,
          color: "white",
          name: data.summary.substring(0, data.summary.length - 12),
          birthDate: moment(data.start.dateTime).format("MMM Do"),
          days:
            data.reminders.overrides &&
            Math.ceil(data.reminders.overrides[0].minutes / 60 / 24),
          time:
            data.reminders.overrides &&
            moment(data.start.dateTime).format("h:mm a"),
          note: data.location,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  };
  delete = () => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    const scope = localStorage.getItem("scope");
    const token_type = localStorage.getItem("token_type");
    const expiry_date = localStorage.getItem("expiry_date");
    const { date, fetchDates } = this.props;
    axios
      .delete(`${API_URL}/rest/birthdays/${date.id}`, {
        headers: {
          Authorization: JSON.stringify({
            access_token,
            refresh_token,
            scope,
            token_type,
            expiry_date,
          }),
        },
      })
      .then(({ data }) => {
        fetchDates();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { name, birthDate, days, time, note, editing, color } = this.state;

    return (
      <ContentRow>
        <ContentColumn color={color}>
          {editing && (
            <ContentInput value={name} name="name" onChange={this.onChange} />
          )}
          {!editing && <ContentText>{name}</ContentText>}
        </ContentColumn>
        <ContentColumn color={color}>
          {editing && (
            <ContentInput
              value={birthDate}
              name="birthDate"
              onChange={this.onChange}
            />
          )}
          {!editing && <ContentText>{birthDate}</ContentText>}
        </ContentColumn>
        <ContentColumn color={color}>
          {editing && (
            <ContentInput
              value={days}
              type="number"
              name="days"
              onChange={this.onChange}
            />
          )}
          {!editing && <ContentText>{days}</ContentText>}
        </ContentColumn>
        <ContentColumn color={color}>
          {editing && (
            <ContentInput value={time} name="time" onChange={this.onChange} />
          )}
          {!editing && <ContentText>{time}</ContentText>}
        </ContentColumn>
        <ContentColumn color={color}>
          {editing && (
            <ContentInput value={note} name="note" onChange={this.onChange} />
          )}
          {!editing && <ContentText>{note}</ContentText>}
        </ContentColumn>
        <ContentColumn color={color}>
          {editing && (
            <ContentText>
              <div
                style={{
                  textDecoration: "underline",
                  color: "blue",
                  cursor: "pointer",
                }}
                onClick={this.save}
              >
                Save
              </div>
              <div
                style={{
                  textDecoration: "underline",
                  color: "red",
                  cursor: "pointer",
                }}
                onClick={this.delete}
              >
                Delete
              </div>
            </ContentText>
          )}
          {!editing && (
            <ContentText>
              <div
                style={{
                  textDecoration: "underline",
                  color: "blue",
                  cursor: "pointer",
                }}
                onClick={this.edit}
              >
                Modify
              </div>
            </ContentText>
          )}
        </ContentColumn>
      </ContentRow>
    );
  }
}
export default Row;
