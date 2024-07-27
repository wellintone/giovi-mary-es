import React from "react";
import Image from "next/image";
import ChurchImg from "/public/img/church.jpg";
import Location from "/public/img/ricevimento.webp";

const Ubicacion = () => {
  return (
    <>
      <div className="ubicacion">
        <h2 className="ubicacion__title">DÓNDE NOS CASAMOS </h2>
        <div className="ubicacion__data">
          <div className="ubicacion__data-title">IGLESIA</div>
          <div className="ubicacion__data-cont-def">
            <div className="ubicacion__data-def">Iglesia de San Bartolomé</div>
            <div className="ubicacion__data-church">
              <Image
                className="ubicacion__data-church__img"
                src={ChurchImg}
                fill
                alt="church"
              />
            </div>
          </div>
        </div>
        <div className="ubicacion__data">
          <div className="ubicacion__data-title">HORARIO</div>
          <div className="ubicacion__data-cont-def">
            <div className="ubicacion__data-def">12:00h</div>
            <div className="ubicacion__data-def">
              Os aconsejamos llegar 15 minutos antes de la ceremonia
            </div>
          </div>
        </div>
        <div className="ubicacion__data">
          <div className="ubicacion__data-title">DIRECCIÓN</div>
          <div className="ubicacion__data-cont-def">
            <div className="ubicacion__data-def">
              C. Major, 61T, 46110 Godella, Valencia, Spagna
            </div>
            <iframe
              className="ubicacion__data-map"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=C.%20Major,%2061T,%20Godella,%20Valencia,%20Spagna%20Valencia+(Iglesia%20SAN%20BARTOLOME)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>{" "}
          </div>
        </div>
      </div>
      <div className="receiving">
        <h2 className="receiving__title">DÓNDE CELEBRAMOS</h2>
        <div className="receiving__data">
          <div className="receiving__data-title">LUGAR DEL CONVITE</div>
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
          <div className="receiving__data-title">HORARIO</div>
          <div className="receiving__data-cont-def">
            <div className="receiving__data-def">H 14:00</div>
          </div>
        </div>
        <div className="receiving__data">
          <div className="receiving__data-title">DIRECCIÓN</div>
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

export default Ubicacion;
