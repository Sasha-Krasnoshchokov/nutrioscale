import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home = () => {
	return (
		<div className='bg-white xl:flex'>
			<div className='relative flex flex-col items-center p-6 xl:w-[50%] min-h-[600px]'>
				<Link
					href='/'
					className='home-page-logo'
				/>
				<div className='mt-16 mb-[65px] max-w-[673px] xl:mt-0 xl:absolute xl:top-[296px] xl:left-[80px] 2xl:left-[277px]'>
					<h4 className='font-inter text-[56px] leading-[68px] font-[600] md:text-[72px] md:leading-[87.14px]'>
						Donec eros <span className='italic text-green-secondary'>justo</span> a egestas
						tristique.
					</h4>
					<p className='font-inter text-[20px] leading-[24.2px] text-dark-secondary'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed
						accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum.
					</p>
					<div className='flex flex-wrap gap-5 mt-11'>
						<Link
							href='https://www.apple.com/app-store/'
							target='_blank'
							className='markets bg-[url(/assets/icons/app-store.png)]'
						/>
						<Link
							href='https://play.google.com/store/apps'
							target='_blank'
							className='markets bg-[url(/assets/icons/google-play.png)]'
						/>
					</div>
				</div>
				<div className='flex gap-2 w-full items-center max-w-[673px] xl:absolute xl:top-[760px] xl:left-[80px] 2xl:xl:top-[740px] 2xl:left-[277px]'>
					<div className='w-[129px] h-[42px] bg-no-repeat bg-center bg-contain bg-[url(/assets/icons/avatars.png)]' />
					<div className='text-[20px] leading-[24.2px] md:text-[20px] font-inter text-dark-secondary'>
						<p>Facebook community</p>
						<p>20k members</p>
					</div>
				</div>
			</div>
			<div className='home-page-gradient'>
				<Image
					src='/assets/images/home-main-image.png'
					alt='home main image'
					width={834}
					height={1000}
					className='mx-auto'
				/>
			</div>
		</div>
	);
};

export default Home;
