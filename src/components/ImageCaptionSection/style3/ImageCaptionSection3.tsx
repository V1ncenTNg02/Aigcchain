import React from "react";
import styles from "./ImageCaptionSection.module.css";
import Button from "../../Button/Button";

const ImageCaptionSection3 = () => {
  return (
    <div>
      <section className="py-[40px]">
        <div className="max-w-[1400px] mx-auto flex flex-col justify-center items-center">
          <div className={styles.title}>
            Fully customized appearance and creative soul
          </div>
          <div className={styles.caption}>
            Use avatars to create experiences, tell stories, and drive trends
            that change world
          </div>
          <Button>Get Start</Button>
          <img
            src="/images/creativesoul.c701f1ff87ef2a16cdc2.png"
            alt="image-1"
            className={styles.image}
          />
        </div>
      </section>
    </div>
  );
};

export default ImageCaptionSection3;
