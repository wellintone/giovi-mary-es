"use client";
import React, { FC, useMemo } from "react";
import Summary from "@/sections/summary/Summary";
import useFindElement from "@/hooks/useFindElement";
import { OurServiceType } from "@/types/OurService";
import OurServicesData from "@/db/static/OurServices.json";

export interface IService {
  paragraphs: string[];
  technology: string[];
}

const Service: FC<IService> = () => {
  const initialState: OurServiceType = useMemo(() => {
    return {
      title: "Service",
      image: Service,
      id: 0,
      description: "",
      icon: "",
      link: "",
    };
  }, []);
  const [element] = useFindElement(initialState, OurServicesData, "link");
  return (
    <Summary
      paragraphs={element.paragraphs}
      technologies={element.technologies}
    />
  );
};

export default Service;
