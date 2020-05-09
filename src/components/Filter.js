import React from 'react';
import Form from 'react-bootstrap/Form';

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
  return (
    <div className='filters'>
    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Vegan"
      />
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Vegetarian"
      />
        <Form.Check 
        type="switch"
        id="custom-switch"
        label="Gluten-Free"
      />
        <Form.Check 
        type="switch"
        id="custom-switch"
        label="Low Calorie"
      />
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
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="exampleForm.SelectCustom">
      <Form.Label>Dish Type</Form.Label>
        <Form.Control as="select" custom>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Control>
      </Form.Group>
    </Form>
  </div>
  )
}