import React, { Component } from "react";
import classes from "./BookingDetail.module.css";

export default class BookingDetail extends Component {
  render() {
    return (
      <table className={`${classes.detailTable} table table-bordered`}>
        <thead>
          <tr>
            <th>Row</th>
            <th>Seat</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>A2</td>
            <td>2000</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <td></td>
            <td>2000</td>
          </tr>
        </tfoot>
      </table>
    );
  }
}
