import React from 'react';

const Slider = ({ initialSize, minSize, maxSize, handleChange, type }) => {
  
  
  return (
    <>
      <input
        value={initialSize}
        onChange={handleChange}
        max={maxSize}
        min={minSize}
        className="slider"
        id={`${type}-slider`}
        type="range"
      />
      <label
        className="react-slider-label"
        htmlFor={`react-slider`}
      >
        <span className={`react-slider`} />
      </label>
      <output for={`${type}-slider`} id={`${type}-slider-output`}>{initialSize}</output>
    </>
  );
};

export default Slider;