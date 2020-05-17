import React, { Fragment } from 'react';
import { Button, Jumbotron, ButtonGroup } from 'react-bootstrap';

export default function SelectedPantry(props) {
  if (props.selectedPantryList.length === 0) {
    return(
      <Jumbotron className="seleted-pantry_empty">
        Add Item from Pantry!
      </Jumbotron>
    )
  }
  
  const items = props.selectedPantryList.map(item => {
    return (
      <div className="selected-pantry__item">
        <span>{item}</span>
        <Button onClick={() => props.setSelectedPantryList(props.selectedPantryList.filter((name) => item !== name))} variant="outline-secondary">Remove</Button>
      </div>
    )
  });

  return (
    <Jumbotron className="selected-pantry__full">
      <h5>Searching with: </h5>
      {items}
      <ButtonGroup className="mr-2" aria-label="Reset All Button">
					<Button variant="warning" onClick={() => props.setSelectedPantryList([])}>
						Reset All
					</Button>
				</ButtonGroup>
    </Jumbotron>
    );
};

