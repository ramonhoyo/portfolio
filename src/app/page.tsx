import styles from "./page.module.css";
import HeaderSection from "@/header/HeaderSection";
import IntroSection from "@/intro/IntroSection";
import Skills from "@/skills/Skills";
import { Container } from "@mui/material";
import Profile from "@/profile/Profile";
import Projects from "@/projects/Projects";
import Contact from "@/contact/Contact";

export default function Home() {
  return (
    <main>
      <HeaderSection />

      <IntroSection />
      <Profile />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
