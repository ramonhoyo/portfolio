"use client";
import React from 'react'
import { Box, Button, Container, Fab, Stack, Tooltip, Typography, useMediaQuery, useTheme, Zoom } from '@mui/material';
import MarkdownPreview from '@uiw/react-markdown-preview';
import InfiniteLooper from '@/components/InfiniteLooper';
import Image from 'next/image';
import SwipeableTextMobileStepper from '@/components/SwipeableViews';
import DynamicText from '@/components/DynamicText';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export type ProjectDetailsProps = {
  data: Record<string, any>
};

export default function ProjectDetails(props: ProjectDetailsProps) {
  const { description, title, subtitle, tags, imgs, externalUrl } = props.data;
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth='lg'>
      <Stack spacing={2} sx={{ p: 2 }}>
        <Stack direction='row'>
          <Stack flex={1}>
            <Typography variant={downMd ? 'h4' : 'h3'} color='primary'>{title}</Typography>
            <DynamicText variant='h5' texts={[subtitle]} ms={40} />
          </Stack>

          <Zoom unmountOnExit in={Boolean(externalUrl) && !downMd} style={{ transitionDelay: '4s' }}>
            <Button variant='outlined'
              href={externalUrl}
              sx={{
                height: 'min-content',
                m: 'auto',
                fontSize: '1.4rem',
                borderRadius: 20,
                width: 100,
              }}>
              Visit
            </Button>
          </Zoom>


        </Stack>
        <Box sx={{ mt: 2 }} />

        <Box flex={1}>
          <SwipeableTextMobileStepper imgs={imgs} height={downMd ? 200 : 400} />
        </Box>

        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <InfiniteLooper speed={100} direction='right'>
            {tags.map((tag: string, idx: number) => (
              <Tooltip title={tag} key={`${tag}-${idx}`}>
                <Image alt={tag} style={{ margin: 32, }} height={32} width={32} src={`https://cdn.simpleicons.org/${tag}/gray`} />
              </Tooltip>
            ))}
          </InfiniteLooper>
        </Box>
        <MarkdownPreview
          source={description}
          style={{
            background: theme.palette.background.default,
            color: 'black',
          }}
        />
      </Stack>

      <Zoom unmountOnExit in={downMd && Boolean(externalUrl)} style={{ transitionDelay: '4s' }}>
        <Fab
          href={externalUrl}
          color="primary"
          aria-label="visit"
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
          }} >
          <OpenInNewIcon />
        </Fab>
      </Zoom>
    </Container>
  );
}
