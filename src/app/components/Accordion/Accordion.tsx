"use client";
import React, { useRef, useState } from "react";

export interface IAccordion {
  index: number;
  title: string;
  description: string;
}

const Accordion = ({ index, title, description }: IAccordion) => {
  const [activate, setActivate] = useState(0);
  const panelRef = useRef(null);

  const handleAccordion = (index: number) =>
    activate === index ? setActivate(0) : setActivate(index);

  return (
    <div className="accordion">
      <div className="accordion__wrapper">
        <button
          onClick={() => handleAccordion(index)}
          className={`${activate === index ? "active" : ""} accordion__btn`}
        >
          <div className="accordion__btn-index">{index}.</div>
          <p className="accordion__btn-title">{title}</p>
          <div
            className={`accordion__btn-arrow ${
              activate === index ? "arrow-active" : ""
            }`}
          >
            &#751;
          </div>
        </button>
        <div
          ref={panelRef}
          style={{
            maxHeight:
              activate === index ? panelRef.current.scrollHeight + "px" : "0px",
          }}
          className={`panel`}
        >
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
