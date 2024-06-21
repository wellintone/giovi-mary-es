import React from "react";

const Place = () => {
  return (
    <div className="place">
      <div className="place__data">
        <div className="place__data-title">Orario</div>
        <div className="place__data-def">12:00</div>
      </div>
      <div className="place__data">
        <div className="place__data-title">Indirizzo</div>
        <div className="place__data-def">
          Av. del Regne de València, 60, L Eixample, 46005 València, Valencia,
          Spagna
        </div>
        <iframe
          className="place__data-map"
          /* width="520"
          height="400" */

          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Av.%20del%20Regne%20de%20Val%C3%A8ncia%2C%2060%2C%20L'Eixample%2C%2046005%20Val%C3%A8ncia%2C%20Valencia%2C%20Spagna&t=&z=14&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default Place;
