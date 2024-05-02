"use client";
import React, { useMemo } from "react";
import { TeamType } from "@/types/Team";
import TeamData from "@/db/static/Team.json";
import useFindElement from "@/hooks/useFindElement";
import Teams from "@/sections/teams/Teams";
import Socials from "@/components/Socials/Socials";
import WhatsApp from "/public/icons/whatsapp.png";
import Linkedin from "/public/icons/linkedin.png";
import Instagram from "/public/icons/Instagram.png";
import Image from "next/image";
import { Skills } from "@/sections/skills/Skills";
import SimpleTab from "@/components/Tab/SimpleTab/SimpleTab";

const Person = () => {
  const initialState: TeamType = useMemo(() => {
    return {
      image: "",
      name: "",
      work: "",
    };
  }, []);
  const [element] = useFindElement(initialState, TeamData, "link");

  return (
    <div className="person">
      <Teams />
      <div className="person__description">
        <div className="person__description-title">Support Engineer</div>
        <div className="person__description-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo a
          itaque facere saepe omnis ratione quae eaque exercitationem rem ipsum
          ducimus voluptas repudiandae consequuntur, incidunt blanditiis
          laudantium quas inventore accusantium.
        </div>
        <div className="person__description-contact">
          <div className="person__description-contact-symbol">✓</div>
          <div className="person__description-contact-title">Skills:</div>
          <div className="person__description-contact-list">
            Javascript, Sql, .Net, C#
          </div>
        </div>
        <div className="person__description-contact">
          <div className="person__description-contact-symbol">&#9990;</div>
          <div className="person__description-contact-title">3393939393</div>
        </div>
        <div className="person__description-contact">
          <div className="person__description-contact-symbol">&#9993;</div>
          <div className="person__description-contact-list">
            wellington@gmail.com
          </div>
        </div>
      </div>
      <Socials>
        <Image src={WhatsApp} alt="whats app" fill />
        <Image src={Linkedin} alt="linkedin" fill />
        <Image src={Instagram} alt="instagram" fill />
      </Socials>
      <SimpleTab />
      <Skills />
    </div>
  );
};

export default Person;
