import React, { Component } from "react";
import Home from "../presentational/Home.jsx";
import { observer, inject } from "mobx-react";

const HomeContainer = ({ logIn }) => <Home logIn={logIn} />;
export default inject("store")(observer(HomeContainer));
