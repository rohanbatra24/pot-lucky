import React from 'react';
import classNames from 'classnames';

export default function Show(props) {
  const pantriesClass = classNames({
    "pantry-list__item": props,
    "pantry-list__item--selected": props.selected,
  });

  console.log('props:', props);

  return (
    <li>
      <h3>
        {props.name}
        [info icon]
      </h3>
    </li>
  );
};