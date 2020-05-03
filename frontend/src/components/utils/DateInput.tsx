import React, { Component } from "react";
import { ContentInput } from "../styled/rowStyled";

export default class DateInput extends Component {
  static propTypes = {};

  render() {
    return <ContentInput {...this.props} />;
  }
}
