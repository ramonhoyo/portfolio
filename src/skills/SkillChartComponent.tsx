"use client";
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

export type Props = {
  data: any[];
  fillColor: string;
  strokeColor: string;
}

export default function SkillChartComponent(props: Props) {
  const { data, fillColor, strokeColor } = props;
  return (
    <ResponsiveContainer minHeight='20rem' width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" domain={[0, 100]} />
        <PolarRadiusAxis />
        <Tooltip />
        <Radar name="Backend" dataKey="A"
          stroke={strokeColor} fill={fillColor} fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
