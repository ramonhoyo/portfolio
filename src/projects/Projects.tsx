import React from 'react'
import Image from 'next/image'
import { Grid, Paper, Typography } from '@mui/material'

export default function Projects() {
  return (
    <Paper sx={{ my: 2, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h3'>Projects</Typography>
        </Grid>
        <Grid item xs={12}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Image src="/in_development.jpg" alt="In Development" width={800} height={500} />
            <h3>Under Development...</h3>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}
