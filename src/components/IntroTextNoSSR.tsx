"use client"
import { Box, Zoom, Typography, Collapse } from '@mui/material'
import React, { useEffect, useState } from 'react'
import In from './In'
import DynamicText from './DynamicText';


const text = [
  'After',
  'eight',
  'years as a software developer',
  'creating'
];


export default function IntroTextoNoSSR() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 2000);
  }, []);

  return (
    <Box sx={{ zIndex: 1, mt: 2 }}>
      <Typography sx={{ fontSize: '2rem', display: 'contents' }} variant="h4">
        After
      </Typography>
      &nbsp;
      <In>eight</In>
      &nbsp;
      <Typography sx={{ fontSize: '2rem', display: 'contents' }} variant="h4">
        years as a software developer
      </Typography>
      &nbsp;
      <In>creating IT</In>
      &nbsp;
      <Typography sx={{ fontSize: '2rem', display: 'contents' }} variant="h4">
        solutions, I&apos;m excited and ready to
      </Typography>
      &nbsp;
      <In>help you</In>
      &nbsp;
      <Typography sx={{ fontSize: '2rem', display: 'contents' }} variant="h4">
        turn your ideas into reality.
      </Typography>
      <br />
      <br />

      <DynamicText
        texts={['Are you ready to get started?']}
        variant='h4'
        color='primary'
        ms={60}
      />
    </Box>
  )
}
