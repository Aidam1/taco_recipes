import React, { Component } from "react";
import RecipeItem from "../RecipeItem/RecipeItem.jsx";
import "./recipe.scss";

export default class Recipe extends Component {
  generateRecipe = () => {
    if (this.props.recipe?.length === 0) {
      return "Loading...";
    }
    let completeRecipe = [];
    for (let [key, value] of Object.entries(this.props.recipe)) {
      completeRecipe.push(
        <RecipeItem
          key={key}
          category={key}
          text={value.recipe}
          link={value.url}
        />
      );
    }
    return completeRecipe;
  };

  render() {
    return <div className="recipe">{this.generateRecipe()}</div>;
  }
}
