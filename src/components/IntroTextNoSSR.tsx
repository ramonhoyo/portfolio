import { Box, Typography } from '@mui/material'
import React from 'react'
import In from './In'


const text = [
  'After',
  'eight',
  'years as a software developer',
  'creating'
];


export default function IntroTextoNoSSR() {
  return (
    <Box sx={{ zIndex: 2 }}>
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
      &nbsp;
      <Typography sx={{ display: 'contents', fontSize: '2.5rem' }} variant="h4">
        {" "}Are you ready to
      </Typography>
      &nbsp;
      <Typography sx={{ display: 'contents', fontSize: '2.5rem' }} color='primary' variant="h4">
        get started?
      </Typography>
    </Box>
  )
}
