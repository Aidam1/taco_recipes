import React, { Component } from "react";
import "./sidebar.scss";
export default class Sidebar extends Component {
  render() {
    let { darkmode } = this.props;
    return (
      <div className="sidebar">
        <h1>Taco Recipe &#127790;</h1>
        <p>It's Taco Time! Get some new delicious recipes.</p>
        <p>
          Powered by{" "}
          <a href="https://github.com/evz/tacofancy-api">TacoFancy API</a>
        </p>
      </div>
    );
  }
}
