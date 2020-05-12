import React from 'react';

const Slider = ({ initialSize, minSize, maxSize, handleChange }) => {
  
  
  return (
    <>
      <input
        value={initialSize}
        onChange={handleChange}
        max={maxSize}
        min={minSize}
        className="slider"
        // id={`slider`}
        type="range"
      />
      <label
        className="react-slider-label"
        htmlFor={`react-slider`}
      >
        <span className={`react-slider`} />
      </label>
    </>
  );
};

export default Slider;