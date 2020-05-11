import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Switch from './Switch';

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

  const dishesList = props.dishes.map( dish => {
    return <option>${dish}</option>
  })

  const cuisinesList = props.cuisines.map( type => {
    return <option>${type}</option>
  })

  console.log("Filters:  ", props.filters)

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
      <Form.Group controlId="formBasicRange">
        <Form.Label>Time</Form.Label>
        <Form.Control type="range" />
      </Form.Group>
      <Form.Group controlId="formBasicRange">
        <Form.Label>Rating</Form.Label>
        <Form.Control type="range" />
      </Form.Group>
      <Form.Group controlId="exampleForm.SelectCustom">
      <Form.Label>Cuisine</Form.Label>
        <Form.Control as="select" custom>
          {cuisinesList}
          {/* <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option> */}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.SelectCustom">
      <Form.Label>Dish Type</Form.Label>
        <Form.Control as="select" custom>
          {dishesList}
          {/* <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option> */}
        </Form.Control>
      </Form.Group>
    </Form>
  </div>
  )
}