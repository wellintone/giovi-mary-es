"use client";
import React, { useCallback } from "react";
import Image from "next/image";
import { TeamType } from "@/types/Team";
import { useRouter } from "next/navigation";

const CardTeam = ({ image, name, link, work }: any) => {
  const router = useRouter();
  const onClick = useCallback(() => {
    if (router) {
      router.push("/dreamTeam/" + link);
    }
  }, [router, link]);
  return (
    <div className="team__container" onClick={onClick}>
      <div className="image__container">
        <Image fill alt="programmer" src={image} />
      </div>
      <div className="team__description" data-swiper-parallax="-900">
        <div className="name">{name}</div>
        <div className="work">{work}</div>
      </div>
    </div>
  );
};

export default CardTeam;
