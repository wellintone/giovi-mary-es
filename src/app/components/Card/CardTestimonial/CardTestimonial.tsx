import { TestimonialType } from "@/types/Testimonial";
import Image from "next/image";
import React, { FC, HTMLAttributes } from "react";

const CardTestimonial: FC<TestimonialType & HTMLAttributes<HTMLElement>> = ({
  children,
  image,
  work,
  name,
  text,
}) => {
  return (
    <div className="cardTestimonial">
      <div className="cardTestimonial__doublequotes">&#x22;</div>
      <div className="cardTestimonial__description">{text}</div>
      <div className="cardTestimonial__bio">
        <div className="cardTestimonial__bio-image">
          <Image fill src={image} alt={name} />
        </div>
        <div className="cardTestimonial__bio-info">
          <div className="cardTestimonial__bio-name">{name}</div>
          <div className="cardTestimonial__bio-work">{work}</div>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonial;
