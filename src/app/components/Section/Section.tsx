import React, { FC, HtmlHTMLAttributes } from "react";
import SectionTitle from "../SectionsTitle";
import { HtmlProps } from "next/dist/shared/lib/html-context.shared-runtime";

export interface ISection {
  subtitle?: string;
  mainTitle?: string;
}

const Section: FC<ISection & HtmlHTMLAttributes<HtmlProps>> = ({
  subtitle,
  mainTitle,
  className,
  children,
}) => {
  return (
    <section className={`section ${className}`}>
      <SectionTitle subtitle={subtitle} mainTitle={mainTitle} />
      {children}
    </section>
  );
};

export default Section;
