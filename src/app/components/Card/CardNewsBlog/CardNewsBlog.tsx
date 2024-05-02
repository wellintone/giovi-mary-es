import { NewsBlogType } from "@/types/NewsBlog";
import Image from "next/image";
import React from "react";

const CardNewsBlog = ({
  author,
  day,
  image,
  link,
  month,
  title,
  type_news,
  year,
}: NewsBlogType) => {
  return (
    <div className="cardNewsBlog">
      <div className="cardNewsBlog__img">
        <Image fill src={image} alt={title} />
      </div>
      <div className="cardNewsBlog__title">{title}</div>
      <div className="cardNewsBlog__date">
        <div className="cardNewsBlog__date-day">{day}</div>
        <div className="cardNewsBlog__date-monthYear">
          <div className="cardNewsBlog__date-month">{month}</div>
          <div className="cardNewsBlog__date-year">{year}</div>
        </div>
      </div>
      <div className="cardNewsBlog__type">
        <div className="cardNewsBlog__type-author">{author}</div>
        <div className="cardNewsBlog__type-news">{type_news}</div>
      </div>
    </div>
  );
};

export default CardNewsBlog;
