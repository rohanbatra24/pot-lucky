import React, { Fragment } from 'react';

const Slider = ({ initialSize, minSize, maxSize, handleChange, type }) => {
	return (
		<div className="sliderFilterContainer-item">
			<label className="react-slider-label" htmlFor={`react-slider`}>
				<span className={`react-slider`}>{type}</span>
			</label>
			<input
				value={initialSize}
				onChange={handleChange}
				max={maxSize}
				min={minSize}
				className="slider"
				id={`${type}-slider`}
				type="range"
			/>

			<output htmlFor={`${type}-slider`} id={`${type}-slider-output`}>
				{initialSize}
			</output>
		</div>
	);
};

export default Slider;
