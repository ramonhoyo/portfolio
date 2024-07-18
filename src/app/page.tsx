"use client";
import IntroSection from "@/intro/IntroSection";
import Skills from "@/skills/Skills";
import Profile from "@/profile/Profile";
import Contact from "@/contact/Contact";

import dynamic from 'next/dynamic';
import { Fab, Grow, Portal, Slide, useMediaQuery, useTheme, Zoom } from "@mui/material";
import { ConnectWithoutContact } from "@mui/icons-material";
import { useCallback, useEffect, useState } from "react";

const Projects = dynamic(() => import('../projects/Projects'), { ssr: false })

export default function Home() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [initialFabDelay, setInitialDelay] = useState(false);

  useEffect(() => {
    const handler = () => {
      const direction = window.scrollY > scrollPosition ? 'down' : 'up';
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
        <Portal>
          <Zoom
            in={scrollDirection === 'up' && initialFabDelay}
            style={{
              position: 'fixed',
              bottom: 32,
              right: 32,
            }}>
            <Fab
              size='large'
              color="primary"
              aria-label="contact">
              <ConnectWithoutContact />
            </Fab>
          </Zoom>
        </Portal>
      )}
    </main>
  );
}
