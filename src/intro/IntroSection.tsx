"use client";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ElderlyIcon from '@mui/icons-material/Elderly';
import { Box, Button, Chip, Collapse, Container, Grid, Stack, Tooltip, Typography, useMediaQuery, useTheme, Zoom } from "@mui/material";
import IntroDetailsDialog from "./IntroDetailsDialog";
import { useState } from "react";
import IntroAccordion from "./IntroAccordion";
import Image from 'next/image';
import VideosSection from './VideosSection';
import DynamicText from '@/components/DynamicText';
import dynamic from 'next/dynamic'

const IntroSSRText = dynamic(() => import('../components/IntroTextNoSSR'), { ssr: false })

export default function IntroSection() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down('md'))
  const isSm = useMediaQuery(theme.breakpoints.only('sm'))

  return (
    <Box sx={{ bgcolor: 'white', mt: 0 }}>
      <Container sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <DynamicText variant='h2' color='primary' texts={["Software Architect", "Fullstack Developer"]} />

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
                      zIndex: 1,
                      width: '100%',
                      position: 'absolute',
                      top: downMd ? 128 : 96,
                    }}
                  />

                  <IntroSSRText />
                  <br />

                </Grid>
                <Stack spacing={2} direction='row' justifyContent='flex-end'>
                  <Zoom in={true} style={{ transitionDelay: '1000ms' }}>
                    <Button
                      sx={{ height: 'min-content' }}
                      onClick={() => setExpanded(!expanded)}
                      href='mailto:rahoyo@outlook.com'
                      variant="contained"
                      color='secondary'
                    >
                      Lets connect
                    </Button>
                  </Zoom>
                </Stack>
              </Grid>

              <Grid item xs={12} md={6} sx={{ mt: isSm ? 64 : downMd ? 32 : 16, position: 'relative' }}>
                <Box sx={{ height: 450 }} />
                <VideosSection />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{ mt: downMd ? 0 : 16 }}>
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
    </Box >

  );
}
