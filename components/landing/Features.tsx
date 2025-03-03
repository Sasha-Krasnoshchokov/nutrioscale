import Image from 'next/image';
import React from 'react';

const Features = () => {
	return (
		<section
			id='features'
			className='px-6 pt-[60px] w-full h-[895px] flex flex-wrap gap-9 justify-center'>
			<PresentationCard
				classNames='ai-powered-camera'
				title='Track Macros & Vitamins'
				text='Nutrioscales uses the most complete ingredient database to record calories, protein, carbs, fat and micronutrients so you can track what goes in your body.'>
				<div>
					<Image
						src='/assets/icons/ai-powered-camera.svg'
						alt='ai camera'
						width={220}
						height={34}
						className='absolute top-[260px] left-[25%] w-[160px] h-[28px] object-contain sm:w-[220px] sm:h-[34px] sm:top-[185px] sm:left-[40%] lg:left-[402px]'
					/>
				</div>
			</PresentationCard>
			<div className='flex flex-wrap justify-center gap-9 1xl:flex-col'>
				<PresentationCard
					classNames='w-[100%] h-[400px] sm:w-[482px] 1xl:w-[524px]'
					title='Handsfree Calorie Tracking'
					text="Nutrioscale uses the most advanced AI enabled camera to automatically identify the food you weigh on it. No need manually log ingredients on your smartphone or remember what you've weighed.">
					<div>
						<Image
							src='/assets/icons/logo-close-up.png'
							alt='logo close up'
							width={482}
							height={186}
							className='absolute bottom-0 right-0 w-full object-contain'
						/>
					</div>
				</PresentationCard>
				<PresentationCard
					classNames='w-[100%] h-[400px] sm:w-[482px] 1xl:w-[524px]'
					title='Accurate'
					text='Nutrioscale uses the industry standard calorie databases to give you accurate calorie tracking without having to memorize ingredient weights.'>
					<div>
						<Image
							src='/assets/icons/camera-up-g.png'
							alt='camera up g'
							width={482}
							height={400}
							className='absolute bottom-0 right-0 w-full object-contain z-0'
						/>
						<Image
							src='/assets/icons/plate-shadow.svg'
							alt='plate shadow'
							width={357}
							height={169}
							className='absolute bottom-0 left-0 w-[357px] object-contain z-0'
						/>
						<Image
							src='/assets/icons/plate.png'
							alt='plate'
							width={506}
							height={329}
							className='absolute bottom-0 left-0 w-[506px] object-contain z-0'
						/>
					</div>
				</PresentationCard>
			</div>
		</section>
	);
};

export default Features;

const PresentationCard = ({
	title,
	text,
	classNames,
	children,
}: {
	title: string;
	text: string;
	classNames?: string;
	children: React.ReactNode;
}) => {
	return (
		<div className={`presentation-card ${classNames}`}>
			<div className='flex flex-col gap-2 p-4 md:gap-6 md:p-6'>
				<h5 className='presentation-card-header'>{title}</h5>
				<p className='presentation-card-text'>{text}</p>
			</div>
			{children}
		</div>
	);
};
