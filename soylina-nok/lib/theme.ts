import { green, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const myPalette = {
	cream: "#EAC5A8",
	grey: "#9997A5",
	green: "#223A24",
	red: "#8C2F1B",
	black: "#232323",
}


const theme = createTheme({
  palette: {
    primary: {
      main: '#8C2F1B',
    },
    secondary: {
      main: '#223A24',
    },
    background: {
      default: '#EAC5A8',
	  paper: "#8C2F1B",
    },
    text: {
      primary: '#232323',
	  secondary: "#EAC5A8",
    },
  },
  typography: {
    fontFamily: "'Lexend', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});

const darkTheme = createTheme({
	palette: {
	  mode: "dark",
	  primary: {
		main: "#EAC5A8",
	  },
	  secondary: {
		main: "#8C2F1B",
	  },
	  background: {
		default: "#232323",
		paper: "#EAC5A8",
	  },
	  text: {
		primary: "#EAC5A8",
		secondary: "#232323",
	  },
	},
  });


export { theme, darkTheme };
