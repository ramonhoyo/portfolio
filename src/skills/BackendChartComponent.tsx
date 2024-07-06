"use client";
import { green } from '@mui/material/colors';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { subject: 'TypeORM (MySQL, Postgres)', A: 80 },
  { subject: 'Mongoose', A: 85 },
  { subject: 'Swagger', A: 90 },
  { subject: 'GraphQL', A: 75 },
  { subject: 'Redis', A: 80 },
  { subject: 'BullMQ', A: 80 },
];

export default function BackendChartComponent() {
  return (
    <ResponsiveContainer minHeight={300} width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" domain={[0, 100]} />
        <PolarRadiusAxis />
        <Tooltip />
        <Radar name="Backend" dataKey="A" stroke={green[500]} fill={green[200]} fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
