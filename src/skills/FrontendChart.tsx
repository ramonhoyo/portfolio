"use client";
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

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
