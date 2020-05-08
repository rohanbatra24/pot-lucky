import React from 'react';
import classNames from 'classnames';

const pantryList = [{
  id: 1,
  user_id: 1,
  name: 'banana',
  quantity: 3.432,
  unit: 'pieces',
  expiry: '2020-05-08'
}];


export default function Show(props) {
  const pantriesClass = classNames({
    "pantry-list__item": props,
    "pantry-list__item--selected": props.selected,
  });

  return (
    <li>
      <h3>
        {props.name}
        [info icon]
      </h3>
    </li>
  );
};