"use client";
import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { pink } from '@mui/material/colors';

const data = [
  { subject: 'React, RN', A: 145 },
  { subject: 'Formik', A: 130 },
  { subject: 'GraphQL (Apollo)', A: 86 },
  { subject: 'redux, redux-toolkit', A: 110 },
  { subject: 'react-query', A: 145 },
  { subject: '@mui', A: 120 },
];

export default class FrontendRadarComponent extends PureComponent {
  render() {
    return (
      <ResponsiveContainer minHeight={300} width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Frontend" dataKey="A" stroke={pink[500]} fill={pink[200]} fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
