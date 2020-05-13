import React, { useState, Fragment } from 'react';

export default function SelectedPantry(props) {
  const items = props.selectedPantryList.map(item => {
    return (
      <Fragment>
        <span>{item}</span>
        <button onClick={() => props.setSelectedPantryList(props.selectedPantryList.filter((name) => item !== name))}>Remove</button>
      </Fragment>
    )
  });

  return items;
};

