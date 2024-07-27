import React from "react";
import BookingData from "../booking.json";
import { info } from "sass";

const formatPercentage = (text: any) => {
  const percentageRegex = /(\d+%)/;
  return text.replace(percentageRegex, "<strong>$1</strong>");
};

const replacePlaceholder = (template: any, placeholder: any, value: any) => {
  if (template.includes(placeholder)) {
    return template.replace(placeholder, value);
  }
  return template;
};

const Hotels = ({
  id,
  name,
  code,
  how_to_use,
  prices,
  website,
  sub_hotel,
}: any) => {
  const updatedString = replacePlaceholder(
    how_to_use.desc,
    "[placeHolder]",
    `<a href="mailto:${how_to_use.email}">${how_to_use.email}</a>`
  );

  return (
    <div className="hotels">
      <h2 className="hotels__title">
        <div className="hotels__title-name">{name}</div>
      </h2>
      <div className="hotels__body">
        {website && (
          <div className="code">
            <div className="code__name">Website:</div>
            <a className="code__body" href={website} target="_blank">
              {website}
            </a>
          </div>
        )}
        <div className="code">
          <div className="code__name">CÓDIGO:</div>
          <div className="code__body">
            <div className="code__body-code">{code}</div>
          </div>
        </div>
        <div className="code">
          <div className="code__name">CÓMO FUNCIONA</div>
          <div className="code__body">
            <div
              className="code__body-value"
              dangerouslySetInnerHTML={{
                __html: formatPercentage(updatedString),
              }}
            ></div>
          </div>
        </div>
        <div className="code">
          <div className="code__name">PRECIOS</div>
          <div className="code__body">
            {prices.length
              ? prices.map((price: any, ind: number) => (
                  <div className="listItem" key={ind}>
                    {price.label}:
                    <div className="listItem__price">{price.price}</div>
                  </div>
                ))
              : "Consultar la web del hotel."}
          </div>
        </div>

        <ol className="sub_hotel">
          {sub_hotel &&
            sub_hotel.map((info: any, ind: number) => (
              <li key={ind} className="sub_hotel__content">
                <h1 className="sub_hotel__name">{info.name}</h1>
                <div className="sub_hotel__website">
                  <div className="name">website:</div>
                  <a href={info.website} className="value" target="_blank">
                    {info.name}
                  </a>
                </div>
                <iframe
                  className="sub_hotel__indication"
                  id="gmap_canvas"
                  src={info.indication}
                ></iframe>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Hotels;
