import React from 'react';

const Footer = () => {
	return (
		<footer>
			<div className='max-w-[421px]'>
				<div className='mb-2 w-[120.1px] h-[60px] bg-no-repeat bg-center bg-contain bg-[url(/assets/icons/nutrioscale-logo.svg)]' />
				<p className='font-helvetica text-[16px] leading-[22px]'>
					The scale that makes calorie tracking effortless by automatically recognizing the
					ingredients you weigh.
				</p>
			</div>
			<div>
				<p className='mb-6'>128 City Road, London, EC1V 2NX</p>
				<p>Company number</p>
			</div>
			<div>
				<p className='mb-6'>T&C</p>
				<p>Privacy Policy</p>
			</div>
		</footer>
	);
};

export default Footer;
