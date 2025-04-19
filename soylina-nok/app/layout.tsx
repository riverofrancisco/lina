

import { EnvVarWarning } from '@/components/env-var-warning';
import HeaderAuth from '@/components/header-auth';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { hasEnvVars } from '@/utils/supabase/check-env-vars';
import { GeistSans } from 'geist/font/sans';
import { ThemeProvider } from 'next-themes';
import Link from 'next/link';
import { Lexend } from 'next/font/google';
import './globals.css';

import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { theme, darkTheme } from '@/lib/theme';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Lina Rivero',
  description: 'Soy Lina, hago música.',
  icons: {
    icon: '/favicon.ico',
  },
};

const lexend = Lexend({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-lexend',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkMode = false;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-background text-foreground ${lexend.className} antialiased`}
      >
        <MUIThemeProvider theme={isDarkMode ? darkTheme : theme}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </MUIThemeProvider>
      </body>
    </html>
  );
}
