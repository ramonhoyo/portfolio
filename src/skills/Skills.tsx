"use client";
import React from 'react'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import BackendChart from './BackendChart'
import FrontendChart from './FrontendChart'
import DevopsSkills from './DevopsSkills';
import InfiniteLooper from '@/components/InfiniteLooper';
import { dir } from 'console';

const frontEndIcons = [
  "formik",
  "reactquery",
  "mui",
  "react",
  "graphql",
  "typescript",
  "redux",
];

const devOpsIcons = [
  "github",
  "kubernetes",
  "amazonwebservices",
  "docker",
  "googlecloud",
  "terraform",
  "linux",
];

const backendIcons = [
  "swagger",
  "redis",
  "mongodb",
  "nestjs",
  "graphql",
  "typescript",
  "typeorm",
];


function IconsRendered({ icons, direction }: { icons: string[], direction: 'left' | 'right' }) {
  return (
    <InfiniteLooper speed={100} direction={direction}>
      {[...icons, ...icons, ...icons].map((it, idx) => (
        <img
          key={it}
          alt={it}
          height={64}
          width={64}
          style={{ margin: 32 }}
          src={`https://cdn.simpleicons.org/${it}/${Math.random() > 0.7 ? '' : 'gray'}`}
        />
      ))}
    </InfiniteLooper>
  );
}

export default function Skills() {
  return (
    <Box>
      <Box sx={{ position: 'absolute' }}>
        <IconsRendered icons={backendIcons} direction='left' />
        <IconsRendered icons={frontEndIcons} direction='right' />
        <IconsRendered icons={devOpsIcons} direction='left' />
        <IconsRendered icons={frontEndIcons} direction='right' />
        <IconsRendered icons={backendIcons} direction='left' />
        <IconsRendered icons={backendIcons} direction='right' />
      </Box>


      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ my: 4 }}>
          <Grid item xs={12} md={6}>
            <BackendChart />
          </Grid>

          <Grid item xs={12} md={6}>
            <FrontendChart />
          </Grid>

          <Grid item xs={12}>
            <DevopsSkills />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
