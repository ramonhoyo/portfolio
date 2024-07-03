"use client";
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { red } from '@mui/material/colors';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Box, Button } from '@mui/material';

const data = [
  {
    subject: 'AWS',
    A: 100,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Firestore',
    A: 100,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Docker, k8s',
    A: 70,
    B: 70,
    fullMark: 150,
  },
  {
    subject: 'Github Actions',
    A: 90,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Terraform',
    A: 70,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'Linux',
    A: 70,
    B: 85,
    fullMark: 150,
  },
];

export default class DevopsChart extends PureComponent {
  render() {
    return (
      <Box>
        <ResponsiveContainer minHeight={300} width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Devops" dataKey="A" stroke={red[500]} fill={red[200]} fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>

        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Button endIcon={<OpenInFullIcon />}>Devops</Button>
        </Box>
      </Box>
    );
  }
}
