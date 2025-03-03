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
		</main>
	);
};

export default Landing;
