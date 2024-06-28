import Image from "next/image";

export default function IntroSection() {
  return (
    <section>
      <div style={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
        <div style={{ flex: 1 }}>
          <p>
            I am a very focused software developer, with extensive experience in the design, creation and implementation of software solutions that address real user needs.
            <br />
            <br />
            My skills as a professional not only encompass my skill when writing code, but is reflected in its style, design and implementation, evaluating its performance in both CPU and memory, in the same way I make effective use of SOLID principles to create IT solutions that:

            <br />
            <br />
            - Last over time.<br />
            - Are scalable.<br />
            - Maintainable by other developers.<br />
          </p>

          <h1>Ramón Hoyo</h1>
          <h2>Software Developer</h2>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <Image
              style={{ borderRadius: "50%", objectFit: "cover" }}
              src="/rahoyo-img-no-bg.png" alt="Ramón hoyo picture" width={400} height={400}></Image>
          </div>
        </div>

      </div>

      <h3>Profile</h3>

      <p>
        I have a set of personal skills that facilitate teamwork, joint participation to face development challenges, and clear communication, in addition to individual values ​​such as responsibility, commitment and honesty.
        <br />
        <br />
        In my previous experience, I served as a technical lead for a blockchain startup, specifically a Centralized Exchange (CEX). I am immensely proud to have spearheaded the development of the most important modules for this company.

        <br />
        <br />
        - The custody module, which offers a standard interface for managing cryptoassets.
        <br />
        - The transactions module, which offers a standard interface for managing transactions in various blockchains such as Bitcoin, Ethererum, Tron, BSC.
        <br />
        - The internal exchanges module, which ensured 1:1 support of assets for exchange operations where the provider was the same company.
        <br />
        <br />

        As Team Leader I was responsible for other tasks such as:
        <br />
        <br />
        - Design and assignment of tasks.
        <br />
        - Code review.
        <br />
        - Evaluation and implementation of the platforms.
        <br />
        - Direct meetings with the product owner.
        <br />
      </p>
    </section>
  );
}
