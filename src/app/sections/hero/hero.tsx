import Image from "next/image";
import React from "react";
import MG from "/public/img/m&g.jpeg";
import AttachmentBg from "@/app/components/AttachmentBg/AttachmentBg";
import Button from "@/app/components/Buttons/button";
import { BUTTON_SIZES } from "@/app/components/Buttons/enums";
import RingsSvg from "@/app/components/Svgs/Rings";

const Hero = () => {
  return (
    <div className="hero">
      <div className="message">
        <h1 className="solution">Mary & Giovi</h1>
        {/*  <RingsSvg /> */}
        {/* <p className="slogan">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
      </div>
      <AttachmentBg className="hero__bg" bg={MG} />
      {/*  <Image className="hero__bg" alt="programmer" src={Programmer} /> */}
    </div>
  );
};

export default Hero;
