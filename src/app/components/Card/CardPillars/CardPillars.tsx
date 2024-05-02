import { PillarsType } from "@/types/Pillars";
import Link from "next/link";
import React from "react";

const CardPillars = ({ title, description, link }: PillarsType) => {
  return (
    <div className="cardPillars">
      <h2 className="cardPillars__title">{title}</h2>
      <p className="cardPillars__description">{description}</p>
      <Link href={link || "/"} className="cardPillars__arrowRight">
        ➜
      </Link>
    </div>
  );
};

export default CardPillars;
