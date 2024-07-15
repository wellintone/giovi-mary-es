import React from "react";
import BookingData from "../booking.json";
import { info } from "sass";

const Hotels = ({ id, name, code, discount, website }: any) => {
  return (
    <div className="hotels">
      <div className="hotels__discount">CON IL NOSTRO SCONTO</div>
      <h2 className="hotels__title">
        <div className="hotels__title-number">{id}</div>
        <div className="hotels__title-name">{name}</div>
      </h2>
      <div className="hotels__body">
        <div className="code">
          <div className="code__name">Código:</div>
          <div className="code__body">
            <div className="code__body-value">{code.name}</div>
            <div className="code__body-more-info">{code.description}</div>
          </div>
        </div>
        <div className="discount">
          <div className="discount__name">Descuento:</div>
          <div className="discount__body">
            <div className="discount__body-value">{discount.name}</div>
            <div className="discount__body-more-info">{discount.moreInfo}</div>
            <ol className="discount__body-list">
              {discount.infos.map((info: any, ind: number) => (
                <li key={ind}>{info}</li>
              ))}
            </ol>
          </div>
        </div>
        {website && (
          <div className="website">
            <div className="website__name">Website:</div>
            <a className="website__value" href={website} target="_blank">
              {website}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hotels;
