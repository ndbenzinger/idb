import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import About from "./pages/About";
import Tags from "./pages/Tags";
import GroceryItems from "./pages/GroceryItems";
import Ingredients from "./pages/Ingredients";
import Landing from "./pages/Landing";
import Recipes from "./pages/Recipes";

import RecipeSingle from "./pages/RecipeSingle";
import IngredientSingle from "./pages/IngredientSingle";
import GroceryItemSingle from "./pages/GroceryItemSingle";
import TagSingle from "./pages/TagSingle";


import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Landing}></IndexRoute>

      <Route path="recipes" name="recipes" component={Recipes}></Route>
      <Route path="ingredients" name="ingredients" component={Ingredients}></Route>
      <Route path="grocery_items" name="grocery_items" component={GroceryItems}></Route>
      <Route path="tags" name="tags" component={Tags}></Route>

      <Route path="about" name="about" component={About}></Route>

      <Route path="recipes(/:id)" name="recipe-single" component={RecipeSingle}></Route>
      <Route path="ingredients(/:id)" name="ingredient-single" component={IngredientSingle}></Route>
      <Route path="grocery_items(/:id)" name="gi-single" component={GroceryItemSingle}></Route>
      <Route path="tags(/:id)" name="tag-single" component={TagSingle}></Route>


    </Route>
  </Router>,
app);
