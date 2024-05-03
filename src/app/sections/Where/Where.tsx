import React from "react";
import RingsSvg from "../../components/Svgs/Rings";
import Bg from "@/app/components/Svgs/Bg";
import Break from "@/app/components/Break/Break";

const Where = () => {
  return (
    <div className="where">
      <div className="where__bg">
        <Bg className={"where__bg-svg"} />
      </div>
      <h2 className="where__title">Ci sposeremo il</h2>
      {/*  <span className="where__rings">
        <RingsSvg className="where__rings-svg" />
      </span> */}
      <Break isOrange="false">
        <RingsSvg stroke="#fff"></RingsSvg>
      </Break>
      <div className="where__date">2 Nov 2024</div>
      <div className="where__remain">
        <div className="where__remain-date">19 Giorni</div>
        <div className="where__remain-date">12 Ore</div>
        <div className="where__remain-date">00 Minuti</div>
      </div>
      <div className="where__desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsa
        inventore eaque expedita accusantium mollitia dignissimos, quibusdam
        provident non aperiam commodi soluta fugit maiores, quia sint, dolore
        incidunt quam consectetur?
      </div>
    </div>
  );
};

export default Where;
