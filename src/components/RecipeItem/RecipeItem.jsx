import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import Button from "../Button/Button.jsx";
import "./recipeitem.scss";

export default class RecipeItem extends Component {
  render() {
    const { category, text, link } = this.props;
    return (
      <div className="item">
        <div className="item__category">{category}</div>
        <Markdown>{text}</Markdown>
        <a href={link} className="item__link">
          <Button text="Learn more" />
        </a>
      </div>
    );
  }
}
