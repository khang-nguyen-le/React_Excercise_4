import React, { Component } from "react";
import classes from "./SeatSelection.module.css";
import Card from "../UI/Card/Card";
import SeatStructure from "./SeatStructure/SeatStructure";
import BookingDetail from "./BookingDetail/BookingDetail";

export default class SeatSelection extends Component {
  render() {
    return (
      <Card className={classes.seatSelection}>
        <SeatStructure />
        <BookingDetail />
      </Card>
    );
  }
}
