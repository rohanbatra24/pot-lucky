import React from "react";
import {
  Accordion,
  Card,
  Button,
  ButtonToolbar,
  Jumbotron,
  ButtonGroup,
  Image,
} from "react-bootstrap";

export default function SelectedPantry(props) {
  if (props.selectedPantryList.length === 0) {
    return (
      <Image
        className="selected-pantry__empty"
        src="https://image.flaticon.com/icons/svg/1846/1846881.svg"
        alt="Ingredients"
      />
    );
  }

  const items = props.selectedPantryList.map((item) => {
    return (
      <div className="selected-pantry__item">
        <span class="adjusted-sel-pantry-item">{item}</span>
        <Button
          className="selected-pantry__remove"
          onClick={() =>
            props.setSelectedPantryList(
              props.selectedPantryList.filter((name) => item !== name)
            )
          }
          variant="outline-secondary"
        >
          Remove
        </Button>
      </div>
    );
  });

  return (
    <div>
      <p>Searching with: </p>
      <Jumbotron className="selected-pantry__full">{items}</Jumbotron>

      <ButtonGroup className="mr-2" aria-label="Reset All Button">
        <Button
          block
          variant="warning"
          onClick={() => props.setSelectedPantryList([])}
        >
          Remove All Items From Mixing Bowl
        </Button>
      </ButtonGroup>
    </div>
  );
}
