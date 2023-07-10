import React, { Component } from "react";
import classes from "./Header.module.css";

export default class Header extends Component {
  render() {
    return (
      <div className={classes.header}>
        <h1>MOVIE SEAT SELECTION</h1>
      </div>
    );
  }
}
