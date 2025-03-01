import type { Metadata } from 'next';
import './globals.css';

import localFonts from 'next/font/local';

const aeonikTrial = localFonts({
	src: [
		{ path: '/fonts/aeoniktrial-regular.otf', weight: '400', style: 'normal' },
		{ path: '/fonts/aeoniktrial-light.otf', weight: '200', style: 'normal' },
		{ path: '/fonts/aeoniktrial-bold.otf', weight: '800', style: 'normal' },
	],
	variable: '--aeonik-trial',
});

const nexa = localFonts({
	src: [{ path: '/fonts/Nexa-Bold.otf', weight: '800', style: 'normal' }],
	variable: '--nexa',
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
			<body
				className={`${aeonikTrial.className} ${aeonikTrial.variable} ${nexa.className} ${nexa.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
