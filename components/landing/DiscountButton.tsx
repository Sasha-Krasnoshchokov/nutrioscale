'use client';
import { useState } from 'react';

const DiscountButton = () => {
	const [isApply, setIsApply] = useState(false);

	const handleButton = () => {
		setIsApply(!isApply);
		alert('Discount applied');
	};
	return (
		!isApply && (
			<button
				className='discount-button'
				onClick={handleButton}>
				GET 50% DISCOUNT
			</button>
		)
	);
};

export default DiscountButton;
