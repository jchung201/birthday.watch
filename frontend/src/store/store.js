import { types, flow } from "mobx-state-tree";
import { Calendar } from "./Calendar";
import { Auth } from "./Auth";

const Root = types.model({
  auth: types.optional(Auth, {}),
  calendar: types.optional(Calendar, {})
});

export const store = Root.create({
  auth: { loggedIn: false }
});
