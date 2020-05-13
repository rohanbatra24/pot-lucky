import React from 'react';

export default function FullRecipe(props) {
  // const {...props} = props.recipe;
  return(
    <div id={props.recipe.id}>
      <img src={props.recipe.image} alt={props.recipe.title}/>
      <h2>Title: {props.recipe.title}</h2>
      <span>Instructions: {props.recipe.instructions}</span>
      <span></span>
      <span></span>
      <span></span>
    </div>

  )
}