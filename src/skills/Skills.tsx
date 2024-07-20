"use client";
import React from 'react'
import { Box, Container, Grid, Tooltip, Typography } from '@mui/material'
import InfiniteLooper from '@/components/InfiniteLooper';
import { Sacramento } from 'next/font/google';
import Image from 'next/image';
import { SkillsData } from '@/data/skills';
import SkillCard from './SkillCard';

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

const mernStack = [
  { title: 'Mongo DB', name: 'mongodb', fill: '#47A248' },
  { title: 'Express', name: 'express', fill: '#00000' },
  { title: 'React', name: 'react', fill: '#61DAFB' },
  { title: 'Node', name: 'nodedotjs', fill: '#5FA04E' },
];

const lansStack = [
  { title: 'Golang', name: 'go', fill: '#00ADD8' },
  { title: 'Typescript', name: 'typescript', fill: '#3366CC' },
  // { title: 'SQL (MySQL, Postgres, SQLite)', name: 'sqlite', fill: '#4479A1' },
  { title: 'Kotlin', name: 'kotlin', fill: '#7F52FF' },
  { title: 'C/C++', name: 'cplusplus', fill: '#00599C' },
];

const toolsStack = [
  { title: 'Neovim', name: 'Neovim', fill: '#00ADD8' },
  { title: 'Git', name: 'git', fill: '#3366CC' },
  { title: 'Linux', name: 'linux', fill: '#4479A1' },
  //  { title: 'Drawio', name: 'diagramsdotnet', fill: '#7F52FF' },
  { title: 'Docker', name: 'docker', fill: '#00599C' },
];

function IconsRendered({ icons, direction }: { icons: string[], direction: 'left' | 'right' }) {
  return (
    <InfiniteLooper speed={200} direction={direction}>
      {[...icons, ...icons, ...icons].map((it, idx) => (
        <Image
          key={`${it}-${idx}`}
          alt={it}
          height={32}
          width={32}
          style={{ margin: 32 }}
          src={`${it}/gray`}
        />
      ))}
    </InfiniteLooper>
  );
}

export default function Skills() {
  return (
    <Box id="skills" sx={{ position: 'relative' }}>
      <IconsRendered icons={SkillsData.flatMap(it => it.imgs)} direction='left' />

      <Container maxWidth="lg">
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography color='secondary' variant='h1' sx={{ ...sacramento.style, fontStyle: 'bold' }}>
            Tecnologies
          </Typography>
        </Grid>

        <Grid xs={12} sx={{ m: 2 }} />

        <Grid item xs={12} container spacing={4}>
          <Grid item xs={12} sm={6} lg={4}>
            <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
              <Typography variant="h4" color="primary">
                Main Stack
              </Typography>
            </Grid>

            <Grid container item xs={12} spacing={2} sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              {mernStack.map(it => (
                <Tooltip key={it.name} title={it.title}>
                  <Grid
                    key={it.name}
                    item
                    sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                  >
                    <Image
                      alt={it.title}
                      height="64"
                      width="64"
                      src={`https://cdn.simpleicons.org/${it.name}`}
                    />
                    <Typography variant="h5" sx={{ color: it.fill, textTransform: 'capitalize' }}>
                      {it.name.substring(0, 1)}
                    </Typography>
                  </Grid>
                </Tooltip>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} lg={4}>
            <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
              <Typography variant="h4" color="primary">
                Languages
              </Typography>
            </Grid>

            <Grid container item xs={12} spacing={2} sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              {lansStack.map(it => (
                <Tooltip key={it.name} title={it.title}>
                  <Grid key={it.name} item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      alt={it.name}
                      height="64"
                      width="64"
                      src={`https://cdn.simpleicons.org/${it.name}`}
                    />
                    <Typography variant="h5" sx={{ color: it.fill, textTransform: 'capitalize' }}>
                      {it.name.substring(0, 1)}
                    </Typography>
                  </Grid>
                </Tooltip>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} lg={4}>
            <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
              <Typography variant="h4" color="primary" >
                Tools
              </Typography>
            </Grid>

            <Grid container item xs={12} spacing={2} sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              {toolsStack.map(it => (
                <Tooltip key={it.name} title={it.title}>
                  <Grid key={it.name} item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                      alt={it.name}
                      height="64"
                      width="64"
                      src={`https://cdn.simpleicons.org/${it.name}`}
                    />
                    <Typography variant="h5" sx={{ color: it.fill, textTransform: 'capitalize' }}>
                      {it.name.substring(0, 1)}
                    </Typography>
                  </Grid>
                </Tooltip>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          {SkillsData.map((it, i) => (
            <Grid
              key={it.label}
              item
              xs={12}
              md={i === SkillsData.length - 1 && !(i % 2) ? 12 : 6}
            >
              <SkillCard data={it} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
