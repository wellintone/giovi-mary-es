"use client";
import React from "react";
import MG from "/public/img/m&g1.jpg";
import AttachmentBg from "@/app/components/AttachmentBg/AttachmentBg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="message">
        {/*  <h1 className="solution">Mary & Giovi</h1> */}
        <div className="solution">
          <div className="date">02 - 11 - 2024</div>
          <h1 className="name">Maria y Giovanni</h1>
        </div>
      </div>
      <AttachmentBg className="hero__bg" bg={MG} />
    </div>
  );
};

export default Hero;
