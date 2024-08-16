import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'HealthSmart',
	description:
		'HealthSmart: Your ultimate health companion app for managing wellness, tracking fitness, and accessing personalized health insights, powered by AI Flashcard technology.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
