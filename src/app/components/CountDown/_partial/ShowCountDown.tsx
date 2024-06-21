import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";

export const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <div className="show-counter">
      <div className="countdown-link">
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />

        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />

        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />

        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </div>
    </div>
  );
};
