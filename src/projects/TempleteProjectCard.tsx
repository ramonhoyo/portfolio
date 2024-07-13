"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { Button, Tooltip } from '@mui/material';
import SwipeableTextMobileStepper from '@/components/SwipeableViews';

export type TempleteProjectCardProps = {
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  cover: string;
  imgs: string[];
  icon?: string;
  onSeeMore: () => void;
  onLike: () => void;
};

export default function TempleteProjectCard(props: TempleteProjectCardProps) {
  const { title, subtitle, tags, description, imgs, icon } = props;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={icon}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />

      <SwipeableTextMobileStepper imgs={imgs} />
      <CardContent sx={{ p: 2, maxHeight: 300, overflowY: 'scroll' }}>
        <MarkdownPreview source={description} style={{ background: 'white', color: 'black' }} />
      </CardContent>
      <CardActions disableSpacing sx={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
        {tags.map(tag =>
          <Tooltip title={tag} key={tag}>
            <img
              alt={tag}
              height={32}
              width={32}
              key={tag}
              style={{ padding: 4 }}
              src={`https://cdn.simpleicons.org/${tag}/`}
            />
          </Tooltip>
        )}

        <div style={{ flex: 1 }} />

        <Button>Show More</Button>
      </CardActions>
    </Card>
  );
}
