import { Inter, Space_Grotesk, Roboto } from 'next/font/google';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
	variable: '--font-space-grotesk',
	subsets: ['latin'],
});

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
});

export { inter, spaceGrotesk, roboto };
