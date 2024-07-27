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
      <h2 className="iban__title">África nos espera</h2>
      <div className="iban__body">
        <p className="iban__desc">
          Celebrar este día juntos será el regalo más importante para nosotros,
          pero si deseas contribuir con nuestro regalo de bodas te lo
          agradeceremos profundamente. 💛
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
            {copied && <span className="iban__copied"> Iban copiados </span>}
          </div>
          <div className="iban__data">
            <div className="iban__data-title">BENEFICIARIO</div>
            <div className="iban__data-names">
              Giovanni Citron <br />
              Maria Mira Aguado
            </div>
          </div>
          <div className="iban__data">
            <div className="iban__data-title">ASUNTO</div>
            <div className="iban__data-def">Viajes novios</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iban;
