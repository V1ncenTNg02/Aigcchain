import React, { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";
import { BiLogoMediumOld } from "react-icons/bi";
import { FaTwitter, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import cx from "classnames";

interface containerProps {
  children: ReactNode;
  title: string;
  classname?: string;
}
const SocialCardContainer: React.FC<containerProps> = ({
  children,
  title,
  classname,
}) => {
  return (
    <div
      className={cx(
        [
          " rounded-[20px] flex flex-col w-[46%] md:w-[calc(25vw-25px)] lg:w-[250px] h-[160px] md:h-[200px]  p-[21px] hover:scale-105 duration-150",
        ],
        classname
      )}
    >
      <span>{children}</span>
      <div className=" text-white font-inter text-[24px] font-[500] leading-7 pt-[10px] flex-grow flex-shrink basis-0">
        {title}
      </div>
      <div className=" flex justify-end items-center">
        <FaArrowRight className="text-white w-[30px] h-[30px]" />
      </div>
    </div>
  );
};

function ContactSection() {
  return (
    <div className=" py-[40px]">
      <div className="text-[40px] font-bold leading-[50px] text-center text-[#0f9949]">
        Stay In Touch With AlGC
      </div>
      <div className=" text-black font-inter text-[20px] font-[400] leading-[30px] py-[15px] text-center">
        Join/develop to spread your influence. Link or incubate your
        applications in the AIGC ecosystem
      </div>
      <div className=" flex flex-row flex-wrap gap-[10px] md:gap-[25px] justify-center">
        <SocialCardContainer title="Twitter" classname="bg-[#1da1f3]">
          <FaTwitter className="w-[39px] h-[39px] text-white" />
        </SocialCardContainer>
        <SocialCardContainer title="Discord" classname="bg-[#5865f2]">
          <FaDiscord className="w-[39px] h-[39px] text-white" />
        </SocialCardContainer>
        <SocialCardContainer title="Telegram" classname="bg-[#1596db]">
          <FaTelegramPlane className="w-[39px] h-[39px] text-white" />
        </SocialCardContainer>
        <SocialCardContainer title="Medium" classname="bg-[#29b759]">
          <BiLogoMediumOld className="w-[39px] h-[39px] text-white" />
        </SocialCardContainer>
      </div>
    </div>
  );
}

export default ContactSection;
