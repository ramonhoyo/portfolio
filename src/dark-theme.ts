
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
      main: '#ffb5a0',
    },
    secondary: {
      main: '#e7bdb2',
    },
    background: {
      default: "#1a110f",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          transform: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
