"use client";
import React from "react";
import RingsSvg from "../../components/Svgs/Rings";
import Bg from "@/app/components/Svgs/Bg";
import Break from "@/app/components/Break/Break";
import { CountdownTimer } from "@/app/components/CountDown/CountDown";

const Where2 = () => {
  const endDate = new Date();
  endDate.setMonth(10); // Novembre (i mesi sono indicizzati da 0)
  endDate.setDate(2);
  endDate.setHours(0, 0, 0, 0); // Imposta l'ora di fine a mezzanotte
  return (
    <div className="where">
      <div className="where__bg">
        <Bg className={"where__bg-svg"} />
      </div>
      <h2 className="where__title">Il grande giorno</h2>
      {/*  <span className="where__rings">
        <RingsSvg className="where__rings-svg" />
      </span> */}
      <div className="where__desc">
        Detto (sí) fatto... CI SPOSIAMO!! 😄
        <br />
        <div className="where__desc-break"></div>
        Chi l'avrebbe mai detto che dopo quel volo la vita avrebbe fatto
        incrociare il nostro cammino una volta ancora.
        <br />
        <div className="where__desc-break"></div>
        Da lì, inseparabili 😄
        <br />
        <div className="where__desc-break"></div>
        Ora siamo qui, felici di celebrare il nostro amore con tutti voi.
        <br />
        <div className="where__desc-break"></div>
        In vista del grande giorno abbiamo creato questo sito dove puoi trovare
        tutte le informazioni utili ed eventuali aggiornamenti.
        <br />
        <div className="where__desc-break"></div>
        Per favore, conferma la presenza il prima possibile: ci renderai piú
        facile l'organizzazione.
        <br />
        <div className="where__desc-break"></div>
        Grazie mille! Vi aspettiamo! Un abbraccio,
        <br />
        <div className="where__desc-break"></div>
        Maria e Giovanni
      </div>
      <Break isOrange="false">
        <RingsSvg stroke="#fff"></RingsSvg>
      </Break>
      <div className="where__date">2 Nov 2024</div>
      <div className="where__remain">
        <CountdownTimer targetDate={endDate} />
      </div>
    </div>
  );
};

export default Where2;