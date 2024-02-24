import React from "react";

interface Props {
  image: string;
  title: string;
  content: string;
}

const Card: React.FC<Props> = ({ image, title, content }) => {
  return (
    <div className=" w-[90%] md:max-w-[375px]  md:w-1/4 p-4 rounded-[20px] bg-white shadow-md md:h-[536px]">
      <img src={image} alt="card-image" className="w-full " />
      <div className="text-[#24c35a] text-[24px] font-bold leading-8 mt-6 font-default ">
        {title}
      </div>
      <div className="text-[#4d4d4d] text-[20px] font-[500]  leading-6 mt-6 font-inter words-break">
        {content}
      </div>
    </div>
  );
};

export default Card;
