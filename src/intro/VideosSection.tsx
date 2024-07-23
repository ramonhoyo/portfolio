"use client";
import { Box, Stack, Typography, Zoom } from '@mui/material'
import React, { useEffect, useState } from 'react'

const data = [
  {
    title: 'Backend Development',
    poster: "https://res.cloudinary.com/ramonhoyo/video/upload/h_256,w_276/v1721161281/porfolio/cloud.jpg",
    video: 'https://res.cloudinary.com/ramonhoyo/video/upload/v1721161281/porfolio/cloud.mp4',
  },
  {
    title: 'Frontend Development',
    poster: 'https://res.cloudinary.com/ramonhoyo/video/upload/w_256,h_266/v1721161281/porfolio/front.jpg',
    video: 'https://res.cloudinary.com/ramonhoyo/video/upload/v1721161281/porfolio/front.mp4',
  },
  {
    title: 'Blockchain Development',
    poster: 'https://res.cloudinary.com/ramonhoyo/video/upload/w_256,h_256/v1721161282/porfolio/blockchain.jpg',
    video: 'https://res.cloudinary.com/ramonhoyo/video/upload/v1721161282/porfolio/blockchain.mp4',
  },
  {
    title: 'Mobile Development',
    poster: 'https://res.cloudinary.com/ramonhoyo/video/upload/h_256,w_266/v1721161282/porfolio/app-development.jpg',
    video: 'https://res.cloudinary.com/ramonhoyo/video/upload/h_256,w_266/v1721161282/porfolio/app-development.mp4',
  },
];

export default function VideosSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const nextIndex = index + 1 < data.length ? index + 1 : 0;
      setIndex(nextIndex);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box position='absolute' left={0} right={0} bottom={0} top={0}>
      {data.map((it, idx) => (
        <Zoom key={it.title} in={index === idx} unmountOnExit >
          <Stack sx={{ position: 'absolute', left: '50%', marginLeft: '-200px' }} alignItems='center'>
            <video
              playsInline
              disableRemotePlayback
              poster={it.poster}
              src={it.video}
              autoPlay={index === idx}
              loop
              width={400}
              height={400}
              style={{ borderRadius: '50%', padding: 16, objectFit: 'cover' }}
            />
            <Typography color="primary" variant='h4'>{it.title}</Typography>
          </Stack>
        </Zoom>
      ))}
    </Box>
  )
}
