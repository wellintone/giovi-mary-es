import React, { useEffect, useState } from "react";

const SimpleTab = () => {
  const [tab, setTab] = useState(1);

  return (
    <div className="simpleTab">
      <div className="simpleTab__btnContainer">
        <button
          className={`${tab === 1 ? "btn-active" : ""}`}
          onClick={() => setTab(1)}
        >
          Biography
        </button>
        <button
          className={`${tab === 2 ? "btn-active" : ""}`}
          onClick={() => setTab(2)}
        >
          Education
        </button>
        <button
          className={`${tab === 3 ? "btn-active" : ""}`}
          onClick={() => setTab(3)}
        >
          Awards
        </button>
      </div>
      <div className="simpleTab__contentContainer">
        <div
          className={`simpleTab__contentContainer-content ${
            tab === 1 ? "active" : ""
          }`}
        >
          Biography utate ons amet ravida haretra nuam the duru miss uctus the
          drana accumsan justo aliquam sit amet auctor orci done vitaerisus
          duise the nisan sapien in the miss rana duru silver sapien.
        </div>
        <div
          className={`simpleTab__contentContainer-content ${
            tab === 2 ? "active" : ""
          }`}
        >
          Education utate ons amet ravida haretra nuam the duru miss uctus the
          drana accumsan justo aliquam sit amet auctor orci done vitaerisus
          duise the nisan sapien in the miss rana duru silver sapien.
        </div>
        <div
          className={`simpleTab__contentContainer-content ${
            tab === 3 ? "active" : ""
          }`}
        >
          Awards utate ons amet ravida haretra nuam the duru miss uctus the
          drana accumsan justo aliquam sit amet auctor orci done vitaerisus
          duise the nisan sapien in the miss rana duru silver sapien.
        </div>
      </div>
    </div>
  );
};

export default SimpleTab;
