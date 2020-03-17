import { types } from "mobx-state-tree";

const Auth = types.model({
  loggedIn: types.optional(types.boolean, false),
  access_token: types.optional(types.string, ""),
  refresh_token: types.optional(types.string, ""),
  scope: types.optional(types.string, ""),
  token_type: types.optional(types.string, ""),
  expiry_date: types.optional(types.string, "")
});
const Calendar = types.model({
  // birthdays: types.array()
});

const RootStore = types.model({
  auth: types.map(Auth),
  calendar: types.map(Calendar)
});

export const store = RootStore.create({
  auth: {},
  loggedIn: false
});
