import Link from "next/link";
import Image from "next/image";
import React, { FC, useCallback } from "react";

export interface ICard {
  icon: any;
  title: string;
  description: string;
  index?: number;
  link?: string;
  image?: any;
  onClick?: () => void;
}

const Card: FC<ICard> = ({
  icon = "icon",
  title = "title",
  image,
  description = "description",
  index = 1,
  link = "/",
  onClick,
}) => {
  return (
    <div className={`card`}>
      <div className="card__icon">
        <Image fill={true} src={icon} alt={title} />
      </div>

      <h2 className="card__title">{title}</h2>
      <div className="card__description">{description}</div>
      <Link
        className="card__arrowRight"
        href={"/services/" + link}
        onClick={onClick}
      >
        ➜
      </Link>
      <div className="card__number">{index + 1}</div>
    </div>
  );
};

export default Card;
