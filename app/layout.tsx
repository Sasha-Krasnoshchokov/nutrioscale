import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import localFonts from 'next/font/local';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const aeonikTrial = localFonts({
	src: [
		{ path: '/fonts/aeoniktrial-regular.otf', weight: '400', style: 'normal' },
		{ path: '/fonts/aeoniktrial-light.otf', weight: '200', style: 'normal' },
		{ path: '/fonts/aeoniktrial-bold.otf', weight: '800', style: 'normal' },
	],
	variable: '--font-aeonik-trial',
});

const nexa = localFonts({
	src: [{ path: '/fonts/Nexa-Bold.otf', weight: '800', style: 'normal' }],
	variable: '--font-nexa',
});

export const metadata: Metadata = {
	title: 'Nutrioscale',
	description:
		'The scale makes calorie tracking effortless by automatically recognizing the ingredients you weigh.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} ${aeonikTrial.variable} ${nexa.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
