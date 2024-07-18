"use client";
import * as React from 'react';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
import ReactHtmlParser from 'react-html-parser';

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
    title: 'Who am I?',
    subtitle: "",
    content: `
      I'm Ramón Hoyo, a sowftare architect and an apassionated software developer, I born on 1996 at Mérida, Venezuela. Where I am currently living.
      <br><br>

      There are a few values that guide me in my life, some of them are:
      <ul style="margin:16px;">
        <li> <b>Reciprocity</b>: I consider this the only way people should interact, where what you demand is the minimum you should offer. </li>
        <li> <b>Honesty</b>: It is not always easy to tell the truth, but this is precisely what can make us different in a world where lies guide the majority of hearts. </li>
        <li> <b>Respect</b>: I consider this the most basic value for a society, in this sense I consider myself a very respectful person.</li>
        <li> <b>Facts and Evidence</b>: I consider it very important that decision-making is based on facts and evidence beyond intuitions, feelings, hunches, etc.</li>
      </ul>
    `,
  },
  {
    id: 'what-motivates-me',
    title: 'What is my motivation?',
    subtitle: '',
    content: `I really enjoy the process of creating things that help people solve or automate some task, but above all, I think I'm currently reaching that point in my career where I think I could just do anything I wanted if I tried hard enough. This feeling makes me wonder how far I can go with my skills and knowledge, and what kind of amazing things and projects I'm going to build in the future.`,
  },
  {
    id: 'profissional-accomplishments',
    title: 'Professional achievements',
    subtitle: '',
    content: `
In my most recent experience, I served as the technical lead for a blockchain startup, specifically a Centralized Exchange (CEX). I am immensely proud of having spearheaded the development of the major modules:
<br />

<ul style="margin: 16px;">
  <li><b>Multi-chain Cryptocurrency Custody Module</b>: This module enabled secure storage (hierarchical wallets) and management of various cryptocurrencies and tokens (ERC20) across multiple blockchain networks.</li>
  <li><b>Multi-chain Blockchain Transaction Module</b>: This module facilitated seamless and secure transactions between users on different blockchain networks.</li>
  <li><b>Platform Transaction Module</b>: This module encompassed a range of transaction functionalities, including exchange methods, ensuring smooth and efficient trading experiences for users.</li>
  <li><b>Wallet System</b>: This module provided users with secure and user-friendly wallets for storing and managing their cryptocurrencies.</li>
  <li><b>Exchange Module</b>: This module allow clients to perform exchanges off-chain in the CEX, and it controls the correct holding of its cryptoactives.</li>
</ul>
 
Initially, these services were outsourced to an external platform (ChangeNow). However, by implementing these modules in-house, we were able to significantly reduce our reliance on external services, leading to substantial cost savings.
<br />
<br />
As Team Lead, I was responsible for design, plan, execute and integrate these modules including admin panels, mobile application, backend services, infrastructure and much more, ensuring that they met the highest standards of quality and security. I also played a key role in the recruitment and training of new team members, ensuring that they were well-equipped to contribute to the project.
    `,
  },
  {
    id: 'personal-achievements',
    title: 'Personal achievements',
    subtitle: '',
    content: `
      My greatest personal achievement is overcoming the challenges of my childhood. Growing up in a humble family and an "challenging" country, I faced numerous obstacles that ultimately provided me with invaluable life experiences and instilled a strong sense of responsibility from an early age.
      <br />
      <br />

      While I’m not yet where I want to be, I’m proud of how far I’ve come from my starting point.
    `,
  },
  {
    id: 'hobbies',
    title: 'What do I like?',
    subtitle: '',
    content: `
      In my free time, I enjoy to play chess, which allows me to relax and exercise my mind. 
      <br />
      <br />
      I also like to read books, especially those that expand my knowledge and understanding in different areas, such as, physcis, linux (why not?), low level computing, and pschiology.
`,
  }
];

export default function IntroAccordion() {
  const theme = useTheme();
  const full = useMediaQuery(theme.breakpoints.down('md'));
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {sections.map(it => (
        <Accordion
          id="about-me"
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
            {ReactHtmlParser(it.content)}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
