import React, { Component } from "react";
import PropTypes from "prop-types";
import "./button.scss";

export default class Button extends Component {
  render() {
    return (
      <button className="btn" onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
