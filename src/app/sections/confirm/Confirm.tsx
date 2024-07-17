"use client";
import React, { useCallback, useState } from "react";
import Bg from "@/app/components/Svgs/Bg";
import Break from "@/app/components/Break/Break";
import SendEmail from "@/app/components/Svgs/SendEmail";

const Confirm = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    companion: "",
    note: "",
  });

  const onChangeValue = useCallback((e: any) => {
    setValue((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }, []);
  return (
    <div className="confirm">
      <div className="confirm__bg">
        <Bg className={"confirm__bg-svg"} />
      </div>
      <h2 className="confirm__title">Conferma la tua presenza</h2>

      <Break isOrange="false">
        <SendEmail stroke="#fff"></SendEmail>
      </Break>

      {/*  <ConfirmForm /> */}

      {/*  <form className="confirm__form" action="">
        <InputField
          className="confirm__input"
          label="Nome e Cognome"
          name="name"
          value={value.name}
          setValue={(e: any) => onChangeValue(e)}
        />
        <InputField
          className="confirm__input"
          label="Indirizzo email"
          name="email"
          value={value.email}
          setValue={(e: any) => onChangeValue(e)}
        />
        <InputField
          className="confirm__input"
          label="Accompagnatori"
          name="companion"
          value={value.companion}
          setValue={(e: any) => onChangeValue(e)}
        />
        <InputField
          className="confirm__input"
          label="Note (Opzionale)"
          name="note"
          value={value.note}
          setValue={(e: any) => onChangeValue(e)}
        />

        <Button
          variant={BUTTON_VARIANTS.Secondary}
          className="confirm__btn"
          type="submit"
          size={BUTTON_SIZES.Large}
        >
          Invia
        </Button>
      </form> */}
      {/* <div className="confirm__date">2 Nov 2024</div>
      <div className="confirm__remain">
        <div className="confirm__remain-date">19 Giorni</div>
        <div className="confirm__remain-date">12 Ore</div>
        <div className="confirm__remain-date">00 Minuti</div>
      </div>
      <div className="confirm__desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsa
        inventore eaque expedita accusantium mollitia dignissimos, quibusdam
        provident non aperiam commodi soluta fugit maiores, quia sint, dolore
        incidunt quam consectetur?
      </div> */}
    </div>
  );
};

export default Confirm;
