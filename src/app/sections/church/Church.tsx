import Break from "@/app/components/Break/Break";
import ChurchSvg from "@/app/components/Svgs/Church";
import Envelope from "@/app/components/Svgs/Envelope";
import Title from "@/app/components/Title/Title";
import React from "react";
import ChurchImg from "/public/img/church.jpeg";
import Image from "next/image";

const Church = () => {
  return (
    <div className="church">
      <Title text="La chiesa" isOrange={false} />
      <p className="church__desc">Cattedrale di Santa maria</p>
      <Break isOrange={true}>
        <ChurchSvg />
      </Break>
      <div className="church__img">
        <Image src={ChurchImg} fill alt="church" />
      </div>
    </div>
  );
};

export default Church;
