import React, { useState } from 'react';

export default function Add(props) {
  const [values, setValues] = useState({
    name: "",
    quantity: "",
    unit: "",
  }) 
  return (
    <>
      <h3>Add new item to pantry</h3>
      <form onSubmit={(event) => props.handleAddItem(event, values)}>
        <input value={values.name} name="name" placeholder="Name" type="text" onChange={(e) => setValues({...values, name: e.target.value})}></input>
        <input value={values.quantity} name="quantity" placeholder="Quantity" type="text" onChange={(e) => setValues({...values, quantity: e.target.value})}></input>
        <input value={values.unit} name="unit" placeholder="Unit" type="text" onChange={(e) => setValues({...values, unit: e.target.value})}></input> {/* dropdown */}
        <input value={values.expiry} name="expiry" placeholder="Expiry" type="text" onChange={(e) => setValues({...values, expiry: e.target.value})}></input> {/* calender input? */}
        <button type="submit">Add</button>
      </form> 
    </>
  )
  
};