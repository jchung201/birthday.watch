import { types, flow } from "mobx-state-tree";
import { Calendar } from "./Calendar";
import { Auth } from "./Auth";

export const RootStore = types.model({
  auth: types.optional(Auth, {}),
  calendar: types.optional(Calendar, {})
});

export const store = RootStore.create({
  auth: { loggedIn: false }
});
