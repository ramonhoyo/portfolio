import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

export default function Profile() {
  return (
    <Paper sx={{ my: 2, p: 2 }} hidden>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h3">Profile</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1">
            I have a set of personal skills that facilitate teamwork, joint participation to face development challenges, and clear communication, in addition to individual values ​​such as responsibility, commitment and honesty.
            <br />
            <br />
            In my previous experience, I served as a technical lead for a blockchain startup, specifically a Centralized Exchange (CEX). I am immensely proud to have spearheaded the development of the most important modules for this company.

            <br />
            <br />
            - The custody module, which offers a standard interface for managing cryptoassets.
            <br />
            - The transactions module, which offers a standard interface for managing transactions in various blockchains such as Bitcoin, Ethererum, Tron, BSC.
            <br />
            - The internal exchanges module, which ensured 1:1 support of assets for exchange operations where the provider was the same company.
            <br />
            <br />

            As Team Leader I was responsible for other tasks such as:
            <br />
            <br />
            - Design and assignment of tasks.
            <br />
            - Code review.
            <br />
            - Evaluation and implementation of the platforms.
            <br />
            - Direct meetings with the product owner.
            <br />
          </Typography>
        </Grid>

      </Grid>
    </Paper>
  )
}
