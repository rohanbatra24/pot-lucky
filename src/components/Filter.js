import React, { useState } from 'react';
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
  const [filters, setFilters] = useState({
    vegan: false,
    vegetarian: false,
    glutenfree: false,
    healthy: false,
    time: 0,
    rating: 0,
    cuisine: null,
    dish: null
  })
  
  // const handleSwitch = (type) => {
  //   setFilters({...filters, type: !filters[type]})
  //   console.log("CHANGED FILTER: ", filters)
  // }

  const dishesList = props.dishes.map( dish => {
    return <option>${dish}</option>
  })

  const cuisineList = props.cuisines.map( type => {
    return <option>${type}</option>
  })

  console.log("Filters:  ", filters)

  return (
    <div className='filters'>
    <Form>
      <Form.Check 
        type="switch"
        id="vegan-switch"
        label="Vegan"
        checked= {filters.vegan}
        handleToggle={() => setFilters({...filters, vegan: !filters.vegan})}
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
          {/* {cuisinesList} */}
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
          {/* {dishesList} */}
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