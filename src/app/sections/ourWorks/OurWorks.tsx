import React from "react";
import Image from "next/image";
import { OurWorksType } from "@/types/OurWorks";
import Section from "@/components/Section/Section";
import OurWorksData from "../../db/static/OurWorks.json";
import CustomSwiper from "@/components/Swiper/CustomSwiper";

const OurWorks = () => {
  return (
    <Section
      className="bg-light"
      subtitle="Portfolio & Project"
      mainTitle="Our Works"
    >
      <CustomSwiper type="creative">
        {OurWorksData.map(({ title, image }: OurWorksType, key: number) => (
          <div className="swiper__container" key={key}>
            <h1 className="title" data-swiper-parallax="-900">
              {title}
            </h1>
            <Image fill alt="programmer" src={image} />
          </div>
        ))}
      </CustomSwiper>
    </Section>
  );
};

export default OurWorks;
