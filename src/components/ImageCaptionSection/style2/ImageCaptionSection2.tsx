import React from "react";
import styles from "./ImageCaptionSection.module.css";

const ImageCaptionSection2 = () => {
  return (
    <div>
      <section className="py-[40px]">
        <div className="max-w-[1400px] mx-auto flex flex-col justify-center items-center">
          <div className={styles.title}>Borderless expansion</div>
          <div className={styles.caption}>
            Join/develop to spread your influence. Link or incubate your
            applications in the AIGC ecosystem.
          </div>
          <img
            src="/images/borderless.cb1d23ea2ebeb6920570.png"
            alt="image-1"
            className={styles.image}
          />
        </div>
      </section>
    </div>
  );
};

export default ImageCaptionSection2;
