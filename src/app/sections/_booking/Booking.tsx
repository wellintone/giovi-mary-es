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
          strutture per avere dei piccoli sconti.
        </div>
        <div>
          Sentiti libero di cercare alternative (Booking, AirBnB etc...), siamo
          lieti di aiutarvi nella ricerca.
        </div>
      </div>
      {BookingData.map((booking: any) => {
        return (
          <Hotels
            key={booking.id}
            id={booking.id}
            name={booking.name}
            code={booking.code}
            discount={booking.discount}
            website={booking.website}
          />
        );
      })}
    </div>
  );
};

export default Booking;
