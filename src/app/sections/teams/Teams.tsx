"use client";
import React from "react";
import { TeamType } from "@/types/Team";
import Team from "../../db/static/Team.json";
import Section from "@/components/Section/Section";
import CardTeam from "@/components/Card/CardTeam/CardTeam";
import CustomSwiper from "@/components/Swiper/CustomSwiper";
import link from "next/link";

const Teams = () => {
  return (
    <Section subtitle="Creative Staff" mainTitle="Meet Team">
      <CustomSwiper type="creative">
        {Team.map(({ name, work, image, link }: TeamType, key: number) => (
          <CardTeam
            key={key}
            image={image}
            name={name}
            work={work}
            link={link}
          />
        ))}
      </CustomSwiper>
    </Section>
  );
};

export default Teams;
