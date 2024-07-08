"use client";
import React from 'react'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import TempleteProjectCard from './TempleteProjectCard'


const data = [
  {
    title: 'UPIITA Parking',
    subtitle: 'This is parking application for a final degree project at UPIITA-IPN, Mexico',
    tags: ['git', 'react', 'javascript', 'stripe', 'firebase', 'googlemaps'],
    description: `
Showcase react-native application, for allowing parking operation such as

- Register vehicules.
- Get into a parking.
- Select a parking slot.
- Confirm slot.
- Compute payment based on entry date and hourly rate price.
- Perform a payment (Testing) using Stripe platform.
- Documentation: In spanish (requested by client).
`,
    cover: 'https://picsum.photos/seed/project-1/300/200',
    imgs: [
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/1.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/2.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/3.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/4.jpg?raw=true',
    ]
  },
  {
    title: 'Project 2',
    subtitle: 'Subtitle 2',
    tags: ['tag1', 'tag2'],
    description: 'Description 2',
    cover: 'https://picsum.photos/seed/project-2/300/200',
    imgs: [
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/1.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/2.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/3.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/4.jpg?raw=true',
    ]
  },
  {
    title: 'Project 3',
    subtitle: 'Subtitle 3',
    tags: ['tag1', 'tag3'],
    description: 'Description 3',
    cover: 'https://picsum.photos/seed/project-3/300/200',
    imgs: [
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/1.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/2.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/3.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/4.jpg?raw=true',
    ]
  },
  {
    title: 'Project 1',
    subtitle: 'Subtitle 1',
    tags: ['tag1', 'tag2'],
    description: 'Description 1',
    cover: 'https://picsum.photos/seed/project-1/300/200',
    imgs: [
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/1.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/2.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/3.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/4.jpg?raw=true',
    ]
  },
  {
    title: 'Project 2',
    subtitle: 'Subtitle 2',
    tags: ['tag1', 'tag2'],
    description: 'Description 2',
    cover: 'https://picsum.photos/seed/project-2/300/200',
    imgs: [
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/1.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/2.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/3.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/4.jpg?raw=true',
    ]
  },
  {
    title: 'Project 3',
    subtitle: 'Subtitle 3',
    tags: ['tag1', 'tag3'],
    description: 'Description 3',
    cover: 'https://picsum.photos/seed/project-3/300/200',
    imgs: [
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/1.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/2.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/3.jpg?raw=true',
      'https://github.com/ramonhoyo/parking-android/blob/main/screenshots/4.jpg?raw=true',
    ]
  },

];

export default function Projects() {
  return (
    <Container sx={{ my: 2, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h3'>Projects</Typography>
        </Grid>

        {data.map((item, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <TempleteProjectCard
              title={item.title}
              subtitle={item.subtitle}
              tags={item.tags}
              description={item.description}
              imgs={item.imgs}
              cover={item.cover}
              onSeeMore={() => null}
              onLike={() => null}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
