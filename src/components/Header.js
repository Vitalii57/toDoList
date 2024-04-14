import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">{this.props.title}</header>
      </div>
    );
  }
}
