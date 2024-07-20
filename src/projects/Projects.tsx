"use client";
import React, { useState } from 'react'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import TempleteProjectCard from './TempleteProjectCard'
import ProjectDetailsDialog from './ProjectDetailsDialog';
import { Sacramento } from 'next/font/google';
import { ProjectsData } from '@/data/projects';

const sacramento = Sacramento({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

export default function Projects() {
  const [project, setProject] = useState<Record<string, any> | null>(null);

  return (
    <Container id="portfolio" sx={{ my: 2, p: 2 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography color='primary' variant='h1' sx={{ ...sacramento.style, fontStyle: 'bold' }}>Projects</Typography>
        </Grid>

        {ProjectsData.map((item, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <TempleteProjectCard
              title={item.title}
              label={item.label}
              subtitle={item.subtitle}
              tags={item.tags}
              description={item.description}
              icon={item.icon}
              imgs={item.imgs}
              onSeeMore={() => setProject(item)}
              onLike={() => null}
            />
          </Grid>
        ))}

        <Grid component={Box} item xs={12} sx={{ mt: 2, ml: 2, p: 2, justifyContent: 'center', display: 'flex' }}>
          <Typography variant='h3' color='primary' sx={{ ...sacramento.style }}>I&apos;m working on new things, they will appear soon here...</Typography>
        </Grid>
      </Grid>

      <ProjectDetailsDialog
        data={project}
        setData={setProject}
      />
    </Container>
  )
}
