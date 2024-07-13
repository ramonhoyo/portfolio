
'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#8f4c38',
    },
    secondary: {
      main: '#77574e',
    },
    background: {
      default: "#fff8f6",
      paper: '#ffffff'
    },
    error: {
      main: '#ba1a1a',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        outlined: {
          borderRadius: 16,
        },
        contained: {
          borderRadius: 16,
        },
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        root: {
          backgroundColor: '#8f4c38'
        },
        dot: {
          backgroundColor: 'lightgray',
        },
        dotActive: {
          backgroundColor: 'white',
        },
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
