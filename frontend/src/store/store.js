import { types } from "mobx-state-tree";

const Auth = types
  .model({
    loggedIn: types.optional(types.boolean, false),
    access_token: types.optional(types.string, ""),
    refresh_token: types.optional(types.string, ""),
    scope: types.optional(types.string, ""),
    token_type: types.optional(types.string, ""),
    expiry_date: types.optional(types.string, "")
  })
  .actions(self => ({
    logIn() {
      self.loggedIn = true;
    }
  }));

const Birthday = types.model({
  id: types.string
});
const Calendar = types
  .model({
    birthdays: types.array(Birthday)
  })
  .actions(self => ({
    logIn() {
      self.loggedIn = true;
    }
  }));

const Root = types.model({
  auth: types.optional(Auth, {}),
  calendar: types.optional(Calendar, {})
});

export const store = Root.create({
  auth: { loggedIn: false }
});