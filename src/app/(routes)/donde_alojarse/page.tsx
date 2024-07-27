"use client";
import React from "react";
import Hotels from "./_partials/Hotels";
import donde_alojarseData from "./booking.json";

const Donde_alojarse = () => {
  return (
    <div className="donde_alojarse">
      <h2 className="donde_alojarse__title">Dónde alojarse</h2>
      <div className="donde_alojarse__desc">
        <div>
          Si necesitas reservar un hotel en Valencia, hemos contactado a algunos
          establecimientos para conseguir pequeños descuentos. No dudes en
          buscar alternativas (Booking, Airbnb, etc.) y estaremos encantados de
          ayudarte con tu búsqueda.
        </div>

        {/*   <div>
          Sentiti libero di cercare alternative (donde_alojarse, AirBnB etc...), siamo
          lieti di aiutarvi nella ricerca.
        </div> */}
      </div>
      {donde_alojarseData.map((donde_alojarse: any) => {
        return (
          <Hotels
            key={donde_alojarse.id}
            id={donde_alojarse.id}
            name={donde_alojarse.name}
            code={donde_alojarse.code}
            how_to_use={donde_alojarse.how_to_use}
            prices={donde_alojarse.prices}
            website={donde_alojarse.website}
            sub_hotel={donde_alojarse.sub_hotel}
          />
        );
      })}
    </div>
  );
};

export default Donde_alojarse;
