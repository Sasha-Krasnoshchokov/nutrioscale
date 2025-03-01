import { headerNav } from '@/constants/staticData';

import Link from 'next/link';
import React from 'react';
import DiscountButton from './DiscountButton';
import Menu from './Menu';

const Header = () => {
	return (
		<header className='header'>
			<Link
				href={'/'}
				className='logo'></Link>

			<nav className='header-nav'>
				{headerNav.map((item) => (
					<Link
						href={item.url}
						key={item.url}
						className='w-[96px] text-center text-dark hover:text-green'>
						{item.title}
					</Link>
				))}
			</nav>

			<DiscountButton />

			<Menu />
		</header>
	);
};

export default Header;
