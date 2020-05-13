import React, { useState, useEffect } from 'react';

export default function Add(props) {
  const [values, setValues] = useState({
    name: "",
    quantity: "",
    unit: "",
    expiry: ""
  }) 
  
  const ingredientList = props.ingredients.map(ingred => {
    console.log("ingred ====> ", ingred)
    return <option>{ingred.name}</option>
  })
  
  console.log("ingred list ====> ", ingredientList)
  return (
    <>
      <h3>Add new item to pantry</h3>
      <form onSubmit={(event) => props.handleAddItem(event, values)}>
        <div>
          <input value={values.name} 
                 name="name"
                 placeholder="Ingredient" 
                 type="text" 
                 list="ingredients" 
                 onChange={(e) => setValues({...values, name: e.target.value})}>
          </input>
          <datalist id="ingredients">
            <select>{ingredientList}</select>
          </datalist>
        </div>
        <input value={values.quantity} name="quantity" placeholder="Quantity" type="number" onChange={(e) => setValues({...values, quantity: e.target.value})}></input>
        <input value={values.unit} name="unit" placeholder="Unit" type="text" onChange={(e) => setValues({...values, unit: e.target.value})}></input> {/* dropdown */}
        <input value={values.expiry} name="expiry" placeholder="Expiration Date (Optional)" type="date" onChange={(e) => setValues({...values, expiry: e.target.value})}></input>
        <button type="submit">Add</button>
      </form> 
    </>
  )
  
};