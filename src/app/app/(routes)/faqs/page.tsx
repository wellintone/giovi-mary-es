"use client";
import React from "react";
import Wellington from "/public/img/wellington.jpg";
import LetsTalk from "@/components/LetsTalk/LetsTalk";
import HeroPages from "@/components/HeroPages/HeroPages";
import FollowLine from "@/components/FollowLine/FollowLine";
import FaqsSection from "@/sections/faqsSection/FaqsSection";

const Faqs = () => {
  return (
    <div className="faqs">
      <HeroPages bg={Wellington} titlePage="Frequently Asked Questions" />
      <FollowLine />
      <FaqsSection isVisibleLink={false} />
      <LetsTalk />
    </div>
  );
};

export default Faqs;
