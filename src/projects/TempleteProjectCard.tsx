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
import { Button, Divider, Tooltip, useTheme } from '@mui/material';
import SwipeableTextMobileStepper from '@/components/SwipeableViews';
import Image from 'next/image';
import Link from 'next/link';

export type TempleteProjectCardProps = {
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  label: string;
  imgs: string[];
  icon?: string;
  onSeeMore: () => void;
  onLike: () => void;
};

export default function TempleteProjectCard(props: TempleteProjectCardProps) {
  const { title, subtitle, tags, description, imgs, icon, label } = props;
  const [isHover, setIsHover] = React.useState(false);
  const theme = useTheme();

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsHover(true);
  };

  const handleOnMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsHover(false);
  };

  return (
    <Card elevation={isHover ? 24 : 0} variant='outlined'>
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
          sx={{
            p: 2,
            maxHeight: 250,
            overflowY: 'hidden',
            position: 'relative',
            maskImage: 'linear-gradient(to bottom,black 10%,transparent 100%)',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <MarkdownPreview
            source={description}
            style={{
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
            }}
          />
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
                src={`https://cdn.simpleicons.org/${tag}/${theme.palette.mode === 'dark' ? 'white' : ''}`}
              />
            </Tooltip>
          )}

          <div style={{ flex: 1 }} />

          <Button
            variant='outlined'
            LinkComponent={Link}
            href={`/projects/${label}`}
          >
            Details
          </Button>
        </CardActions>
      </div>
    </Card >
  );
}
