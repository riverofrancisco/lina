import { createTheme } from '@mui/material/styles';
import { Lexend } from 'next/font/google';

const myPalette = {
  cream: '#EAC5A8',
  grey: '#9997A5',
  green: '#223A24',
  red: '#8C2F1B',
  black: '#232323',
};

const lexend = Lexend({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-lexend',
});

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#8C2F1B',
    },
    secondary: {
      main: '#223A24',
    },
    background: {
      default: '#EAC5A8',
      paper: '#8C2F1B',
    },
    text: {
      primary: '#232323',
      secondary: '#EAC5A8',
    },
  },
  typography: {
    fontFamily: 'var(--font-lexend), Arial, Helvetica, sans-serif',
  },
});

const darkTheme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'dark',
    primary: {
      main: '#EAC5A8',
    },
    secondary: {
      main: '#8C2F1B',
    },
    background: {
      default: '#232323',
      paper: '#EAC5A8',
    },
    text: {
      primary: '#EAC5A8',
      secondary: '#232323',
    },
  },
  typography: {
    fontFamily: 'var(--font-lexend), Arial, Helvetica, sans-serif',
  },
});

export { theme, darkTheme };
