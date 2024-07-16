"use client";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ElderlyIcon from '@mui/icons-material/Elderly';
import ContactBox from "@/contact/ContactBox";
import { Box, Button, Chip, Collapse, Container, Grid, Stack, Tooltip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Sacramento } from 'next/font/google';
import IntroDetailsDialog from "./IntroDetailsDialog";
import { useState } from "react";
import IntroAccordion from "./IntroAccordion";
import Image from 'next/image';
import In from '@/components/In';
import InfiniteLooper from '@/components/InfiniteLooper';

const sacramento = Sacramento({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

const imgs = [
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/1.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/2.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/3.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/4.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/5.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/6.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/7.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/8.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/9.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/10.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/11.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/12.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/13.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/14.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/15.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/16.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/17.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/18.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/19.jpg?raw=true',
  'https://github.com/ramonhoyo/portfolio-screenshots/blob/main/bspay/20.jpg?raw=true',
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
  { title: 'SQL (MySQL, Postgres, SQLite)', name: 'sqlite', fill: '#4479A1' },
  { title: 'Kotlin', name: 'kotlin', fill: '#7F52FF' },
  { title: 'C/C++', name: 'cplusplus', fill: '#00599C' },
];

const toolsStack = [
  { title: 'Neovim', name: 'Neovim', fill: '#00ADD8' },
  { title: 'Git', name: 'git', fill: '#3366CC' },
  { title: 'Linux', name: 'linux', fill: '#4479A1' },
  { title: 'Drawio', name: 'diagramsdotnet', fill: '#7F52FF' },
  { title: 'Docker', name: 'docker', fill: '#00599C' },
];
export default function IntroSection() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ bgcolor: 'white', mt: 0 }}>
      <Container sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" color="primary">
                  Software Architect & Fullstack
                </Typography>

                <Stack direction='row' spacing={1}>
                  <Chip icon={<MyLocationIcon color='primary' />} label="Mérida, Venezuela" variant="outlined" />
                  <Chip icon={<RecordVoiceOverIcon color='primary' />} label="B1 English" variant="outlined" />
                  <Chip icon={<ElderlyIcon color='primary' />} label="+7 years" variant="outlined" />
                </Stack>

                <br />
                <br />

                <Grid item xs={12} sx={{
                  position: 'relative',
                  zIndex: 0,
                  justifyContent: 'center',
                  display: 'flex',
                }}>
                  <Image
                    alt="foo"
                    width={0}
                    height={500}
                    sizes='100vw'
                    src="/art/03.svg"
                    style={{
                      width: '100%',
                      position: 'absolute',
                      top: 64,
                    }}
                  />

                  <Typography variant="h4" sx={{ fontSize: '2rem', zIndex: 2 }}>
                    After <In>eight</In> years as a software developer <In>creating IT</In> solutions,
                    I'm excited and ready to <In>help you</In> turn your ideas into reality.
                    <Typography sx={{ display: 'contents', fontSize: '2.5rem' }} variant="h4">
                      {" "}Are you ready to <Typography sx={{ display: 'contents', fontSize: '2.5rem' }} color='primary' variant="h4">get started?</Typography>
                    </Typography>
                  </Typography>

                  <br />


                </Grid>
                <Stack spacing={2} direction='row' justifyContent='flex-end'>
                  <Button
                    sx={{ height: 'min-content' }}
                    onClick={() => setExpanded(!expanded)}
                    variant="contained"
                    color='primary'
                  >
                    I'm ready
                  </Button>
                </Stack>
              </Grid>

              <Grid sx={{ display: 'none' }} item md={6} xs={12} container spacing={4}>
                <Grid item xs={12}>
                  <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Typography variant="h2" color="primary">
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

                <Grid item xs={12}>
                  <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Typography variant="h2" color="primary">
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


                <Grid item xs={12}>
                  <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Typography variant="h2" color="primary" >
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
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{ mt: 32 }}>
            <IntroAccordion />
          </Grid>
          <Grid item xs={12} md={5} container spacing={2}>
            <Grid item xs={12} component={Collapse} in={expanded} sx={{ pt: 2 }}>
            </Grid>
            <Grid item xs={12} sx={{ mt: 4 }} />
          </Grid>
        </Grid>

        <IntroDetailsDialog open={open} setOpen={setOpen} />
      </Container>
    </Box>

  );
}
