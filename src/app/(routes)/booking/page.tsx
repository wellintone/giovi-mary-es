"use client";
import React from "react";
import Hotels from "./_partials/Hotels";
import BookingData from "./booking.json";

const Booking = () => {
  return (
    <div className="booking">
      <h2 className="booking__title">Dove dormire</h2>
      <div className="booking__desc">
        <div>
          Se hai bisogno di pernottare a Valencia, abbiamo contattato delle
          strutture per avere dei piccoli sconti. Sentiti libero di cercare
          alternative (Booking, AirBnB etc...), siamo lieti di aiutarvi nella
          ricerca.
        </div>

        {/*   <div>
          Sentiti libero di cercare alternative (Booking, AirBnB etc...), siamo
          lieti di aiutarvi nella ricerca.
        </div> */}
      </div>
      {BookingData.map((booking: any) => {
        return (
          <Hotels
            key={booking.id}
            id={booking.id}
            name={booking.name}
            code={booking.code}
            how_to_use={booking.how_to_use}
            prices={booking.prices}
            website={booking.website}
            sub_hotel={booking.sub_hotel}
          />
        );
      })}
    </div>
  );
};

export default Booking;
