import React, { useEffect } from "react";
import { observer, inject } from "mobx-react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { StoreInterface } from "../interfaces/store";

import Home from "./Home";
import Calendar from "./Calendar";

interface OwnProps {
  store?: StoreInterface;
}

const App = ({
  store: {
    auth: { authenticate, loggedIn, authenticating },
  },
}: OwnProps) => {
  useEffect(() => {
    authenticate();
  }, []);
  if (authenticating)
    return (
      <Loader
        style={{
          position: "absolute",
          top: "50%",
          bottom: "50%",
          left: "50%",
          right: "50%",
          margin: "auto",
        }}
        type="TailSpin"
        color="#00BFFF"
        height={120}
        width={120}
      />
    );
  if (loggedIn) return <Calendar />;
  return <Home />;
};

export default inject("store")(observer(App));
