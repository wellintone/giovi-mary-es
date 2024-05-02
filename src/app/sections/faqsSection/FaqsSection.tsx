import Section from "@/components/Section/Section";
import React, { FC } from "react";
import FaqsData from "@/db/static/Faqs.json";
import { FaqsType } from "@/types/Faqs";
import Accordion from "@/components/Accordion/Accordion";
import Link from "next/link";

export interface IFaqsComponent {
  isVisibleLink?: boolean;
}

const FaqsComponent: FC<IFaqsComponent> = ({ isVisibleLink = true }) => {
  return (
    <Section
      className="faqs"
      subtitle="we give you all answer"
      mainTitle="Frequently Asked Question"
    >
      {FaqsData.map(({ title, description }: FaqsType, index: number) => (
        <Accordion
          key={index}
          index={index + 1}
          title={title}
          description={description}
        />
      ))}
      {isVisibleLink && (
        <Link href="/faqs" className="faqs__link">
          <div className="faqs__link-text">See more</div>
          <div className="faqs__link-arrowRight">➜</div>
        </Link>
      )}
    </Section>
  );
};

export default FaqsComponent;
