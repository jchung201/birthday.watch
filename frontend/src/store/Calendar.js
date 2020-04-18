import { types } from "mobx-state-tree";
import axios from "axios";
import { API_URL } from "../utilities/URL";
import { Auth } from "./Auth";
import { checkAuthorization } from "../utilities/auth";

export const Override = types.model({
  method: types.optional(types.string, ""),
  minutes: types.optional(types.number, 0),
});
export const Reminders = types.model({
  useDefault: types.optional(types.boolean, false),
  overrides: types.array(Override),
});
export const Start = types.model({
  dateTime: types.optional(types.string, ""),
  timeZone: types.optional(types.string, ""),
});
export const Birthday = types.model({
  id: types.string,
  summary: types.optional(types.string, ""),
  start: types.optional(Start, {}),
  reminders: types.optional(Reminders, {}),
  location: types.optional(types.string, ""),
});
export const Calendar = types
  .model({
    birthdays: types.array(Birthday),
    birthdaysFetched: types.optional(types.boolean, false),
    auth: types.optional(Auth, {}),
    creating: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    async fetchBirthdays() {
      const authorization = checkAuthorization(self.auth.logOut);
      try {
        const data = await axios.get(`${API_URL}/rest/birthdays/`, {
          headers: {
            Authorization: JSON.stringify(authorization),
          },
        });
        self.setBirthdays(data.data);
        self.setBirthdaysFetched();
      } catch (error) {
        //TODO:Notify logout
        self.auth.logOut();
      }
    },
    setBirthdays(list) {
      self.birthdays = list;
    },
    setBirthdaysFetched() {
      self.birthdaysFetched = true;
    },
    startCreating() {
      self.creating = true;
    },
    endCreating() {
      self.creating = false;
    },
  }));

const Root = types.model({
  auth: types.optional(Auth, {}),
  calendar: types.optional(Calendar, {}),
});

export const store = Root.create({
  auth: { loggedIn: false },
});
