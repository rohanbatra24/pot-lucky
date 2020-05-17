import React, { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
// import '../../App.css';
import '../../styles/App.css';

export default function SelectedPantry(props) {
  if (props.selectedPantryList.length === 0) {
    return(
      <Jumbotron className="selected-pantry_empty">
        Add Item from Pantry!
      </Jumbotron>
    )
  }
  
  const items = props.selectedPantryList.map(item => {
    return (
      <div className="selected-pantry__item">
        <span>{item}</span>
        <Button onClick={() => props.setSelectedPantryList(props.selectedPantryList.filter((name) => item !== name))} variant="outline-secondary">Remove</Button>
        {/* <button onClick={() => props.setSelectedPantryList(props.selectedPantryList.filter((name) => item !== name))}>Remove</button> */}
      </div>
    )
  });

  return (
    <Jumbotron className="selected-pantry__full">
      <h5>Searching with: </h5>
      {items}
    </Jumbotron>
    );
};

