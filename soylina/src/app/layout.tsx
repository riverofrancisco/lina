import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import './globals.css';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { theme, darkTheme } from '@/config/theme';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

const lexend = Lexend({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Lina Rivero',
  description: 'Soy Lina, hago música.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDarkMode = true;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.className}`}>
        <MUIThemeProvider theme={isDarkMode ? darkTheme : theme}>
          <CssBaseline />
          {children}
        </MUIThemeProvider>
      </body>
    </html>
  );
}
