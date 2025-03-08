import '@/styles/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import NavBar from '@/components/NavBar';
import { inter, spaceGrotesk, roboto } from '@/app/fonts';

export const metadata: Metadata = {
	title: 'Tasking',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang='en'>
			<body
				className={`${inter.variable} ${spaceGrotesk.variable} ${roboto.variable}`}>
				<NavBar />
				<ThemeProvider themes={['light', 'dark']}>{children}</ThemeProvider>
			</body>
		</html>
	);
}
