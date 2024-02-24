import React from "react";
import styles from "./TechnologySection.module.css";

function TechnologySection() {
  return (
    <div>
      <section className="py-[40px] bg-[#fbfcff]">
        <div className="flex flex-col items-center justify-center gap-[38px] max-w-[1400px] mx-auto">
          <div className={styles.title}>
            Advance Generative AI Modeling
            <br />
            through distributed GPU
          </div>
          <div className={styles.container}>
            <div className={styles.containerTitle}>Core Technology</div>
            <div className={styles.containerhighlightedText}>
              Empowering Responsible Al through Smart Contract Enabled ldentity
              Authentication andAuthorization Processes for All Models
            </div>
            <div className={styles.containerhighlightedText}>
              Accelerating Diffusion Models via Raw-Feature lnitialization and
              Low-Rank Approximation Methods
            </div>
            <div className={styles.containerParagraph}>
              The forward diffusion uses the raw-feature initialization
              mechanism to train the autoencoder and the reverse
              diffusionorocess uses low-rank approximation denoising to reduce
              the dimensionality of the latent space
            </div>
            <div className={styles.containerhighlightedText}>
              Accuracy Controls for Consistent Visual Generation
            </div>
            <div className={styles.containerParagraph}>
              The unique hybrid diffusion technology allows for precision
              control of generated images, so you can keep unique characters,
              scenes, or object consistent across multiple image generations.
            </div>
            <div className={styles.containerhighlightedText}>
              Faster and more efficient
            </div>
            <div className={styles.containerParagraph}>
              Model training: Train and fine-tune an image set in 0.6 hours
              using a single V100 GPU compared to other solutions on the market
              that require 1 hour using 4 V100 GPUs. Content Generation: Using a
              single V100 GPU for content generation results in a 10%-50%
              increase in speed vs other models on the market.
            </div>
          </div>

          <div className={styles.container}>
            <div className={styles.containerTitle}>
              Distributed Infrastructure
            </div>
            <div className={styles.containerhighlightedText}>
              Distributed model training
            </div>

            <div className={styles.containerParagraph}>
              Drawing upon the power of community, distributed training
              capabilities allow for everyone to contribute to the collective
              knowledge of the diffusion model, allowing it to evolve more
              quickly, cover for information, and become more reliable and
              powerful than centralized models.
            </div>
            <div className={styles.containerhighlightedText}>
              Distributed content generation
            </div>
            <div className={styles.containerParagraph}>
              Users can access distributed GPU services and data storage,
              improving the efficiency and performance of AI-generated content
              without the need for sophisticated computational setups.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechnologySection;
