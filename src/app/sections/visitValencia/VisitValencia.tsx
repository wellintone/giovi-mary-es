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
      <iframe
        className="form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSdzxwrKe5Czkg_JzhspURHVo7xNPOOHe3p09TTuhVCPzfgdoA/viewform?embedded=true"
        /*  width="640"
        height="1061" */
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Caricamento…
      </iframe>
    </div>
  );
};

export default VisitValencia;
