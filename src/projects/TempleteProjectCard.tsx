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
import { Box, Button, Divider, Grow, Tooltip } from '@mui/material';
import SwipeableTextMobileStepper from '@/components/SwipeableViews';
import Image from 'next/image';

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
  const { title, subtitle, tags, description, imgs, icon, onSeeMore } = props;
  const [isHover, setIsHover] = React.useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsHover(true);
  };

  const handleOnMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsHover(false);
  };

  return (
    <Card>
      <div
        onMouseEnter={handleMouseEnter} onMouseLeave={handleOnMouseLeave}
      >
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

        <CardContent
          sx={{ p: 2, maxHeight: 300, overflowY: 'hidden', position: 'relative' }}
        >
          <MarkdownPreview source={description} style={{ background: 'white', color: 'black' }} />

          <Grow in={isHover}>
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 300,
              bgcolor: 'rgba(1, 1, 1, 0.2)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Button variant='contained' onClick={onSeeMore}>View more</Button>
            </Box>
          </Grow>
        </CardContent>

        <Divider />
        <CardActions disableSpacing sx={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
          {tags.map(tag =>
            <Tooltip title={tag} key={tag}>
              <Image
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

          <Button onClick={onSeeMore} variant="contained" >View more</Button>
        </CardActions>

      </div>
    </Card>
  );
}
