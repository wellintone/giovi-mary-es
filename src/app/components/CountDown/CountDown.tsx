"use client";
import React from "react";
import { ShowCounter } from "./_partial/ShowCountDown";
import { ExpiredNotice } from "./_partial/ExpiredNotice";
import { useCountdown2 } from "@/app/hooks/useCountDown2";
import useCountdownDay from "@/app/hooks/useCoundDownDay";

export const CountdownTimer = ({ targetDate }: any) => {
  /* const [days, hours, minutes, seconds] = useCountdown2(targetDate); */

  const daysLeft = useCountdownDay(targetDate);

  return <div className="show-counter">Mancano solo {daysLeft} giorni</div>;

  /* if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  } */
};
