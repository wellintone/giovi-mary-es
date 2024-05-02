import React from "react";
import Section from "@/components/Section/Section";
import NewsBlogData from "@/db/static/NewsBlog.json";
import { NewsBlogType } from "@/types/NewsBlog";
import CardNewsBlog from "@/components/Card/CardNewsBlog/CardNewsBlog";
import CustomSwiper from "@/components/Swiper/CustomSwiper";

const NewsBlog = () => {
  return (
    <Section subtitle="News & Blog" mainTitle="Latest News">
      <CustomSwiper type="creative">
        {NewsBlogData.map(
          (
            {
              author,
              day,
              image,
              link,
              month,
              title,
              type_news,
              year,
            }: NewsBlogType,
            key: number
          ) => (
            <CardNewsBlog
              key={key}
              author={author}
              day={day}
              image={image}
              link={link}
              month={month}
              title={title}
              type_news={type_news}
              year={year}
            />
          )
        )}
      </CustomSwiper>
    </Section>
  );
};

export default NewsBlog;
