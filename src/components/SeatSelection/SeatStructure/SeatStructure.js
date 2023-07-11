import React, { Component } from "react";
import classes from "./SeatStructure.module.css";
import SeatItem from "./../SeatItem/SeatItem";
import Button from "../../UI/Button/Button";
import { connect } from "react-redux";

class SeatStructure extends Component {
  constructor() {
    super();
    this.state = {
      seats: [],
    };
  }

  selectSeatHandler = (selectedSeat) => {
    console.log(selectedSeat);
    console.log(this.state.seats);
    let newSeats = [...this.state.seats];
    let index = newSeats.findIndex((seat) => seat.soGhe === selectedSeat.soGhe);

    if (index !== -1) {
      newSeats.splice(index, 1);
    } else {
      newSeats.push(selectedSeat);
    }

    this.setState({
      seats: newSeats,
    });
    console.log(newSeats);
  };

  // confirmSeatHandler = () => {
  //   const seat = document.getElementsByName("seat");
  //   console.log(seat);
  // };

  render() {
    let { seats } = this.props.seats;

    return (
      <>
        <div className={classes.screen}>
          <h5 className={classes.screen__desc}>SCREEN THIS WAY</h5>
        </div>

        <table className={`${classes.seatBlock} table`}>
          <tbody>
            {seats.map((seatRow, index) => {
              return (
                <tr key={index}>
                  <td>{seatRow.hang}</td>
                  {seatRow.danhSachGhe.map((seat) => {
                    if (!seatRow.hang) {
                      return <td>{seat.soGhe}</td>;
                    } else {
                      return (
                        <SeatItem
                          seat={seat}
                          onChange={() => {
                            return this.selectSeatHandler(seat);
                          }}
                        />
                      );
                    }
                  })}
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
          <Button
            onClick={() => {
              const action = {
                type: "DAT_CHO",
                payload: this.state.seats,
              };
              this.props.dispatch(action);
            }}
          >
            Confirm Selection
          </Button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    seats: state.seats,
  };
};

const ReduxComponent = connect(mapStateToProps)(SeatStructure);

export default ReduxComponent;
