"use client";
import * as React from 'react';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));


const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const sections = [
  {
    id: 'who-am-i',
    title: 'How am I',
    subtitle: 'a brief description about me',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id sapien pretium, dapibus metus id, tristique metus. Sed et lectus ullamcorper, malesuada lacus eget, vehicula sem. Quisque non placerat orci. Nunc ac ornare nisi. Etiam quis sollicitudin urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque et leo luctus, fringilla sapien eget, rhoncus diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum interdum aliquet risus at porta. Aenean porttitor nunc aliquet lobortis dapibus. Donec at nulla quis magna placerat elementum laoreet ut erat. Proin a tincidunt nunc. Aliquam lacinia arcu magna, ut cursus arcu pellentesque ut. Integer ullamcorper nibh quis erat ultrices fermentum. Maecenas tempus feugiat mauris nec laoreet. Morbi ut consectetur libero.',
  },
  {
    id: 'what-motivates-me',
    title: 'What motivates me',
    subtitle: 'a brief description about me',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id sapien pretium, dapibus metus id, tristique metus. Sed et lectus ullamcorper, malesuada lacus eget, vehicula sem. Quisque non placerat orci. Nunc ac ornare nisi. Etiam quis sollicitudin urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque et leo luctus, fringilla sapien eget, rhoncus diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum interdum aliquet risus at porta. Aenean porttitor nunc aliquet lobortis dapibus. Donec at nulla quis magna placerat elementum laoreet ut erat. Proin a tincidunt nunc. Aliquam lacinia arcu magna, ut cursus arcu pellentesque ut. Integer ullamcorper nibh quis erat ultrices fermentum. Maecenas tempus feugiat mauris nec laoreet. Morbi ut consectetur libero.',
  },
  {
    id: 'personality',
    title: 'Personality',
    subtitle: 'a brief description about me',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id sapien pretium, dapibus metus id, tristique metus. Sed et lectus ullamcorper, malesuada lacus eget, vehicula sem. Quisque non placerat orci. Nunc ac ornare nisi. Etiam quis sollicitudin urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque et leo luctus, fringilla sapien eget, rhoncus diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum interdum aliquet risus at porta. Aenean porttitor nunc aliquet lobortis dapibus. Donec at nulla quis magna placerat elementum laoreet ut erat. Proin a tincidunt nunc. Aliquam lacinia arcu magna, ut cursus arcu pellentesque ut. Integer ullamcorper nibh quis erat ultrices fermentum. Maecenas tempus feugiat mauris nec laoreet. Morbi ut consectetur libero.',
  },
  {
    id: 'hobbies',
    title: 'What do I like',
    subtitle: 'a brief description about me',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id sapien pretium, dapibus metus id, tristique metus. Sed et lectus ullamcorper, malesuada lacus eget, vehicula sem. Quisque non placerat orci. Nunc ac ornare nisi. Etiam quis sollicitudin urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque et leo luctus, fringilla sapien eget, rhoncus diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum interdum aliquet risus at porta. Aenean porttitor nunc aliquet lobortis dapibus. Donec at nulla quis magna placerat elementum laoreet ut erat. Proin a tincidunt nunc. Aliquam lacinia arcu magna, ut cursus arcu pellentesque ut. Integer ullamcorper nibh quis erat ultrices fermentum. Maecenas tempus feugiat mauris nec laoreet. Morbi ut consectetur libero.',
  }
];

export default function IntroAccordion() {
  const theme = useTheme();
  const full = useMediaQuery(theme.breakpoints.down('md'));
  const [expanded, setExpanded] = React.useState<string | false>('how-am-i');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {sections.map(it => (
        <Accordion
          key={it.id}
          expanded={expanded === it.id}
          onChange={handleChange(it.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${it.id}-content`}
            id={`${it.id}-header`}
          >
            <Typography variant='h6' sx={{ width: full ? '100%' : '33%', flexShrink: 0 }}>{it.title}</Typography>
            {!full && (
              <Typography sx={{ color: 'text.secondary' }}>{it.subtitle}</Typography>
            )}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{it.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
