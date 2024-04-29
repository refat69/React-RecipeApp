import { Fragment, useEffect, useState } from "react";
import "./App.css";
import { Recipe } from "./Components/Recipe";
export const App = () => {
  const APP_ID = "718ac365";
  const APP_KEY = "68c609fd45a6e20fe049580de56978b6";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecips();
  }, [query]);

  const getRecips = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`,
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <Fragment>
      <div className="App">
        <h1 className="app-title">Recipe App</h1>
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="search what recipe you want.."
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </Fragment>
  );
};
