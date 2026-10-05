import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { JetBrains_Mono } from 'next/font/google';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import './globals.css';

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Yashasvi — Backend Engineer',
  description: 'Portfolio of Yashasvi, backend software engineer.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} dark`}>
      <body>
        <Preloader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
