import React from "react";
import Event from "@/components/Event/Event";
import Events from "../../db/static/Events.json";
import Section from "@/components/Section/Section";
import { DigitalEventsType } from "@/types/DigitalEvents";

const DigitalEvents = () => {
  return (
    <Section
      className="bg-light"
      subtitle="Upcoming"
      mainTitle="Digital Events"
    >
      {Events.map(
        (
          { name, address, day, month, hour }: DigitalEventsType,
          key: number
        ) => (
          <Event
            key={key}
            name={name}
            address={address}
            day={day}
            hour={hour}
            month={month}
          />
        )
      )}
    </Section>
  );
};

export default DigitalEvents;
