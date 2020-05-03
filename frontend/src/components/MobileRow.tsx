import React, { Component } from "react";
import moment from "moment";
import axios from "axios";
import { toast } from "react-toastify";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import {
  ContentRow,
  ContentColumn,
  ContentText,
  ContentLabel,
  ButtonContent,
  ButtonColumn,
  CancelButton,
  DeleteButton,
  SaveButton,
  ContentInput,
} from "./styled/mobileRowStyled";
import validateEvent from "./utils/validateEvent";
import { API_URL } from "../utilities/URL";

class Row extends Component<any> {
  state = {
    editing: false,
    name: "",
    birthDate: "",
    days: null,
    note: "",
    color: "white",
    creating: false,
  };
  componentDidMount() {
    const { birthday } = this.props;
    if (birthday === null)
      return this.setState({ creating: true, editing: true, color: "#9ad6ca" });
    this.setState({
      name: birthday.summary.substring(0, birthday.summary.length - 12),
      birthDate: moment(birthday.start.dateTime).format("L"),
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
    this.setState({ editing: true, color: "#9ad6ca" });
  };
  save = () => {
    if (this.state.creating) return this.createBirthday();
    this.updateBirthday();
  };
  updateBirthday = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const refresh_token = localStorage.getItem("refresh_token");
      const scope = localStorage.getItem("scope");
      const token_type = localStorage.getItem("token_type");
      const expiry_date = localStorage.getItem("expiry_date");
      const { birthday } = this.props;
      const { birthDate, name, note, days } = this.state;
      if (validateEvent({ birthDate, name, note, days: Number(days) })) return;
      const updatedBirthday = await axios.patch(
        `${API_URL}/rest/birthdays/${birthday.id}`,
        {
          event: {
            date: new Date(birthDate).toISOString(),
            name,
            description: note,
            days: Number(days),
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
      );
      const { data } = updatedBirthday;
      toast("Birthday updated!");
      this.setState({
        editing: false,
        color: "white",
        name: data.summary.substring(0, data.summary.length - 12),
        birthDate: moment(data.start.dateTime).format("L"),
        days:
          data.reminders.overrides &&
          Math.ceil(data.reminders.overrides[0].minutes / 60 / 24),
        note: data.location,
      });
    } catch (error) {
      toast.error("Error updating!");
      console.error(error);
    }
  };
  createBirthday = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const refresh_token = localStorage.getItem("refresh_token");
      const scope = localStorage.getItem("scope");
      const token_type = localStorage.getItem("token_type");
      const expiry_date = localStorage.getItem("expiry_date");
      const { birthDate, name, note, days } = this.state;
      if (validateEvent({ birthDate, name, note, days: Number(days) })) return;
      await axios.post(
        `${API_URL}/rest/birthdays/`,
        {
          birthday: {
            date: new Date(birthDate).toISOString(),
            name,
            description: note,
            days: Number(days),
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
      );
      toast("Birthday created!");
      this.props.endCreating();
      this.props.fetchBirthdays();
    } catch (error) {
      toast.error("Error creating birthday");
      console.error(error);
    }
  };
  onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  };
  onDayChange = (day) => {
    this.setState({ birthDate: day });
  };
  delete = async () => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    const scope = localStorage.getItem("scope");
    const token_type = localStorage.getItem("token_type");
    const expiry_date = localStorage.getItem("expiry_date");
    const { birthday, fetchBirthdays } = this.props;
    try {
      await axios.delete(`${API_URL}/rest/birthdays/${birthday.id}`, {
        headers: {
          Authorization: JSON.stringify({
            access_token,
            refresh_token,
            scope,
            token_type,
            expiry_date,
          }),
        },
      });
      toast("Birthday deleted!");
      return fetchBirthdays();
    } catch (error) {
      toast.error("Error deleting birthday!");
      console.error(error);
    }
  };
  cancel = () => {
    this.props.endCreating();
  };

  render() {
    const {
      name,
      birthDate,
      days,
      note,
      editing,
      color,
      creating,
    } = this.state;

    return (
      <ContentRow color={color}>
        <ContentColumn>
          <ContentLabel color={color}>Name: </ContentLabel>
          {editing && (
            <ContentInput
              placeholder="Name"
              value={name}
              name="name"
              onChange={this.onChange}
            />
          )}
          {!editing && <ContentText>{name}</ContentText>}
        </ContentColumn>
        <ContentColumn>
          <ContentLabel color={color}>Birth Date: </ContentLabel>
          {editing && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DayPickerInput
                value={birthDate}
                onDayChange={this.onDayChange}
                component={(props) => <ContentInput {...props} />}
              />
            </div>
          )}
          {!editing && (
            <ContentText>
              {moment(new Date(birthDate)).format("MMM Do")}
            </ContentText>
          )}
        </ContentColumn>
        <ContentColumn>
          <ContentLabel color={color}>Reminder (Days) </ContentLabel>
          {editing && (
            <ContentInput
              value={days}
              type="number"
              placeholder="Days (e.g. 7)"
              name="days"
              onChange={this.onChange}
            />
          )}
          {!editing && <ContentText>{days}</ContentText>}
        </ContentColumn>
        <ContentColumn>
          <ContentLabel color={color}>Note: </ContentLabel>
          {editing && (
            <ContentInput
              placeholder="Note (e.g. Buy cake)"
              value={note}
              name="note"
              onChange={this.onChange}
            />
          )}
          {!editing && <ContentText>{note}</ContentText>}
        </ContentColumn>
        <ButtonColumn>
          {editing && (
            <ButtonContent>
              <SaveButton onClick={this.save}>Save</SaveButton>
              {!creating && (
                <DeleteButton onClick={this.delete}>Delete</DeleteButton>
              )}
              {creating && (
                <CancelButton onClick={this.cancel}>Cancel</CancelButton>
              )}
            </ButtonContent>
          )}
          {!editing && (
            <ButtonContent>
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
            </ButtonContent>
          )}
        </ButtonColumn>
      </ContentRow>
    );
  }
}
export default Row;
