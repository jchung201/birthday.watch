import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./store/store";
import App from "./components/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ToastContainer />
  </Provider>,
  document.getElementById("app")
);
