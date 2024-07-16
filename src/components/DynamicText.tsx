"use client";
import { Grow, Typography } from '@mui/material';
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

  const longestTextIdx = useMemo(() => {
    let idx = -1;
    texts.forEach((text, i) => {
      if (idx === -1) {
        idx = i;
        return;
      }
      if (text.length > texts[idx].length) {
        idx = i;
      }
    });
    return idx;
  }, [texts]);

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

  return (
    <div style={{ position: 'relative' }}>
      <Typography sx={{ opacity: 0 }} variant={variant} color={color}>
        {longestTextIdx !== -1 ? texts[longestTextIdx] : ''}
      </Typography>
      <Typography
        variant={variant}
        color={color}
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 0,
        }}
      >
        {textStacks[index][pos]}
      </Typography>
    </div>
  )
}
