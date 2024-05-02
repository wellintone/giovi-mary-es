import React from "react";
import Section from "@/components/Section/Section";
import UnorderedList from "@/components/UnorderedList/UnorderedList";

const Summary = ({ technologies, paragraphs }: any) => {
  return (
    <Section className="summary" subtitle="" mainTitle="Summary">
      {paragraphs?.map((paragraph: string, key: number) => (
        <p key={key} className="summary__description">
          {paragraph}
        </p>
      ))}

      <UnorderedList technologies={technologies}></UnorderedList>
    </Section>
  );
};

export default Summary;
