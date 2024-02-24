import React from "react";
import styles from "./DetailedInfoCard.module.css";

interface Props {
  year: number;
  Q1: string[];
  Q2: string[];
  Q3: string[];
  Q4: string[];
}

const InfoCard: React.FC<Props> = ({ Q1, Q2, Q3, Q4, year }) => {
  return (
    <div className={styles.contentBox}>
      <div className={styles.yearContainer}>
        {year} <div className={styles.dotContainer}></div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <div className="font-bold">Q1</div>
          {Q1.map((item) => (
            <div key={item} className={styles.text}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.textWrapper}>
          <div className="font-bold">Q2</div>
          {Q2.map((item) => (
            <div key={item} className={styles.text}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.textWrapper}>
          <div className="font-bold">Q3</div>
          {Q3.map((item) => (
            <div key={item} className={styles.text}>
              {item}
            </div>
          ))}
        </div>
        <div className={styles.textWrapper}>
          <div className="font-bold">Q4</div>
          {Q4.map((item) => (
            <div key={item} className={styles.text}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
