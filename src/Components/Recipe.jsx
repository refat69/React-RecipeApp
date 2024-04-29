import { Fragment } from "react";
export const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <Fragment>
      <div className="recipe">
        <h1 className="recipe-title">Name: {title}</h1>
        <ul>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ul>
        <p>Calories: {calories}</p>
        <img src={image} alt="" />
      </div>
    </Fragment>
  );
};
