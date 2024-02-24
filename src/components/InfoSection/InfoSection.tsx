import React from "react";
import styles from "./InfoSection.module.css";

const InfoSection = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>
          Bringing Traceable, <br />
          Trustworthy and Community-Centered AI Solutions
        </div>
        <div className={styles.caption}>
          Our proprietary, native Web3 AIGC models can be used and trained by
          anyone to create their own unique content generation models
        </div>
        <img
          src="https://www.aigcchain.io/static/media/bringing.7214418ad6f85c98fc98.png"
          alt="info-iamge"
          width={200}
          height={200}
          className={styles.infoImage}
        />
        <div className={styles.source}>
          Source:https://developer.nvidia.com/blog/improving-diffusion-models-as-an-alternative-to-gans-part-1
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
