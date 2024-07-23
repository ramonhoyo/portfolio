"use client";
import IntroSection from "@/intro/IntroSection";
import Skills from "@/skills/Skills";
import Profile from "@/profile/Profile";
import Contact from "@/contact/Contact";
import dynamic from 'next/dynamic';
import { SpeedDial, SpeedDialAction, SpeedDialIcon, useMediaQuery, useTheme, Zoom } from "@mui/material";
import {
  PictureAsPdf as PictureAsPdfIcon,
  Email as EmailIcon,
  ConnectWithoutContact,
} from "@mui/icons-material";
import { useEffect, useState } from "react";

const Projects = dynamic(() => import('../projects/Projects'), { ssr: false })

const actions = [
  { icon: <PictureAsPdfIcon />, name: 'CV', href: '/cv.pdf', },
  { icon: <EmailIcon />, name: 'Send email', href: 'mailto:rahoyo@outlook.com' }
];

export default function Home() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [initialFabDelay, setInitialDelay] = useState(false);

  useEffect(() => {
    const handler = () => {
      let direction = window.scrollY > scrollPosition ? 'down' : 'up';
      direction = window.scrollY < 200 ? 'up' : direction;
      setScrollDirection(direction);
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handler, { passive: true });
    return () => {
      window.removeEventListener('scroll', handler)
    };
  }, [scrollPosition]);

  useEffect(() => {
    setTimeout(() => {
      setInitialDelay(true);
    }, 3000);
  }, []);

  return (
    <main>
      <IntroSection />
      <Profile />
      <Projects />
      <Skills />
      <Contact />

      {isXs && (
        <Zoom in={initialFabDelay && scrollDirection === 'up'}>
          <SpeedDial
            ariaLabel="connect"
            sx={{ position: 'fixed', bottom: 32, right: 32 }}
            icon={<SpeedDialIcon icon={<ConnectWithoutContact />} />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                onClick={() => window.open(action.href)}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Zoom>
      )}
    </main >
  );
}
