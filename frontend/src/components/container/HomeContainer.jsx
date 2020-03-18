import React, { Component } from "react";
import Home from "../presentational/Home.jsx";
import { observer, inject } from "mobx-react";

// class HomeContainer extends Component {
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount() {
//     console.log(this.props);
//   }
//   render() {
//     const { logIn } = this.props;
//     return <Home logIn={logIn} />;
//   }
// }
export default inject("store")(
  observer(({ store }) => {
    console.log(store);

    // store.logIn();
    console.log(store);
    return <div>fuck</div>;
  })
);
