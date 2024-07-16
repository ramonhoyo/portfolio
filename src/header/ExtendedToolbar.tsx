
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const data = [
  {
    title: 'About me',
    href: '#about-me'
  },
  {
    title: 'Skills',
    href: '#skills',
  },
  {
    title: 'Portfolio',
    href: '#portfolio',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

function ResponsiveAppBar() {

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
            }}
          >
            @rahoyo
          </Typography>

          <Typography
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            @rahoyo
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {data.map((page) => (
              <Button
                key={page.href}
                href={page.href}
                onClick={() => { }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <Button href='/cv.pdf' sx={{ color: 'white' }} variant='outlined'>Download CV</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
