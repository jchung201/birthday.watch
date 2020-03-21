import { types, flow } from "mobx-state-tree";
import { API_URL, WEB_URL } from "../utilities/URL";
import axios from "axios";
import {
  authorization,
  clearAuthorization,
  setAuthorization
} from "../utilities/auth";

export const Auth = types
  .model({
    loggedIn: types.optional(types.boolean, false),
    access_token: types.optional(types.string, ""),
    refresh_token: types.optional(types.string, ""),
    scope: types.optional(types.string, ""),
    token_type: types.optional(types.string, ""),
    expiry_date: types.optional(types.string, "")
  })
  .actions(self => ({
    authenticate: function() {
      const {
        access_token,
        refresh_token,
        scope,
        token_type,
        expiry_date
      } = authorization;
      if (access_token && refresh_token && scope && token_type && expiry_date) {
        self.logIn();
      } else {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let code = params.get("code");
        if (code) {
          axios
            .post(`${API_URL}/rest/auth/token`, { code })
            .then(({ data }) => {
              setAuthorization(data);
              self.logIn();
              window.location = WEB_URL;
            })
            .catch(error => {
              console.error(error);
              self.logOut();
            });
        } else {
          self.logOut();
        }
      }
    },
    logIn() {
      self.loggedIn = true;
    },
    logOut() {
      clearAuthorization();
      self.loggedIn = false;
    }
  }));
