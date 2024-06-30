import Break from "@/app/components/Break/Break";
import ChurchSvg from "@/app/components/Svgs/Church";
import Title from "@/app/components/Title/Title";
import Location from "/public/img/ricevimento.webp";
import React from "react";
import Image from "next/image";

const Receiving = () => {
  return (
    <div className="receiving">
      {/* <div className="receiving_church">
        <Title text="La chiesa" isOrange={false} />
        <p className="church__desc">Cattedrale di Santa maria</p>
        <Break isOrange={true}>
          <ChurchSvg />
        </Break>
        <div className="receiving__church__img">
          <Image src={Location} fill alt="church" />
        </div>
      </div> */}
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
          {/*  <div className="receiving__data-def">
            Vi consigliamo di arrivare almeno 15 minuti prima dell'inizio della
            cerimonia
          </div> */}
        </div>
      </div>
      <div className="receiving__data">
        <div className="receiving__data-title">Indirizzo</div>
        <div className="receiving__data-cont-def">
          <div className="receiving__data-def">
            CV-310, s/n, 46002 Masarrochos, Valencia, Spagna
          </div>
          {/*  <iframe
            className="receiving__data-map"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=C.%20Major,%2061T,%20Godella,%20Valencia,%20Spagna%20Valencia+(Iglesia%20SAN%20BARTOLOME)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>{" "} */}
          <iframe
            className="receiving__data-map"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20+(Masia%20del%20Carmen)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>{" "}
          {/*  <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=7b316984d5279b341322e49e488cc63898d28f6a"
          ></script>
        */}
        </div>
      </div>
    </div>
  );
};

export default Receiving;
