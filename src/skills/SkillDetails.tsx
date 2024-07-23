"use client";
import { Box, Container, Typography, useTheme } from '@mui/material'
import React from 'react'
import Image from 'next/image';
import SkillChartComponent from './SkillChartComponent';
import InfiniteLooper from '@/components/InfiniteLooper';
import MarkdownPreview from '@uiw/react-markdown-preview';

export type Props = {
  skill: Record<string, any>;
};

export default function SkillDetails({ skill }: Props) {
  const theme = useTheme();

  return (
    <Container maxWidth='lg'>
      <Typography variant="h2" color='primary'>
        {skill.subtitle}
      </Typography>

      <Box sx={{ mt: 4 }} />
      <SkillChartComponent
        data={skill.chart.data}
        strokeColor={skill.chart.strokeColor}
        fillColor={skill.chart.fillColor}
      />

      <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
        <InfiniteLooper speed={200} direction='left'>
          {skill.imgs.map((it: any, idx: any) => (
            <Image
              key={`${it}-${idx}`}
              alt={it}
              height={32}
              width={32}
              style={{ margin: 32 }}
              src={it + '/' + theme.palette.primary.main.slice(1)}
            />
          ))}
        </InfiniteLooper>
      </Box>

      <Box sx={{ p: 2 }}>
        <MarkdownPreview
          style={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          }}
          source={skill.description}
        />
      </Box>
    </Container>
  )
}
