"use client";
import VisitEat from "./_partials/VisitEat";
import VisitEatValenciaData from "./visitEatValencia.json";

const VisitValencia = () => {
  return (
    <div className="visitValencia">
      <div className="visitValencia__eat">
        <h2 className="visitValencia__title">Dónde comer </h2>
        {VisitEatValenciaData.map((visit: any) => (
          <VisitEat
            key={visit.id}
            name={visit.name}
            /* description={visit.description} */
            maps={visit.maps}
            image={visit.image}
          />
        ))}
      </div>
    </div>
  );
};

export default VisitValencia;
