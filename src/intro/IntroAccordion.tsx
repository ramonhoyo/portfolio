"use client";
import * as React from 'react';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

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
    id: 'how-am-i',
    title: 'How am I',
    subtitle: 'a brief description about me',
    content: 'I born on 1996 in Venezuela, I grow up in a humble familiy',
  },
  {
    id: 'what-motivates-me',
    title: 'What motivate me',
    subtitle: 'a brief description about me',
    content: 'I born on 1996 in Venezuela, I grow up in a humble familiy',
  },
  {
    id: 'personality',
    title: 'Personality',
    subtitle: 'a brief description about me',
    content: 'I born on 1996 in Venezuela, I grow up in a humble familiy',
  },
  {
    id: 'hobbies',
    title: 'What do I like',
    subtitle: 'a brief description about me',
    content: 'I born on 1996 in Venezuela, I grow up in a humble familiy',
  }

];

export default function IntroAccordion() {
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
            <Typography variant='h6' sx={{ width: '33%', flexShrink: 0 }}>{it.title}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>{it.subtitle}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{it.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
