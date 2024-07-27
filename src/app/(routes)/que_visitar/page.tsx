"use client";

import VisitPlace from "./_partials/VisitPlace";
import VisitValenciaData from "./vistValencia.json";

const VisitValencia = () => {
  return (
    <div className="visitValencia">
      <div className="visitValencia__tour">
        <h2 className="visitValencia__title">Qúe visitar</h2>
        {VisitValenciaData.map((visit: any) => (
          <VisitPlace
            key={visit.id}
            name={visit.name}
            maps={visit.maps}
            image={visit.image}
          />
        ))}
      </div>
    </div>
  );
};

export default VisitValencia;
