import Image from "next/image";
import styles from "./page.module.css";
import HeaderSection from "@/header/HeaderSection";
import IntroSection from "@/intro/IntroSection";
import Skills from "@/skills/Skills";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderSection />

      <div className={styles.description}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            <IntroSection />
          </div>
        </div>
      </div>

      <br />
      <Skills />
    </main>
  );
}
