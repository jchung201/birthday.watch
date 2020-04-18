import { types, flow } from "mobx-state-tree";
import { API_URL, WEB_URL } from "../utilities/URL";
import axios from "axios";
import {
  checkAuthorization,
  clearAuthorization,
  setAuthorization,
} from "../utilities/auth";

export const Auth = types
  .model({
    loggedIn: types.optional(types.boolean, false),
    access_token: types.optional(types.string, ""),
    refresh_token: types.optional(types.string, ""),
    scope: types.optional(types.string, ""),
    token_type: types.optional(types.string, ""),
    expiry_date: types.optional(types.string, ""),
  })
  .actions((self) => ({
    authenticate: function() {
      let params = new URLSearchParams(window.location.search);
      let code = params.get("code");
      if (code) {
        return axios
          .post(`${API_URL}/rest/auth/token`, { code })
          .then(({ data }) => {
            window.location = WEB_URL;
            setAuthorization(data);
            self.logIn();
          })
          .catch((error) => {
            //TODO:Notify logout
            console.error(error);
            self.logOut();
          });
      }
      const authorization = checkAuthorization(self.logOut);
      if (authorization) return self.logIn();
    },
    logIn() {
      self.loggedIn = true;
    },
    logOut() {
      clearAuthorization();
      self.loggedIn = false;
    },
  }));
