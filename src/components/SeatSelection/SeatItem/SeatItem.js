import React, { Component } from "react";
import classes from "./SeatItem.module.css";

export default class SeatItem extends Component {
  render() {
    return (
      <td>
        <input
          type="checkbox"
          className={classes.seat}
          value={this.props.seat.soGhe}
          id={this.props.seat.soGhe}
          disabled={this.props.seat.daDat ? true : false}
        ></input>
      </td >
    );
  }
}
