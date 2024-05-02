import Break from "@/app/components/Break/Break";
import Envelope from "@/app/components/Svgs/Envelope";
import Title from "@/app/components/Title/Title";
import React from "react";

const Invitation = () => {
  return (
    <div className="invitation">
      <Break isOrange={true}>
        <Envelope />
      </Break>
      <Title text="Il nostro invito" isOrange={false} />
      <p className="invitation__desc">
        Siamo lieti di invitarti al nostro matrimonio
      </p>
    </div>
  );
};

export default Invitation;
