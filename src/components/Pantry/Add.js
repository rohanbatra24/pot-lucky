import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Add(props) {
  const [values, setValues] = useState({
    name: "",
    quantity: "",
    unit: "",
    expiry: ""
  }) 
  
  const ingredientList = props.ingredients.map(ingred => {
    return <option>{ingred.name}</option>
  })
  
  // console.log("ingred list ====> ", ingredientList)
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail" onSubmit={(event) => props.handleAddItem(event, values)}>
          <Form.Label>Add new item to pantry</Form.Label>
          <Form.Control
            class="form-component"
            value={values.name} 
            name="name"
            placeholder="Ingredient" 
            type="text" 
            list="ingredients" 
            onChange={(e) => setValues({...values, name: e.target.value})}
          />
            
          <datalist id="ingredients">
            <select>{ingredientList}</select>
          </datalist>

          <Form.Control class="form-component" value={values.quantity} name="quantity" placeholder="Quantity" type="number" onChange={(e) => setValues({...values, quantity: e.target.value})} />
          <Form.Control class="form-component" value={values.unit} name="unit" placeholder="Unit" type="text" onChange={(e) => setValues({...values, unit: e.target.value})} /> {/* dropdown */}
          <Form.Control class="form-component" value={values.expiry} name="expiry" placeholder="Expiration Date (Optional)" type="date" onChange={(e) => setValues({...values, expiry: e.target.value})} />
          <Button variant="info" type="submit">Add</Button>
        </Form.Group> 
      </Form>
    </>
  )
  
};