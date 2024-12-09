import type { Metadata } from 'next';
import { Cardo } from 'next/font/google';
import '@app/globals.css';
import Header from '@components/Header';

const cardo = Cardo({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DauntBooks | Home',
  description: 'Buy your favourite books here',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${cardo.className} w-screen`}>
        <div className="border border-black overflow-visible w-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
