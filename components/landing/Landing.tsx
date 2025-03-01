import React from 'react';
import Header from '../Header';
import Hero from './Hero';

const Landing = () => {
	return (
		<main className=' flex flex-col w-full min-h-screen relative'>
			<Header />
			<Hero />
		</main>
	);
};

export default Landing;
