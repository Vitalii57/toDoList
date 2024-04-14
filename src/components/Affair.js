import React, { Component } from "react";

const currentData = new Date();
const currentDay = currentData.getDate();
const currentMonth = currentData.getMonth() + 1;
const currentFullYear = currentData.getFullYear();
const currentHours = currentData.getHours();
const currentMinutes = currentData.getMinutes();

export default class Affair extends Component {
  affair = this.props.affair;

  render() {
    function getStatus(affair) {
      const dateNow = `${currentFullYear}-${
        currentMonth < 10 ? "0" + currentMonth : currentMonth
      }-${currentDay < 10 ? "0" + currentDay : currentDay}`;

      const timeNow = `${currentHours}:${currentMinutes}`;

      if (affair.data <= dateNow && affair.time < timeNow) {
        return "Задача просрочена";
      } else if (affair.data === dateNow && affair.time > timeNow) {
        return "Сегодня запланирована задача";
      } else if (affair.data === dateNow && affair.time === timeNow) {
        return "Задачу пора выполнять, часики тикают";
      } else if (affair.data > dateNow) {
        return "Задача ждет выполнения...";
      }
    }

    return (
      <div>
        <div className="affair">
          <button
            onClick={() => this.props.onDelete(this.affair.id)}
            className="edit"
          >
            Удалить запись
          </button>
          <h3>{this.affair.data}</h3>
          <h4>{this.affair.time}</h4>
          <p className="paragraph">{this.affair.text}</p>

          <b>
            {/* {this.affair.time <= timeNow ? "Задача просрочена" : this.affair.data === dateNow ? "Сегодня запланирована задача" : "Задача ждет выполнения..."} */}
            {getStatus(this.affair)}
          </b>
        </div>
      </div>
    );
  }
}
