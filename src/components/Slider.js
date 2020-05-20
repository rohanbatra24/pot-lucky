import React from 'react';
import { Badge } from 'react-bootstrap';

const Slider = ({ initialSize, minSize, maxSize, handleChange, type, disabled }) => {
	return (
		<div className="sliderFilterContainer-item">
			<label className="react-slider-label" htmlFor={`react-slider`}>
				<span className={`react-slider`}>{type}</span>
			</label>
			<input
				disabled={disabled}
				value={initialSize}
				onChange={handleChange}
				max={maxSize}
				min={minSize}
				className="slider"
				id={`${type}-slider`}
				type="range"
			/>

			<Badge variant="dark">
				<output htmlFor={`${type}-slider`} id={`${type}-slider-output`}>
					{initialSize} {type === 'Prep Time' ? ' Mins' : '%'}
				</output>
			</Badge>
		</div>
	);
};

export default Slider;
