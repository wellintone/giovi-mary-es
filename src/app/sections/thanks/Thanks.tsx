import React from "react";
import RingsSvg from "../../components/Svgs/Rings";
import Image from "next/image";
import Bg from "@/app/components/Svgs/Bg";
import Break from "@/app/components/Break/Break";

const Thanks = () => {
  return (
    <div className="thanks">
      <div className="thanks__bg">
        <Bg className={"thanks__bg-svg"} />
      </div>
      <div className="thanks__title">Grazie</div>
      <Break isOrange="false">
        <RingsSvg stroke="#fff"></RingsSvg>
      </Break>
      <div className="thanks__title">Mary & Giovi</div>
    </div>
  );
};

export default Thanks;
