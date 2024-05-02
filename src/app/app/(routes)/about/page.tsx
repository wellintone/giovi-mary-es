import React from "react";
import Teams from "@/sections/teams/Teams";
import Pillars from "@/sections/pillars/Pillars";
import Button from "@/components/Buttons/button";
import WhoWeAre from "@/sections/whoWeAre/WhoWeAre";
import Wellington from "/public/img/wellington.jpg";
import LetsTalk from "@/components/LetsTalk/LetsTalk";
import HeroPages from "@/components/HeroPages/HeroPages";
import { BUTTON_SIZES } from "@/components/Buttons/enums";
import CardTeam from "@/components/Card/CardTeam/CardTeam";
import FollowLine from "@/components/FollowLine/FollowLine";

const About = () => {
  return (
    <div className="about">
      <HeroPages bg={Wellington} titlePage="About us" />
      <FollowLine />
      <WhoWeAre />
      <Button size={BUTTON_SIZES.Small}>Our Services</Button>
      <CardTeam
        image={Wellington}
        name="Wellington Pecchini"
        work="CEO / Founder"
        link="wellington-pecchini"
      />
      <FollowLine />
      <Pillars />
      <Teams />
      <LetsTalk />
    </div>
  );
};

export default About;
