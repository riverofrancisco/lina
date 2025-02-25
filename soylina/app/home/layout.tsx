import type { Metadata } from 'next';
import '../globals.css';
import Navbar from '@/components/ui/Navigation/Navbar';
import { Lexend } from 'next/font/google';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Box } from '@mui/material';

const lexend = Lexend({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: 'SoyLina',
  description: 'Hago música',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
  
  <main>
      <Navbar key={'navbar'} />
      <Box sx={{ mt: { xs: 8, md: 10 } }}>{children}</Box>

      <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
        <p>
          Developed by{' '}
          <a
            href="https://frivero.com.ar"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            FREDI
          </a>
        </p>
        <ThemeSwitcher />
      </footer>
    </main>
  );
}
