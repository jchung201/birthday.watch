import { types } from "mobx-state-tree";
import { API_URL, WEB_URL } from "../utilities/URL";
import { toast } from "react-toastify";
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
    authenticating: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    authenticate: async function() {
      self.startAuth();
      let params = new URLSearchParams(window.location.search);
      let code = params.get("code");
      if (code) {
        return axios
          .post(`${API_URL}/rest/auth/token`, { code })
          .then(({ data }) => {
            setAuthorization(data);
            document.location.href = WEB_URL;
            self.endAuth();
          })
          .catch((error) => {
            console.error(error);
            // TODO: notify error
            self.endAuth();
          });
      }
      const authorization = checkAuthorization(self.logOut);
      if (!authorization) return (self.authenticating = false);
      try {
        await axios.get(`${API_URL}/rest/birthdays/`, {
          headers: {
            Authorization: JSON.stringify(authorization),
          },
        });
        self.endAuth();
        return self.logIn();
      } catch (error) {
        self.endAuth();
        console.error(error);
      }
    },
    startAuth() {
      self.authenticating = true;
    },
    endAuth() {
      self.authenticating = false;
    },
    logIn() {
      toast("Logged in!");
      self.loggedIn = true;
    },
    logOut() {
      toast.error("Logged out!");
      clearAuthorization();
      self.loggedIn = false;
    },
  }));
