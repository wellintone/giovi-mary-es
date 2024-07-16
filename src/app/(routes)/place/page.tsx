import React from "react";
import Image from "next/image";
import ChurchImg from "/public/img/church.jpg";
import Location from "/public/img/ricevimento.webp";

const Place = () => {
  return (
    <>
      <div className="place">
        <h2 className="place__title">DOVE CI SPOSIAMO</h2>
        <div className="place__data">
          <div className="place__data-title">Chiesa</div>
          <div className="place__data-cont-def">
            <div className="place__data-def">Iglesia de San Bartolomé</div>
            <div className="place__data-church">
              <Image
                className="place__data-church__img"
                src={ChurchImg}
                fill
                alt="church"
              />
            </div>
          </div>
        </div>
        <div className="place__data">
          <div className="place__data-title">Orario</div>
          <div className="place__data-cont-def">
            <div className="place__data-def">H 12:00</div>
            <div className="place__data-def">
              Vi consigliamo di arrivare almeno 15 minuti prima dell inizio
              della cerimonia
            </div>
          </div>
        </div>
        <div className="place__data">
          <div className="place__data-title">Indirizzo</div>
          <div className="place__data-cont-def">
            <div className="place__data-def">
              C. Major, 61T, 46110 Godella, Valencia, Spagna
            </div>
            <iframe
              className="place__data-map"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=C.%20Major,%2061T,%20Godella,%20Valencia,%20Spagna%20Valencia+(Iglesia%20SAN%20BARTOLOME)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>{" "}
          </div>
        </div>
      </div>
      <div className="receiving">
        <h2 className="receiving__title">DOVE CI FESTEGGIAMO</h2>
        <div className="receiving__data">
          <div className="receiving__data-title">Luogo Ricevimento</div>
          <div className="receiving__data-cont-def">
            <div className="receiving__data-def">Masia del Carmen</div>
            <div className="receiving__data-church">
              <Image
                className="receiving__data-church__img"
                src={Location}
                fill
                alt="church"
              />
            </div>
          </div>
        </div>
        <div className="receiving__data">
          <div className="receiving__data-title">Orario</div>
          <div className="receiving__data-cont-def">
            <div className="receiving__data-def">H 12:00</div>
          </div>
        </div>
        <div className="receiving__data">
          <div className="receiving__data-title">Indirizzo</div>
          <div className="receiving__data-cont-def">
            <div className="receiving__data-def">
              CV-310, s/n, 46002 Masarrochos, Valencia, Spagna
            </div>
            <iframe
              className="receiving__data-map"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20+(Masia%20del%20Carmen)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Place;
