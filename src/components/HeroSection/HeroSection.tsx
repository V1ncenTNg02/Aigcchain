import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <img
          src="	https://www.aigcchain.io/static/media/top.ba94d57802ab9000d207.png"
          alt="hero-image"
          width={200}
          height={200}
          className={styles.heroImage}
        />
        <div className={styles.infoSection}>
          <div className={styles.textContainer}>
            <span className={styles.higlightedTitle}>Responsible AI</span>
            <br />
            <span className={styles.title}>Empowered by Proprietary</span>
            <br />
            <span className={styles.title}>Models and A</span>
            <span className={styles.higlightedTitle}> Web3</span>
            <br />
            <span className={styles.title}>Native Platform</span>
            <br />
          </div>
          <div className={styles.btnGroup}>
            <button className={styles.button1}>Learn More</button>
            <button className={styles.button2}>Generate Content</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
