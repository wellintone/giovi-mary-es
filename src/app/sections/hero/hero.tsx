import React from "react";
import MG from "/public/img/m&g.jpeg";
import AttachmentBg from "@/app/components/AttachmentBg/AttachmentBg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="message">
        <h1 className="solution">Mary & Giovi</h1>
      </div>
      <AttachmentBg className="hero__bg" bg={MG} />
    </div>
  );
};

export default Hero;
