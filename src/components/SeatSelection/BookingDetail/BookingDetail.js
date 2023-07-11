import React, { Component } from "react";
import classes from "./BookingDetail.module.css";
import { connect } from "react-redux";

class BookingDetail extends Component {
  render() {
    console.log(this.props);
    return (
      <table className={`${classes.detailTable} table table-bordered`}>
        <thead>
          <tr>
            <th>Seat</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.bookedSeats.map((bookedSeat, index) => {
            return (
              <tr key={index}>
                <td>{bookedSeat.soGhe}</td>
                <td>{bookedSeat.gia}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <td>
              {this.props.bookedSeats.reduce((total, bookedSeat) => {
                return (total += bookedSeat.gia);
              }, 0)}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookedSeats: state.seats.bookedSeats,
  };
};

const ReduxComponent = connect(mapStateToProps)(BookingDetail);

export default ReduxComponent;
