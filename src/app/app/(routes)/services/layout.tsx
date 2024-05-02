"use client";

import Service from "/public/img/services.jpg";
import { OurServiceType } from "@/types/OurService";
import LetsTalk from "@/components/LetsTalk/LetsTalk";
import HeroPages from "@/components/HeroPages/HeroPages";
import OurServicesData from "@/db/static/OurServices.json";
import FollowLine from "@/components/FollowLine/FollowLine";
import React, { useMemo } from "react";
import useFindElement from "@/hooks/useFindElement";

const ServiceLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
    <>
      <HeroPages bg={element.image} titlePage={element.title} />
      <FollowLine />
      {children}
      <LetsTalk />
    </>
  );
};

export default ServiceLayout;
