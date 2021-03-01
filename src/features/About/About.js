import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <h1 className="header">A summary of experiences...</h1>
      <main className={styles.main}>
        <p className={styles.summary}>
          I'm a 25 software engineer, graduated with honors in computer science
          in 2017 while doing a placement as iOS developer working with the
          Bourough of Barnet in London. I've always been attracted by the
          infinite possibilities of creating new technologies to make a more
          exciting world. I've been working commercially with many technologies
          for the last 4+ years.
        </p>
        <p className={styles.summary}>
          I've been working with many technologies both frontend and backend,
          working as an app support engineer for Broadbean, investigating,
          fixing bugs in all the codebase, from very simple to very complex
          issues. I also write light features, custom reports for clients,
          writing code and retrieving all the new custom data usually creating a
          csv file, doing data extractions from multiple tables and databases,
          udually retrieving the all the CV candidates for the client and
          sending them via SFTP or cloud folder e.g. sharepoint
        </p>
      </main>
    </div>
  );
}

export default About;
