"use client";
import { Box, Button, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import BackendDetailsDialog from './BackendDetailsDialog';

const data = [
  {
    subject: 'TypeORM (MySQL, Postgres)',
    A: 120,
    fullMark: 150,
  },
  {
    subject: 'Mongoose (MongoDB)',
    A: 130,
    fullMark: 150,
  },
  {
    subject: 'Swagger',
    A: 86,
    fullMark: 150,
  },
  {
    subject: 'GraphQL',
    A: 99,
    fullMark: 150,
  },
  {
    subject: 'Redis',
    A: 85,
    fullMark: 150,
  },
  {
    subject: 'BullMQ',
    A: 120,
    fullMark: 150,
  },
];

export default function BackendChartComponent() {
  return (
    <ResponsiveContainer minHeight={300} width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Backend" dataKey="A" stroke={green[500]} fill={green[200]} fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
