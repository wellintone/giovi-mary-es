"use client";
import Break from "@/app/components/Break/Break";
import Copy from "@/app/components/Svgs/Copy";
import Gift from "@/app/components/Svgs/Gift";
import Title from "@/app/components/Title/Title";
import React, { useRef, useState } from "react";

const Iban = () => {
  const [copied, setCopied] = useState(false);

  const copyClip = (e: any) => {
    if (e.target.innerHTML) {
      setCopied(true);
      navigator.clipboard.writeText(e.target.innerHTML);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } else {
      setCopied(false);
    }
  };
  return (
    <div className="iban">
      <h2 className="iban__title">L'Africa ci aspetta</h2>
      <div className="iban__body">
        <p className="iban__desc">
          Celebrare insieme questo giorno sarà per noi il regalo più bello, ma
          se desiderate contribuire al nostro regalo di nozze ve ne saremmo
          profondamente grati 😄❤️
        </p>
        <div className="iban__container-data">
          <div className="iban__data">
            <div className="iban__data-title">IBAN</div>
            <div className="iban__data-def" onClick={(e: any) => copyClip(e)}>
              <div>ES9300491770962710272710 </div>
              <span className="iban__data-def-copy">
                <Copy />
              </span>
            </div>
            {copied && <span className="iban__copied"> Iban copiato </span>}
          </div>
          <div className="iban__data">
            <div className="iban__data-title">Intestato</div>
            <div className="iban__data-def">
              Giovanni Citron <br />
              Maria Mira Aguado
            </div>
          </div>
          <div className="iban__data">
            <div className="iban__data-title">Causale</div>
            <div className="iban__data-def">Viaggio di nozze</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iban;
