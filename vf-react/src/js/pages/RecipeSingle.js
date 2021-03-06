import React from "react";
import { IndexLink, Link } from "react-router";

var data = require('json!../../data/food.json');
const recipes = data.recipes;
const ingredients = data.ingredients;
const tags = data.tags;


export default class RecipeSingle extends React.Component {
  render() {
    const id = this.props.params.id;
    var recipe = recipes[id];
    var ingredient = ingredients[id];
    var ingredientList = recipe.ingredient_amount.map(function(ingredient){
      return(
        <div key={ingredient.ingredient_id} class="list-group-item">
          <p><Link to={"ingredients/" + ingredient.ingredient_id}>{ingredient.original_string}</Link></p>
        </div>);
    });
    var tagList = recipe.tags.map(function(tag){
      var tagItem = tags[tag];
      return (
        <div key={tag} class="col-lg-2 col-md-2 col-sm-2 col-xs-3">
          <Link to={"tags/" + tag}><img id="tag-single" src={tagItem.image} /></Link>
        </div>);
    });
    return (
      <div class="container">
        <div class="media hidden-sm hidden-xs">
          <h2>{recipe.name}</h2>
          <div id="media-left" class="media-left">
            <img class="media-object" id="image-single-lg" src={recipe.image} alt="..." />
            {tagList}
          </div>
          <div class="media-body">
            {ingredientList.length > 0 ? (<h4 class="media-heading">Ingredients</h4>) : (<h4 class="no">Ingredient</h4>)}
            {ingredientList}
            {recipe.instructions.length > 0 ? (<h4 class="media-heading">Instructions</h4>) :  (<h4 class="no">Instructions</h4>)}
            <p>{recipe.instructions}</p>

          </div>
        </div>

        <div class="container hidden-md hidden-lg">
          <div class="row">
            <div class="text-center">
              <h3>{recipe.name}</h3>
            </div>
          </div>

          <div class="row">
            <img class="image1" id="image-single-sm" src={recipe.image} alt="..." />
          </div>
          <div class="row">
            <div class="col-sm-12 col-xs-12">
                {tagList}
            </div>
          </div>

          <div id="ingSingleList" class="row">
            <div class="col">
                {ingredientList.length > 0 ? (<h4 class="media-heading">Ingredients</h4>) : (<h4/>)}
                {ingredientList}
            </div>
          </div>
          <div id="ingSingleList" class="row">
            <div class="col">
                <h4>Instructions</h4>
                <p>{recipe.instructions}</p>

            </div>
        </div>
      </div>
    </div>






    );
  }
}
