"use client";
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { red } from '@mui/material/colors';

const data = [
  { subject: 'AWS', A: 100 },
  { subject: 'Firestore', A: 100 },
  { subject: 'Docker, k8s', A: 70 },
  { subject: 'Github Actions', A: 90 },
  { subject: 'Terraform', A: 70 },
  { subject: 'Linux', A: 70 },
];

export default function DevopsRadarComponent() {
  return (
    <ResponsiveContainer minHeight='20rem' width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Frontend" dataKey="A" stroke={red[500]} fill={red[200]} fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
