import React, { Component } from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Switch from "../Switch/Switch.jsx";
import Button from "../Button/Button.jsx";
import Recipe from "../Recipe/Recipe.jsx";
import "./app.scss";

export default class App extends Component {
  state = {
    darkmode: false,
    recipe: [],
  };

  fetchRecipe = () => {
    fetch("http://taco-randomizer.herokuapp.com/random/")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ recipe: json });
      });
  };

  componentDidMount() {
    this.fetchRecipe();
  }

  handleGenerateNewRecipe = () => {
    this.fetchRecipe();
  };

  handleSwitch = () => {
    this.setState((prevState) => {
      return { darkmode: !prevState.darkmode };
    });
  };

  render() {
    let modeClass = `app__container`;
    if (this.state.darkmode) {
      modeClass = `app__container app__container--dark`;
    }

    return (
      <div className={modeClass}>
        <div className="app__sidebar">
          <div className="sidebar__container">
            <Sidebar />
            <div className="sidebar__btn">
              <Button
                text="Generate"
                handleClick={this.handleGenerateNewRecipe}
              />
            </div>
            <div className="sidebar__switch">
              <Switch
                handleSwitch={this.handleSwitch}
                checked={this.state.darkmode}
              />
            </div>
          </div>
        </div>
        <Recipe recipe={this.state.recipe} />
      </div>
    );
  }
}
