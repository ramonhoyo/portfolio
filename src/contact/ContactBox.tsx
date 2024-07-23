"use client";
import DynamicText from '@/components/DynamicText';
import { Button, Grid, IconButton, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const data = [
  { icon: 'linkedin', link: 'https://www.linkedin.com/in/rahoyo', text: 'LinkedIn' },
  { icon: 'github', link: 'https://github.com/ramonhoyo', text: 'Github' },
  { icon: 'x', link: 'https://x.com/andreshoyodev', text: 'X (Twitter)' },
  { icon: 'stackoverflow', link: 'https://stackoverflow.com/users/8749345/andress-hoyo', text: 'Stack Overflow' },
  { icon: 'chessdotcom', link: 'https://www.chess.com/member/andresshoyo', text: 'Chess.com' },
];


export type Props = {
  size?: 'small' | 'medium' | 'large'
  hideName?: boolean;
  hideEmailButton?: boolean;
}

export default function ContactBox(props: Props) {
  const { size, hideName, hideEmailButton } = props;
  const theme = useTheme();

  let sizePx = 126;
  switch (size) {
    case 'small':
      sizePx = 64;
    case 'medium':
      sizePx = 126;
    case 'large':
      sizePx = 256;
    default:
      break;
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Image
          style={{
            objectFit: "cover",
            borderRadius: '50%',
            borderWidth: 2,
            borderColor: theme.palette.primary.main,
            borderStyle: 'solid',
          }}
          src="/rahoyo-img-no-bg.png" alt="Ramón hoyo picture" width={sizePx} height={sizePx}
        />
      </Grid>

      <Grid item xs={12} sx={{ display: hideName ? 'none' : 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h5'>Ramón Hoyo</Typography>
        <DynamicText
          texts={['Fullstack Developer', 'Software Architect']}
          variant='h6'
          loop
          reverse
        />
      </Grid>

      <Grid item xs={12} sx={{ display: hideEmailButton ? 'none' : 'flex', justifyContent: 'center' }}>
        <Button href='mailto:rahoyo@outlook.com' color='secondary' variant='contained'>Send me an email</Button>
      </Grid>

      <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Stack direction='row'>
          {data.map((item) => (
            <IconButton href={item.link} key={item.link} sx={{ borderWidth: 4 }}>
              <Image
                style={{ border: `solid 1px ${theme.palette.primary.main}`, borderRadius: 20, padding: 4 }}
                alt={item.text}
                width={36}
                height={36}
                src={`https://cdn.simpleicons.org/${item.icon}/${theme.palette.primary.main.slice(1)}`}
              />
            </IconButton>
          ))}
        </Stack>

        <Typography variant='caption' color='secondary'>Find me on social media</Typography>
      </Grid>
    </Grid>
  )
}
