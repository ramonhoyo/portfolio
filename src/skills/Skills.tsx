import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import BackendChart from './BackendChart'
import FrontendChart from './FrontendChart'
import DevopsChart from './DevopsChart'

export default function Skills() {
  return (
    <Paper sx={{ my: 2, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h3'>Skills</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <BackendChart />
        </Grid>

        <Grid item xs={12} md={6}>
          <FrontendChart />
        </Grid>

        <Grid item xs={12}>
          <DevopsChart />
        </Grid>
      </Grid>
    </Paper>
  )
}
