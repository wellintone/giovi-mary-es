"use client";
import React from "react";
import MG from "/public/img/m&g2.png";
import AttachmentBg from "@/app/components/AttachmentBg/AttachmentBg";
import Image from "next/image";
import Girasoli from "@/../public/img/gira.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="message">
        {/*  <h1 className="solution">Mary & Giovi</h1> */}
        <h1 className="solution">
          <span className="solution__names">Maria</span>
          <Image
            className="solution__names-gira"
            src={Girasoli}
            alt="girasoli"
          />
          <span className="solution__names">Giovanni</span>
        </h1>
      </div>
      <AttachmentBg className="hero__bg" bg={MG} />
    </div>
  );
};

export default Hero;
