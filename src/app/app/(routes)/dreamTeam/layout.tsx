"use client";
import React, { useMemo } from "react";
import image from "next/image";
import { title } from "process";
import LetsTalk from "@/components/LetsTalk/LetsTalk";
import HeroPages from "@/components/HeroPages/HeroPages";
import FollowLine from "@/components/FollowLine/FollowLine";
import useFindElement from "@/hooks/useFindElement";
import { TeamType } from "@/types/Team";
import TeamData from "@/db/static/Team.json";
import DreamTeamImage from "/public/img/dreamTeam.jpg";

const DreamLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const initialState: TeamType = useMemo(() => {
    return {
      image: DreamTeamImage,
      name: "Dream Team",
      work: "",
    };
  }, []);
  const [element] = useFindElement(initialState, TeamData, "link");
  return (
    <>
      <HeroPages bg={element.image} titlePage={element.name} />
      <FollowLine />
      {children}
      <LetsTalk />
    </>
  );
};

export default DreamLayout;
