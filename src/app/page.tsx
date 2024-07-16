import HeaderSection from "@/header/HeaderSection";
import IntroSection from "@/intro/IntroSection";
import Skills from "@/skills/Skills";
import Profile from "@/profile/Profile";
import Contact from "@/contact/Contact";

import dynamic from 'next/dynamic';

const Projects = dynamic(() => import('../projects/Projects'), { ssr: false })

export default function Home() {
  return (
    <main>
      <HeaderSection />

      <IntroSection />
      <Profile />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
