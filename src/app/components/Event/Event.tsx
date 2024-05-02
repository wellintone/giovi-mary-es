import React, { FC } from "react";
import Button from "../Buttons/button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "../Buttons/enums";

export interface IEvent {
  day: number;
  month: string;
  hour: string;
  name: string;
  address: string;
}

const Event: FC<IEvent> = ({ day, month, hour, name, address }) => {
  return (
    <div className="event">
      <div className="event__date">
        <div className="event__date-day">{day}</div>
        <div className="event__date-month">
          <div className="event__date-year">{month}</div>
          <div className="event__date-hour">{hour}</div>
        </div>
      </div>
      <div className="event__name">{name}</div>
      <div className="event__address">{address}</div>
      <div className="event__button">
        <Button variant={BUTTON_VARIANTS.Primary} size={BUTTON_SIZES.Large}>
          Details
        </Button>
      </div>
    </div>
  );
};

export default Event;
