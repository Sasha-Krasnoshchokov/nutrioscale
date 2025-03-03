import React from 'react';
import Header from '../Header';
import Hero from './Hero';
import Features from './Features';

const Landing = () => {
	return (
		<main className=' flex flex-col w-full min-h-screen relative'>
			<Header />
			<Hero />
			<Features />
			<section
				id='testimonials'
				className='flex justify-center m-10 mb-0 pt-20 h-[400px] bg-gray rounded-4xl '>
				<h2>Testimonials</h2>
			</section>
			<section
				id='faq'
				className='flex justify-center m-10 mb-0 pt-20 h-[400px] bg-gray rounded-4xl '>
				<h2>FAQ</h2>
			</section>
			<section
				id='blog'
				className='flex justify-center m-10 mb-0 pt-20 h-[400px] bg-gray rounded-4xl '>
				<h2>Blog</h2>
			</section>
			<section
				id='contact'
				className='flex justify-center m-10 mb-0 pt-20 h-[400px] bg-gray rounded-4xl '>
				<h2>Contact</h2>
			</section>
		</main>
	);
};

export default Landing;
