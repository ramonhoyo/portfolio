"use client";
import { Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react'

export type DynamicTextProps = {
  texts: string[];
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error' | 'initial';
};

export default function DynamicText(props: DynamicTextProps) {
  const { texts, variant, color } = props;
  const [index, setIndex] = useState(0);
  const [pos, setPos] = useState(0);

  const textStacks = useMemo(() => {
    return texts.map((text) => {
      const subWords = text.split('').map((_, j) => text.substring(0, j + 1));
      return [
        ...subWords,
        subWords[subWords.length - 1],
        subWords[subWords.length - 1],
        subWords[subWords.length - 1],
        subWords[subWords.length - 1],
        subWords[subWords.length - 1],
        subWords[subWords.length - 1],
        ...subWords.reverse()
      ];
    });
  }, [texts]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pos + 1 >= textStacks[index].length) {
        setPos(0);
        setIndex(index + 1 >= textStacks.length ? 0 : index + 1);
        return;
      }
      setPos(pos + 1);
    }, 120);
    return () => clearInterval(interval);
  }, [textStacks, index, pos]);

  useEffect(() => {
    console.log('result index: ', index, 'pos: ', pos, 'textStacks: ', textStacks[index]);
  }, [index, pos, textStacks]);

  return (
    <div>
      <Typography variant={variant} color={color}>
        {textStacks[index][pos]}
      </Typography>
    </div>
  )
}
