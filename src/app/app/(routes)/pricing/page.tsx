import HeroPages from "@/components/HeroPages/HeroPages";
import PricingImage from "/public/img/pricing.jpg";
import React from "react";
import FollowLine from "@/components/FollowLine/FollowLine";
import LetsTalk from "@/components/LetsTalk/LetsTalk";

const Pricing = () => {
  return (
    <div className="pricing">
      <HeroPages bg={PricingImage} titlePage="Pricing Plan" />
      <FollowLine />
      <LetsTalk />
    </div>
  );
};

export default Pricing;
