"use client";
import { Box, Stack, Typography, Zoom } from '@mui/material'
import React, { useCallback, useEffect, useRef, useState } from 'react'

const len = 4;

export default function VideosSection() {
  const [index, setIndex] = useState(0);
  const ref1 = useRef<HTMLVideoElement>(null);
  const ref2 = useRef<HTMLVideoElement>(null);
  const ref3 = useRef<HTMLVideoElement>(null);
  const ref4 = useRef<HTMLVideoElement>(null);

  const handleInterval = () => {
    console.log('handle interval called, index: ', index);
    const nextIndex = index + 1 < len ? index + 1 : 0;
    ref1?.current?.pause();
    ref2?.current?.pause();
    ref2?.current?.pause();
    ref2?.current?.pause();
    switch (index) {
      case 0:
        ref1?.current?.play();
        break;
      case 1:
        ref2?.current?.play();
        break;
      case 2:
        ref3?.current?.play();
        break;
      case 3:
        ref3?.current?.play();
        break;
    }
    setIndex(nextIndex);
  };

  useEffect(() => {
    setTimeout(() => handleInterval(), 5000);
  }, [handleInterval]);

  return (
    <Box position='absolute' left={0} right={0} bottom={0} top={0}>
      <Zoom in={index === 0} unmountOnExit >
        <Stack sx={{ position: 'absolute', left: '50%', marginLeft: '-200px' }} alignItems='center'>
          <video ref={ref1} src='/art/app-development.mp4' autoPlay={index === 0} loop width={400} height={400}></video>
          <Typography color="primary" variant='h4'>Mobile Development</Typography>
        </Stack>
      </Zoom>
      <Zoom in={index === 1} unmountOnExit >
        <Stack sx={{ position: 'absolute', left: '50%', marginLeft: '-200px' }} alignItems='center'>
          <video ref={ref2} src='/art/blockchain.mp4' autoPlay={index === 1} loop width={400} height={400}></video>
          <Typography color="primary" variant='h4'>Blockchain Development</Typography>
        </Stack>
      </Zoom>
      <Zoom in={index === 2} unmountOnExit >
        <Stack sx={{ position: 'absolute', left: '50%', marginLeft: '-200px' }} alignItems='center'>
          <video ref={ref3} src='/art/cloud.mp4' autoPlay={index === 1} loop width={400} height={400}></video>
          <Typography color="primary" variant='h4'>Backend Development</Typography>
        </Stack>
      </Zoom>
      <Zoom in={index === 3} unmountOnExit >
        <Stack sx={{ position: 'absolute', left: '50%', marginLeft: '-200px' }} alignItems='center'>
          <video ref={ref4} src='/art/front.mp4' autoPlay={index === 2} loop width={400} height={400}></video>
          <Typography color="primary" variant='h4'>Frontend Development</Typography>
        </Stack>
      </Zoom>
    </Box>
  )
}
