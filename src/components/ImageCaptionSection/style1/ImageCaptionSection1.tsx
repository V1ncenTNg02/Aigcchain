import React from "react";
import styles from "./ImageCaptionSection.module.css";

const ImageCaptionSection1 = () => {
  return (
    <div>
      <section className="bg-[#fbfcff] py-[40px]">
        <div className="max-w-[1400px] mx-auto flex flex-col justify-center items-center">
          <div className={styles.title}>
            Create/Influence train your AI Engine
          </div>
          <div className={styles.caption}>
            With over 400 billion parameters, our base model allows users to
            generate an expansive range of content, or train their own models to
            cover any topic or style.
          </div>
          <img
            src="./images/crateorinfluence.fe35511058a99af681e4.png"
            alt="image-1"
            className={styles.image}
          />
        </div>
      </section>
    </div>
  );
};

export default ImageCaptionSection1;
