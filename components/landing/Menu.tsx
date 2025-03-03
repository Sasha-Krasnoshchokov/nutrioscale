'use client';
import { headerNav } from '@/constants/staticData';
import Link from 'next/link';
import { useState } from 'react';

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isHandled, setIsHandled] = useState(false);

	const handleButton = () => {
		setIsHandled(true);
		setIsOpen(!isOpen);
	};

	return (
		<div
			className='lg:hidden flex'
			role='menu'
			aria-roledescription='menu'>
			<button
				className='w-6 h-6 bg-[url(/assets/icons/menu-closed.svg)] z-100'
				onClick={handleButton}></button>

			{isHandled && (
				<div className={`menu ${isOpen ? 'animate-menu-open' : 'animate-menu-close'}`}>
					<nav className='flex flex-col gap-10'>
						{headerNav.map((item) => (
							<Link
								href={item.url}
								key={item.url}
								className='w-[96px] text-start text-dark hover:text-green'>
								{item.title}
							</Link>
						))}
					</nav>
				</div>
			)}
		</div>
	);
};

export default Menu;
