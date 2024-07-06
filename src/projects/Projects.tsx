"use client";
import React from 'react'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import TempleteProjectCard from './TempleteProjectCard'


const data = [
  {
    title: 'Project 1',
    subtitle: 'Subtitle 1',
    tags: ['tag1', 'tag2'],
    description: 'Description 1',
    cover: 'https://picsum.photos/seed/project-1/300/200',
  },
  {
    title: 'Project 2',
    subtitle: 'Subtitle 2',
    tags: ['tag1', 'tag2'],
    description: 'Description 2',
    cover: 'https://picsum.photos/seed/project-2/300/200',
  },
  {
    title: 'Project 3',
    subtitle: 'Subtitle 3',
    tags: ['tag1', 'tag3'],
    description: 'Description 3',
    cover: 'https://picsum.photos/seed/project-3/300/200',
  },
  {
    title: 'Project 1',
    subtitle: 'Subtitle 1',
    tags: ['tag1', 'tag2'],
    description: 'Description 1',
    cover: 'https://picsum.photos/seed/project-1/300/200',
  },
  {
    title: 'Project 2',
    subtitle: 'Subtitle 2',
    tags: ['tag1', 'tag2'],
    description: 'Description 2',
    cover: 'https://picsum.photos/seed/project-2/300/200',
  },
  {
    title: 'Project 3',
    subtitle: 'Subtitle 3',
    tags: ['tag1', 'tag3'],
    description: 'Description 3',
    cover: 'https://picsum.photos/seed/project-3/300/200',
  },

];

export default function Projects() {
  return (
    <Container sx={{ my: 2, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h3'>Projects</Typography>
        </Grid>

        {data.map((item) => (
          <Grid item xs={12} md={4} key={item.title}>
            <TempleteProjectCard
              title={item.title}
              subtitle={item.subtitle}
              tags={item.tags}
              description={item.description}
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
