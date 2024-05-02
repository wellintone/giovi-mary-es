import React from "react";
import Section from "@/components/Section/Section";
import Testimonial from "../../db/static/Testimonial.json";
import CustomSwiper from "@/components/Swiper/CustomSwiper";
import { TestimonialType } from "@/types/Testimonial";
import CardTestimonial from "@/components/Card/CardTestimonial/CardTestimonial";

const Testimonials = () => {
  return (
    <Section subtitle="What Clients Say?" mainTitle="Testimonials">
      <CustomSwiper>
        {Testimonial.map(
          ({ image, text, name, work }: TestimonialType, key: number) => (
            <CardTestimonial
              key={key}
              image={image}
              text={text}
              name={name}
              work={work}
            />
          )
        )}
      </CustomSwiper>
    </Section>
  );
};

export default Testimonials;
