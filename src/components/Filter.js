import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Switch from './Switch';
import Slider from './Slider';

// cuisine - dropdown
// time required - slider
// dietary restrictions - switches
//  - vegan
//  - vegatarian
//  - gluten-free
//  - low calories (?)
// spoonacular score - slider
// dish type - dropdown

export default function Filter(props) {
  
  //get a list of dish types from recipe list
  //to form dish type dropdown 
  const dishList = new Set()
  
  props.recipeList.forEach( recipe => {
    recipe.dishTypes.forEach( dish => {
      dishList.add(dish);
    })
  });

  const dishesList = [...dishList].map( type => {
    return <option value={type}>{type}</option>;
  });

  //for time range slider
  // go through recipeList and get readyInMinutes
  //choose the maximum and the minimum
  const times = [];
  props.recipeList.forEach( recipe => {
    times.push(recipe.readyInMinutes);
  });
  const max_time= Math.max(...times);
  const min_time= Math.min(...times);
  console.log("max: ", max_time, "min: ", min_time);

  //////////
  return (
    <div className='filters'>
    <Form>
      <Switch 
        isOn={props.filters.vegan}
        handleToggle={() => props.setFilters({...props.filters, vegan: !props.filters.vegan})}
      /> 
      Vegan
      <Switch 
        isOn={props.filters.vegetarian}
        handleToggle={() => props.setFilters({...props.filters, vegetarian: !props.filters.vegetarian})}
      />
      Vegetarian
      <Switch 
        isOn={props.filters.glutenfree}
        handleToggle={() => props.setFilters({...props.filters, glutenfree: !props.filters.glutenfree})}
      />
      Gluten Free
      <Switch 
        isOn={props.filters.healthy}
        handleToggle={() => props.setFilters({...props.filters, healthy: !props.filters.healthy})}
      />
      Healthy
      <Slider 
        maxSize={100}
        minSize={0}
        initialSize={props.filters.rating}
        handleChange={(event) => props.setFilters({...props.filters, rating: event.target.value})}
      />
      Rating
      <Slider 
        maxSize={max_time}
        minSize={min_time}
        initialSize={props.filters.time}
        handleChange={(event) => props.setFilters({...props.filters, time: event.target.value})}
      />
      Time
      <Form.Group controlId="exampleForm.SelectCustom">
      <Form.Label>Dish Type</Form.Label>
        <Form.Control as="select" custom onChange={(event) => props.setFilters({...props.filters, dish: event.target.value})}>
          <option>Choose a Dish Type</option>
          {dishesList}
        </Form.Control>
      </Form.Group>
    </Form>
  </div>
  )
}
