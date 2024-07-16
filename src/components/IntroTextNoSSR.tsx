import { Typography } from '@mui/material'
import React from 'react'
import In from './In'

export default function IntroTextoNoSSR() {
  return (
    <Typography variant="h4" sx={{ fontSize: '2rem', zIndex: 2 }}>
      After <In>eight</In> years as a software developer <In>creating IT</In> solutions,
      I&apos;m excited and ready to <In>help you</In> turn your ideas into reality.
      <Typography sx={{ display: 'contents', fontSize: '2.5rem' }} variant="h4">
        {" "}Are you ready to <Typography sx={{ display: 'contents', fontSize: '2.5rem' }} color='primary' variant="h4">get started?</Typography>
      </Typography>
    </Typography>
  )
}
