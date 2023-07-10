import React, { Component } from 'react'
import classes from './Button.module.css'

export default class Button extends Component {
    render() {
        return (
            <button
                type={this.props.type || 'button'}
                className={`${classes.button} ${this.props.className}`}
                onClick={this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}
