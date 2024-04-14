import React, { Component } from "react";
import Affair from "./Affair";
import AddAffair from "./AddAffair";

export default class Affairs extends Component {
  render() {
    if (this.props.affairs.length > 0) {
      return (
        <div>
          {this.props.affairs.map((el) => (
            <Affair onDelete={this.props.onDelete} key={el.id} affair={el} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="affair">
          <h3>В данный момент никаких задач нет</h3>
        </div>
      );
    }
  }
}
