import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import CssBaseline from '@mui/material/CssBaseline';

export const metadata: Metadata = {
  title: "Ramón Hoyo",
  description: "Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <body>
            {children}
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
