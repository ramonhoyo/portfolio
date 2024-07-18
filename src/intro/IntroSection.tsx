"use client";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ElderlyIcon from '@mui/icons-material/Elderly';
import { Box, Button, Chip, Collapse, Container, Grid, Stack, useMediaQuery, useTheme, Zoom } from "@mui/material";
import IntroDetailsDialog from "./IntroDetailsDialog";
import { useState } from "react";
import IntroAccordion from "./IntroAccordion";
import Image from 'next/image';
import VideosSection from './VideosSection';
import DynamicText from '@/components/DynamicText';
import IntroTextNoSSR from '@/components/IntroTextNoSSR';

export default function IntroSection() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box sx={{ bgcolor: 'white', mt: 0 }}>
      <Container sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} md={6}>
                <DynamicText
                  reverse
                  loop
                  variant='h2'
                  color='primary'
                  texts={["Software Architect", "Fullstack Developer"]}
                  adornment
                />

                <Stack direction='row' spacing={1}>
                  <Chip icon={<MyLocationIcon color='primary' />} label="Mérida, Venezuela" variant="outlined" />
                  <Chip icon={<RecordVoiceOverIcon color='primary' />} label="B1 English" variant="outlined" />
                  <Chip icon={<ElderlyIcon color='primary' />} label="+7 years" variant="outlined" />
                </Stack>

                <IntroTextNoSSR />
                <Image
                  alt="main picture"
                  width={0}
                  priority={true}
                  height={500}
                  sizes='100vw'
                  src="https://res.cloudinary.com/ramonhoyo/image/upload/w_900/h_800/v1721161282/porfolio/03.png"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  position: 'relative',
                  mt: downMd ? 2 : 16,
                }}
              >
                <Box sx={{ height: 450 }} />
                <VideosSection />

                <Stack
                  spacing={2}
                  direction='row'
                  justifyContent='center'
                  sx={{
                    mt: 4,
                    display: { xs: 'none', sm: 'flex' }
                  }}
                >
                  <Zoom in={true} style={{ transitionDelay: '3s' }}>
                    <Button
                      sx={{ height: 'min-content' }}
                      onClick={() => setExpanded(!expanded)}
                      href='mailto:rahoyo@outlook.com'
                      variant="contained"
                    >
                      Let&apos;s connect
                    </Button>
                  </Zoom>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sx={{ mt: downMd ? 2 : 8 }}>
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
