import React from "react";
import { PillarsType } from "@/types/Pillars";
import Section from "@/components/Section/Section";
import PillarsData from "@/db/static/Pillars.json";
import CardPillars from "@/components/Card/CardPillars/CardPillars";

const Pillars = () => {
  return (
    <Section mainTitle="How We Are" subtitle="Digitally Unique">
      {PillarsData.map(
        ({ title, description, link }: PillarsType, key: number) => (
          <CardPillars
            title={title}
            description={description}
            link={link}
            key={key}
          />
        )
      )}
    </Section>
  );
};

export default Pillars;
