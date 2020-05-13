import React, { useState } from 'react';

export default function Add(props) {
  const [values, setValues] = useState({
    name: "",
    quantity: "",
    unit: "",
    expiry: ""
  }) 
  return (
    <>
      <h3>Add new item to pantry</h3>
      <form onSubmit={(event) => props.handleAddItem(event, values)}>
        <div>
          <input type="text" list="ingredients" />
          <datalist id="ingredients">
            <option>Apricot</option>
            <option>Apple</option>
            <option>Applesauce</option>
          </datalist>
        </div>
        <input value={values.name} name="name" placeholder="Name" type="text" onChange={(e) => setValues({...values, name: e.target.value})}></input> {/* dropdown */}
        <input value={values.quantity} name="quantity" placeholder="Quantity" type="number" onChange={(e) => setValues({...values, quantity: e.target.value})}></input>
        <input value={values.unit} name="unit" placeholder="Unit" type="text" onChange={(e) => setValues({...values, unit: e.target.value})}></input> {/* dropdown */}
        <input value={values.expiry} name="expiry" placeholder="Expiration Date (Optional)" type="date" onChange={(e) => setValues({...values, expiry: e.target.value})}></input>
        <button type="submit">Add</button>
      </form> 
    </>
  )
  
};