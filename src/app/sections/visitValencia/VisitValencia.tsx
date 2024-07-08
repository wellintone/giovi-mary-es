"use client";
import React, { useEffect, useState } from "react";
import VisitPlace from "./_partials/VisitPlace";
import VisitValenciaData from "./vistValencia.json";
import VisitEatValenciaData from "./visitEatValencia.json";
import Bg from "@/app/components/Svgs/Bg";
import VisitEat from "./_partials/VisitEat";

const VisitValencia = () => {
  return (
    <div className="visitValencia">
      <div className="visitValencia__tour">
        <h2 className="visitValencia__title">Valencia da vedere</h2>
        {VisitValenciaData.map((visit: any) => (
          <VisitPlace
            key={visit.id}
            name={visit.name}
            description={visit.description}
            maps={visit.maps}
            image={visit.image}
          />
        ))}
      </div>
      <div className="visitValencia__eat">
        <h2 className="visitValencia__title">Valencia da mangiare</h2>
        {VisitEatValenciaData.map((visit: any) => (
          <VisitEat
            key={visit.id}
            name={visit.name}
            description={visit.description}
            maps={visit.maps}
            image={visit.image}
          />
        ))}
      </div>
    </div>
  );
};

export default VisitValencia;
