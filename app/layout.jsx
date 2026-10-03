import { Big_Shoulders_Display, Hanken_Grotesk } from 'next/font/google';
import './globals.css';

const display = Big_Shoulders_Display({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

const title = 'Itzfizz | Scroll-driven motion that moves the numbers';
const description = 'A scroll-driven drive-through of Itzfizz: a supercar reveals the brand as you scroll, followed by the results it delivered.';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title,
  description,
  openGraph: { title, description, type: 'website' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
