"use client";
import React, { useEffect, useState } from "react";
import VisitPlace from "./_partials/VisitPlace";
import VisitValenciaData from "./vistValencia.json";

const VisitValencia = () => {
  const [visitVal, setvisitVal] = useState([]);
  useEffect(() => {
    if (VisitValenciaData) {
      setvisitVal(VisitValenciaData);
    }
    console.log("visit", VisitValenciaData);
  }, []);
  return (
    <div className="visitValencia">
      <h2 className="visitValencia__title">Valencia da vedere</h2>
      {visitVal.map((visit: any) => (
        <VisitPlace
          key={visit.id}
          name={visit.name}
          description={visit.description}
          maps={visit.maps}
          image={visit.image}
        />
      ))}

      <h2 className="visitValencia__title">Valencia da mangiare</h2>
    </div>
  );
};

export default VisitValencia;
