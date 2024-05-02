import Break from "@/app/components/Break/Break";
import ReceivingSvg from "@/app/components/Svgs/Receiving";
import Envelope from "@/app/components/Svgs/Envelope";
import Title from "@/app/components/Title/Title";
import React from "react";
import ReceivingImg from "/public/img/receiving.jpg";
import Image from "next/image";

const Receiving = () => {
  return (
    <div className="receiving">
      <Title text="Il ricevimento" isOrange={false} />
      <p className="receiving__desc">Tenuta San Marco</p>
      <Break isOrange={true}>
        <ReceivingSvg />
      </Break>
      <div className="receiving__img">
        <Image src={ReceivingImg} fill alt="Receiving" />
      </div>

      <div className="receiving__data">
        <div className="receiving__data-title">Orario</div>
        <div className="receiving__data-def">11:00</div>
      </div>
      <div className="receiving__data">
        <div className="receiving__data-title">Indirizzo</div>
        <div className="receiving__data-def">
          Piazza del Municipio, 96017 Noto SR, Italia
        </div>
        <iframe
          className="receiving__data-map"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Contrada%20San%20Marco,%2096017%20Noto%20SR%20+(tenuta%20san%20marco)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>{" "}
        <a href="http://maps-generator.com/it">maps-generator.com/it</a>{" "}
      </div>
    </div>
  );
};

export default Receiving;
