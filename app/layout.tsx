import type { Metadata } from 'next';
import './globals.css';

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
			<body>{children}</body>
		</html>
	);
}
