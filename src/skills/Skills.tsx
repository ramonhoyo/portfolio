"use client";
import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import BackendChart from './BackendChart'
import FrontendChart from './FrontendChart'
import DevopsSkills from './DevopsSkills';
import InfiniteLooper from '@/components/InfiniteLooper';
import { Sacramento } from 'next/font/google';
import Image from 'next/image';

const sacramento = Sacramento({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

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
    <InfiniteLooper speed={200} direction={direction}>
      {[...icons, ...icons, ...icons].map((it, idx) => (
        <Image
          key={it}
          alt={it}
          height={32}
          width={32}
          style={{ margin: 32 }}
          src={`https://cdn.simpleicons.org/${it}/${Math.random() > 0.9 ? '' : 'gray'}`}
        />
      ))}
    </InfiniteLooper>
  );
}

export default function Skills() {
  return (
    <Box sx={{ position: 'relative' }}>
      <IconsRendered icons={[...backendIcons, ...frontEndIcons, ...devOpsIcons]} direction='left' />

      <Container maxWidth="lg">
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography color='primary' variant='h1' sx={{ ...sacramento.style, fontStyle: 'bold' }}>
            Tecnologies
          </Typography>
        </Grid>

        <Grid container spacing={4}>
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
