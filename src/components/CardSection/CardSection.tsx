import React from "react";
import Card from "./Card";

const card_content = [
  {
    image:
      "https://www.aigcchain.io/static/media/automating2.ffe7998e3cf1cba586ab.png",
    title: "Automating",
    content:
      "Unlock your imagination and generate your personalized 2D/3D avatar from text and images",
  },
  {
    image:
      "https://www.aigcchain.io/static/media/traceable.9687571f2815710d284d.png",
    title: "Traceable Use of Training Data & AI Models",
    content:
      "Register the ownership of your contents and AI models, deploy AI models with confidence using traceable smart contracts",
  },
  {
    image:
      "https://www.aigcchain.io/static/media/space.bf1a115b1a90856ba28f.png",
    title: "Space",
    content:
      "The production space is a place where users create content that can be transported to any Web2 or Web3 metaverses. From this space, we can bring Metaverse into real life.",
  },
];

function CardSection() {
  return (
    <div className="bg-[#fbfcff]">
      <div className=" flex flex-col items-center md:items-start md:flex-row justify-center gap-[27px] py-[50px]">
        {card_content.map((card, index) => (
          <Card
            image={card.image}
            title={card.title}
            content={card.content}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default CardSection;
