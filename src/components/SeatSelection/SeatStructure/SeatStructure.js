import React, { Component } from "react";
import classes from "./SeatStructure.module.css";
import SeatItem from "./../SeatItem/SeatItem";
import Button from "../../UI/Button/Button";

export default class SeatStructure extends Component {
  render() {
    let { seats } = this.props;
    let seatCol = seats[0].danhSachGhe;
    return (
      <>
        <div className={classes.screen}>
          <h5 className={classes.screen__desc}>SCREEN THIS WAY</h5>
        </div>
        <table className={`${classes.seatBlock} table`}>
          <tbody>
            <tr>
              <td></td>
              {seatCol.map((item, index) => (
                <td>{index + 1}</td>
              ))}
            </tr>
            {seats.map((seatRow) => {
              return (
                <tr>
                  <td>{seatRow.hang}</td>
                  {seatRow.danhSachGhe.map((seat) => (
                    <SeatItem seat={seat} />
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={classes.seatStatus}>
          <ul>
            <li>
              <span
                className={`${classes.smallBox} ${classes.greenBox}`}
              ></span>
              Selected Seat
            </li>
            <li>
              <span className={`${classes.smallBox} ${classes.redBox}`}></span>
              Reserved Seat
            </li>
            <li>
              <span
                className={`${classes.smallBox} ${classes.emptyBox}`}
              ></span>
              Empty Seat
            </li>
          </ul>
        </div>
        <div className={classes.actions}>
          <Button>Confirm Selection</Button>
        </div>
      </>
    );
  }
}
