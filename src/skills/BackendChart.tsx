"use client";
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'TypeORM',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Mongoose',
    A: 130,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Swagger',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'GraphQL',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Redis',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'BullMQ',
    A: 120,
    B: 85,
    fullMark: 150,
  },
];

export default class BackendChart extends PureComponent {
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
