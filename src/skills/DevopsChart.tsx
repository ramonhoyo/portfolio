"use client";
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

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
    A: 90,
    B: 130,
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
      <ResponsiveContainer minHeight={200} width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="NextJS" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
