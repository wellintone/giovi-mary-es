"use client";
import React from "react";
import RingsSvg from "../../components/Svgs/Rings";
import Bg from "@/app/components/Svgs/Bg";
import Break from "@/app/components/Break/Break";
import { CountdownTimer } from "@/app/components/CountDown/CountDown";
import Button from "@/app/components/Buttons/button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/app/components/Buttons/enums";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Girasoli from "@/../public/img/gira.png";

const Where2 = () => {
  const endDate = new Date();
  endDate.setMonth(10); // Novembre (i mesi sono indicizzati da 0)
  endDate.setDate(2);
  endDate.setHours(0, 0, 0, 0); // Imposta l'ora di fine a mezzanotte

  const router = useRouter();
  return (
    <div className="where">
      {/*  <div className="where__bg">
        <Bg className={"where__bg-svg"} />
      </div> */}
      <h2 className="where__title">El gran día</h2>

      {/*  <span className="where__rings">
        <RingsSvg className="where__rings-svg" />
      </span> */}
      <div className="where__desc">
        Dicho ( sí ) y hecho…
        <br />
        NOS CASAMOS!
        <br />
        <div className="where__desc-break"></div>
        Quién hubiera pensado que después de aquel vuelo, la vida nos hubiera
        llevado a cruzar nuestros caminos de nuevo.
        <br />
        <div className="where__desc-break"></div>
        Desde entonces, inseparables 😄
        <br />
        <div className="where__desc-break"></div>
        Ahora estamos aquí, felices de celebrar nuestro amor con todos vosotros.
        <br />
        <div className="where__desc-break"></div>
        Para el gran día hemos creado esta web donde podréis encontrar toda la
        información que esperamos os sea útil.
        <br />
        <div className="where__desc-break"></div>
        Os agradeceríamos confirmarais vuestra asistencia cuanto antes!
        <br />
        <div className="where__desc-break"></div>
        Muchas gracias!! Os esperamos 😄 Un abrazo,
        <br />
        <div className="where__desc-break"></div>
        <h2 className="where__names">Maria y Giovanni</h2>
        <div className="where__girasoli">
          <Image className="imageGira" src={Girasoli} alt="girasoli" />
        </div>
      </div>

      <div className="where__call_to_action">
        <Button
          variant={BUTTON_VARIANTS.PrimaryVariant}
          size={BUTTON_SIZES.Large}
          hasShadow={true}
          onClick={() => router.push("/vendras")}
        >
          Vendrás?
        </Button>
        <Button
          variant={BUTTON_VARIANTS.PrimaryVariant}
          size={BUTTON_SIZES.Large}
          hasShadow={true}
          onClick={() => router.push("/ubicacion")}
        >
          Ubicación
        </Button>
        <Button
          variant={BUTTON_VARIANTS.PrimaryVariant}
          size={BUTTON_SIZES.Large}
          hasShadow={true}
          onClick={() => router.push("/regalo")}
        >
          Regalo
        </Button>
      </div>

      <Break isOrange="false">
        <RingsSvg stroke="#ac8100"></RingsSvg>
      </Break>
      <h2 className="where__title">02 - 11 - 2024</h2>
      <div className="where__remain">
        <CountdownTimer targetDate={endDate} />
      </div>
    </div>
  );
};

export default Where2;
