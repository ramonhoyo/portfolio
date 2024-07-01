import Image from "next/image";
import styles from "./page.module.css";
import HeaderSection from "@/header/HeaderSection";
import IntroSection from "@/intro/IntroSection";
import Skills from "@/skills/Skills";
import { Container } from "@mui/material";
import Profile from "@/profile/Profile";

export default function Home() {
  return (
    <main>
      <HeaderSection />

      <Container>
        <IntroSection />

        <Profile />

        <br />

        <Skills />
      </Container>

      <div className={styles.description}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
          </div>
        </div>
      </div>

    </main>
  );
}
