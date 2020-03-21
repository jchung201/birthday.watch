import { types } from "mobx-state-tree";
import axios from "axios";
import { API_URL } from "../utilities/URL";
import { Auth } from "./Auth";

export const Override = types.model({
  method: types.optional(types.string, ""),
  minutes: types.optional(types.number, 0)
});
export const Reminders = types.model({
  useDefault: types.optional(types.boolean, false),
  overrides: types.array(Override)
});
export const Start = types.model({
  dateTime: types.optional(types.string, ""),
  timeZone: types.optional(types.string, "")
});
export const Birthday = types.model({
  id: types.string,
  summary: types.optional(types.string, ""),
  start: types.optional(Start, {}),
  reminders: types.optional(Reminders, {}),
  location: types.optional(types.string, "")
});
export const Calendar = types
  .model({
    birthdays: types.array(Birthday),
    auth: types.optional(Auth, {})
  })
  .actions(self => ({
    fetchBirthdays() {
      const access_token = localStorage.getItem("access_token");
      const refresh_token = localStorage.getItem("refresh_token");
      const scope = localStorage.getItem("scope");
      const token_type = localStorage.getItem("token_type");
      const expiry_date = localStorage.getItem("expiry_date");

      if (access_token && refresh_token && scope && token_type && expiry_date) {
        axios
          .get(`${API_URL}/rest/birthdays/`, {
            headers: {
              Authorization: JSON.stringify({
                access_token,
                refresh_token,
                scope,
                token_type,
                expiry_date
              })
            }
          })
          .then(({ data }) => {
            self.setBirthdays(data);
          })
          .catch(error => {
            console.error(error);
            self.auth.logOut();
          });
      } else {
        self.auth.logOut();
      }
    },
    setBirthdays(list) {
      self.birthdays = list;
    }
  }));

const Root = types.model({
  auth: types.optional(Auth, {}),
  calendar: types.optional(Calendar, {})
});

export const store = Root.create({
  auth: { loggedIn: false }
});
