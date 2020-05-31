import React, { Component } from "react";
import "./switch.scss";

export default class Switch extends Component {
  render() {
    let { checked, handleSwitch } = this.props;
    let modeText = "dark";
    if (checked) {
      modeText = "light";
    }

    return (
      <div className="switch__container">
        <label className="switch">
          <input type="checkbox" onChange={handleSwitch} checked={checked} />
          <span className="slider"></span>
        </label>
        <span className="switch__text">Switch to {modeText} mode</span>
      </div>
    );
  }
}
