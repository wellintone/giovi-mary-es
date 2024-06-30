import Break from "@/app/components/Break/Break";
import ChurchSvg from "@/app/components/Svgs/Church";
import Title from "@/app/components/Title/Title";
import ChurchImg from "/public/img/church.jpg";
import React from "react";
import Image from "next/image";

const Place = () => {
  return (
    <div className="place">
      {/* <div className="place_church">
        <Title text="La chiesa" isOrange={false} />
        <p className="church__desc">Cattedrale di Santa maria</p>
        <Break isOrange={true}>
          <ChurchSvg />
        </Break>
        <div className="place__church__img">
          <Image src={ChurchImg} fill alt="church" />
        </div>
      </div> */}
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
            Vi consigliamo di arrivare almeno 15 minuti prima dell'inizio della
            cerimonia
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

export default Place;
