"use client";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
