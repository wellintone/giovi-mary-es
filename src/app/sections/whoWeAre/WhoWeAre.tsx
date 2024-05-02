import React from "react";
import Section from "@/components/Section/Section";
import Summary from "../summary/Summary";

const WhoWeAre = () => {
  return (
    <Section
      className="whoWeAre"
      subtitle="Creative Agency"
      mainTitle="Who We Are?"
    >
      <Summary
        paragraphs={[
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt repudiandae odit voluptatibus ullam expedita? Id eaque modi, sequi  expedita fuga non magnam aperiam, deserunt quasi repellat eius, consequuntur explicabo?",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt repudiandae odit voluptatibus ullam expedita? Id eaque modi, sequi  expedita fuga non magnam aperiam, deserunt quasi repellat eius, consequuntur explicabo?",
        ]}
        points={["Branding Digital", "SEO specialist", "Social Media"]}
      />
    </Section>
  );
};

export default WhoWeAre;
