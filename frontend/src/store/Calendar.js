import { types } from "mobx-state-tree";
import axios from "axios";
import { API_URL } from "../utilities/URL";
import { Auth } from "./Auth";

export const Birthday = types.model({
  id: types.string
});
export const Calendar = types
  .model({
    birthdays: types.optional(types.array(Birthday), []),
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
            console.log(data);
            self.setBirthdays(data);
            // this.setState({ dates: data, loading: false });
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
