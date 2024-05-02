import React from "react";

const Place = () => {
  return (
    <div className="place">
      <div className="place__data">
        <div className="place__data-title">Orario</div>
        <div className="place__data-def">11:00</div>
      </div>
      <div className="place__data">
        <div className="place__data-title">Indirizzo</div>
        <div className="place__data-def">
          Piazza del Municipio, 96017 Noto SR, Italia
        </div>
        <iframe
          className="place__data-map"
          /* width="520"
          height="400" */

          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Pla%C3%A7a%20de%20Sant%20Vicent%20Ferrer,%2040,%20Ciutat%20Vella,%2046003%20Val%C3%A8ncia,%20Valencia,%20Spagna%20+(Pla%C3%A7a%20de%20Sant%20Vicent%20Ferrer,%2040,%20Ciutat%20Vella,%2046003%20Val%C3%A8ncia,%20Valencia,%20Spagna)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>{" "}
      </div>
    </div>
  );
};

export default Place;
