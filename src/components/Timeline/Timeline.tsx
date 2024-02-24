import React from "react";
import styles from "./Timeline.module.css";
import InfoCard from "./InfoCard";
import DetailedInfoCard from "./DetailedInfoCard";

const timeline = [
  {
    year: 2014,
    detailed: false,
    text: [
      "The AlGC Chain startup teamOben Al was officially established in Los Angeles, anduses Al technology to enable digital life.",
      "Started developing GAN models",
    ],
  },
  {
    year: 2017,
    detailed: false,
    text: [
      "Obtained a Sr A financing of 14million uS dollars from Tencent Softbank Asia, South Korea SM.etc",
      "Provided personalized Al voicechanging, Al singing, 3D digital human design and 3D digital human animation services for American enterprise users",
    ],
  },
  {
    year: 2018,
    detailed: false,
    text: [
      "Obtained K11 Ventures financing of 10 million US dollars",
      "Attended Softbank World 2018as a guest speaker in Al.",
    ],
  },
  {
    year: 2019,
    detailed: false,
    text: [
      "Sole avatar technology providerfor Asia's most watched TVshow, with over 100 million viewers",
      "Provided digital human technology for Softbank Mobile'sVR meetings.",
    ],
  },
  {
    year: 2020,
    detailed: false,
    text: [
      "Producer of D.M virtual idols forDimension Nova, a virtual realityshow produced by lQlYl",
      "Started developing T-Diffusionmodels",
    ],
  },
  {
    year: 2021,
    detailed: false,
    text: [
      "Established a joint venture Al technology company with Yoshimoto, one of Japan's larges entertainment companies, in Tokyo.",
    ],
  },
  {
    year: 2022,
    detailed: true,
    Q1: [
      "Tested AlGCmodels's distributed stucture",
      "Designed the AlGC Web3 infrastructure - AlGC Chain",
    ],
    Q2: [
      "Developed vertical applications of AlGCmodels with industria partners",
    ],
    Q3: ["v0.1 Alpha tesing ofAIGC Chain"],
    Q4: [
      "Launch AlGc Chainv1.0 for community",
      "Onboard MetaNaut, a digital collection card project developed bythe core community",
    ],
  },
  {
    year: 2023,
    detailed: true,
    Q1: [
      "Start AlGC ecosystem development",
      "Launch community testing for distributed Al model training",
      "Launch avatar editingand derivative avatar generation functions",
      "Launch community testing for text tovideo generation",
      "Launch AlGC skill ecosystem",
    ],
    Q2: [
      "Launch community testing fordistributed content generation",
      "Launch Al training engine v1.0",
      "Launch AlGC community space",
      "Launch AlGC skill ecosystem",
    ],
    Q3: ["Launch community testing for 3Dcontent generation"],
    Q4: [
      "Launch researcher incentive plan for AlGC models",
      "Aim to reach exceeded 20m illionusers",
    ],
  },
  {
    year: 2024,
    detailed: false,
    text: [
      "Gradually open distributed GPUand data storage services",
      "Aim to reach 10,000+ applications on AlGc Chain, and 50 million users",
    ],
  },
  {
    year: 2025,
    detailed: false,
    text: [
      "Alm to reach 100 million usersand become the leader of the AlGC areas",
    ],
  },
  {
    year: 2030,
    detailed: false,
    text: [
      "Distributed Human-Alcohabitation ecosystem beomesmature with the strongest global scalability, thewidest knowledge coverage and the largest userbase",
    ],
  },
];

function Timeline() {
  return (
    <div className={styles.timeline}>
      <div className={styles.timelineSection}>
        <div className={styles.title}>Timeline</div>
        <div className={styles.timelineWrapper}>
          {timeline.map((item, index) =>
            item.detailed ? (
              <DetailedInfoCard
                year={item.year}
                Q1={item.Q1 ? item.Q1 : [""]}
                Q2={item.Q2 ? item.Q2 : [""]}
                Q3={item.Q3 ? item.Q3 : [""]}
                Q4={item.Q4 ? item.Q4 : [""]}
                key={index}
              />
            ) : (
              <InfoCard
                year={item.year}
                text={item.text ? item.text : []}
                key={index}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
