import React from "react";
import styles from "./InfoCard.module.css";

interface Props {
  text: string[];
  year: number;
}

const InfoCard: React.FC<Props> = ({ text, year }) => {
  return (
    <div className={styles.contentBox}>
      <div className={styles.yearContainer}>
        {year} <div className={styles.dotContainer}></div>
      </div>
      <div className={styles.textContainer}>
        {text.map((item, index) => (
          <div key={index} className={styles.text}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
