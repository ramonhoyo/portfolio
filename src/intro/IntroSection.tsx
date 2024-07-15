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

const sacramento = Sacramento({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});


const mernStack = [
  { title: 'Mongo DB', name: 'mongodb', fill: '#47A248' },
  { title: 'Express', name: 'express', fill: '#00000' },
  { title: 'React', name: 'react', fill: '#61DAFB' },
  { title: 'Node', name: 'nodedotjs', fill: '#5FA04E' },
];

const softStack = [
  { title: 'Golang', name: 'go', fill: '#00ADD8' },
  { title: 'htmx', name: 'htmx', fill: '#3366CC' },
  { title: 'MySQL', name: 'mysql', fill: '#4479A1' },
  { title: 'Postgre SQL', name: 'postgresql', fill: '#4169E1' },
];

function In({ children }: any) {
  return <Typography variant="h5" color='primary' sx={{ display: 'contents' }}>{children}</Typography>
}

export default function IntroSection() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ bgcolor: 'white', mt: 0 }}>
      <Container sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <Typography variant="h4" color="primary">
                  Software Architect & Fullstack
                </Typography>

                <Stack direction='row' spacing={1}>
                  <Chip icon={<MyLocationIcon color='primary' />} label="Mérida, Venezuela" variant="outlined" />
                  <Chip icon={<RecordVoiceOverIcon color='primary' />} label="B1 English" variant="outlined" />
                  <Chip icon={<ElderlyIcon color='primary' />} label="+7 years" variant="outlined" />
                </Stack>

                <br />

                <Typography variant="h5">
                  <In>Hey!</In> I&apos;m Ramón Hoyo, a software architect and a fullstack developer with <In>over 7 years</In> of experience creating IT solutions that
                  generate impact on user&apos;s life. I believe that building <In>awesome solutions</In> comes from loving what you do
                  and putting in the hard work to stay <In>competitive in a growing field</In>. I know I’ve got more to learn,
                  but I&apos;m dedicated to <In>improving every day!</In>
                </Typography>

                <br />
                <br />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography color='primary' variant="h4" sx={{ ...sacramento.style }}>
                    Ramón Hoyo
                  </Typography>

                  <Button
                    sx={{ height: 'min-content' }}
                    onClick={() => setExpanded(!expanded)}
                    variant="outlined"
                    color='secondary'
                  >
                    {expanded ? 'Read less' : 'Read more'}
                  </Button>
                </Box>
              </Grid>

              {isXs && (
                <Grid item xs={12} component={Collapse} in={expanded} sx={{ pt: 2 }}>
                  <IntroAccordion />
                </Grid>
              )}

              <Grid item xs={12} md={6} sx={{ alignItems: 'center', justifyContent: 'center', mt: 2, display: 'flex', }}>
                <ContactBox size="large" hideName />
              </Grid>
            </Grid>
          </Grid>

          {!isXs && (
            <Grid item xs={12} component={Collapse} in={expanded}>
              <IntroAccordion />
            </Grid>
          )}

          <Grid item xs={12} sx={{ mt: 4 }} />

          <Grid item xs={12} container spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                <Typography style={{ ...sacramento.style }} variant="h2" color="primary">
                  Main Stack
                </Typography>
              </Grid>

              <Grid container item xs={12} spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                {mernStack.map(it => (
                  <Tooltip key={it.name} title={it.title}>
                    <Grid
                      key={it.name}
                      item
                      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                    >
                      <img
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

            <Grid item xs={12} md={6}>
              <Grid item xs={12}>
                <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex' }}>
                  <Typography style={{ ...sacramento.style }} variant="h2" color="primary">
                    Soft Skills
                  </Typography>
                </Grid>

                <Grid container item xs={12} spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                  {softStack.map(it => (
                    <Tooltip key={it.name} title={it.title}>
                      <Grid key={it.name} item sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img
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

              <Grid item xs={12} sx={{ mt: 4 }} />
            </Grid>
          </Grid>
        </Grid>

        <IntroDetailsDialog open={open} setOpen={setOpen} />
      </Container>
    </Box>

  );
}
