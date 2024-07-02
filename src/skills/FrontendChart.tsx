"use client";
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { pink } from '@mui/material/colors';
import { Box, Button } from '@mui/material';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

const data = [
  {
    subject: 'React, RN',
    A: 145,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Formik',
    A: 130,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'GraphQL (Apollo)',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'redux, redux-toolkit',
    A: 110,
    B: 133,
    fullMark: 150,
  },
  {
    subject: 'react-query',
    A: 145,
    B: 90,
    fullMark: 150,
  },
  {
    subject: '@mui',
    A: 120,
    B: 150,
    fullMark: 150,
  },
];

export default class FrontendChart extends PureComponent {
  render() {
    return (
      <Box>
        <ResponsiveContainer minHeight={300} width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar name="Frontend" dataKey="A" stroke={pink[500]} fill={pink[200]} fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>

        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Button endIcon={<OpenInFullIcon />}>Frontend</Button>
        </Box>
      </Box>
    );
  }
}
