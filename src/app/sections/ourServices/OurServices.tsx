"use client";
import Card from "@/components/Card/Card";
import React, { useCallback } from "react";
import Section from "@/components/Section/Section";
import { OurServiceType } from "@/types/OurService";
import OurService from "@/db/static/ourServices.json";

const OurServices = () => {
  return (
    <Section subtitle="What We Do" mainTitle="Our Services">
      {OurService.map(
        (
          { description, title, icon, link, image }: OurServiceType,
          key: number
        ) => {
          return (
            <Card
              key={key}
              description={description}
              title={title}
              icon={icon}
              index={key}
              link={link}
              image={image}
              /* onClick={() => onClick(image, title)} */
            />
          );
        }
      )}
    </Section>
  );
};

export default OurServices;
