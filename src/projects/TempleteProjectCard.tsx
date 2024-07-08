"use client";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { Label } from 'recharts';
import { Button, Chip, Tooltip } from '@mui/material';
import SwipeableTextMobileStepper from '@/components/SwipeableViews';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export type TempleteProjectCardProps = {
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  cover: string;
  imgs: string[];
  onSeeMore: () => void;
  onLike: () => void;
};

export default function TempleteProjectCard(props: TempleteProjectCardProps) {
  const { title, subtitle, tags, description, imgs, cover, onSeeMore, onLike } = props;

  const handleOpen = () => {
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
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
