import React, { Component, useEffect } from "react";
import { observer, inject } from "mobx-react";

import { StoreInterface } from "../interfaces/store";

import Home from "./Home";
import Calendar from "./Calendar";

interface OwnProps {
  store?: StoreInterface;
}

const App = ({
  store: {
    auth: { authenticate, loggedIn },
  },
}: OwnProps) => {
  useEffect(() => {
    authenticate();
  }, []);
  if (loggedIn) return <Calendar />;
  return <Home />;
};

export default inject("store")(observer(App));
