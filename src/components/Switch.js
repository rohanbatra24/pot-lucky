import React from 'react';
// import './Switch.css';

const Switch = ({ isOn, handleToggle, type }) => {
  return (
    <div className="custom-control custom-switch">
      <input 
        checked={isOn}
        onChange={handleToggle}
        className="custom-control-input"
        id={`${type}-switch`}
        type="checkbox"
      />
      <label
        className="custom-control-label"
        htmlFor={`${type}-switch`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default Switch;