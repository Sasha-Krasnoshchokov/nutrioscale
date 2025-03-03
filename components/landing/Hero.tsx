import Image from 'next/image';
import React from 'react';

const Hero = () => {
	return (
		<section
			id='hero'
			className='relative pt-[65px] w-full h-[865px] md:pt-[100px] md:h-[900px]'>
			<p className=' flex justify-center items-center w-full h-[87px] bg-green-light font-aeonik-trial text-[20px] text-dark max-md:text-[14px] text-center max-lg:px-6'>
				Use AI to identify and record the food you weigh and log calories automatically. World&#39;s
				First Launch!
			</p>
			<div className='hero-card z-10'>
				<div className='flex flex-col gap-4'>
					<h2 className='text-[48px] leading-[48px] text-dark font-nexa font-semibold max-md:text-[32px] max-md:leading-[32px]'>
						The only kitchen scale that auto-tracks calories
					</h2>
					<p className='main-text max-md:text-[16px] max-md:leading-[22px]'>
						Lorem ipsum dolor sit amet consectetur. Enim vel pulvinar auctor id. Scelerisque in et
						molestie eget in auctor bibendum feugiat.
					</p>
					<p className='text-[36px] leading-[49.7px] text-dark font-helvetica max-md:text-[24px] max-md:leading-[32px]'>
						Get 50% discount
					</p>
					<div className='flex flex-row gap-2 max-md:flex-col'>
						<div className='flex'>
							<div className='star' />
							<div className='star' />
							<div className='star' />
							<div className='star' />
							<div className='star' />
						</div>
						<p className='main-text'>5,128+ early bird pre-orders</p>
					</div>
				</div>
				<button className='preorder-button'>PREORDER NOW</button>
			</div>
			<Image
				src={'/assets/icons/coming-soon.svg'}
				alt='hero'
				width={251}
				height={251}
				className='absolute top-[220px] right-[28px] object-contain z-10 max-lg:w-[100px] max-lg:h-[100px]'
			/>
			<Image
				src={'/assets/images/hero.png'}
				alt='hero'
				width={1920}
				height={713}
				className='absolute bottom-0 right-0 object-right object-cover h-[713px] 3xl:w-[100%]'
			/>
		</section>
	);
};

export default Hero;
