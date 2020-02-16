import React, { Component } from "react";
import Row from "../presentational/Row.jsx";
class RowContainer extends Component {
  render() {
    const { date } = this.props;
    return <Row date={date} />;
  }
}
export default RowContainer;
