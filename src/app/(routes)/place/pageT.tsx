import Image from "next/image";
import React from "react";
import ChurchImg from "/public/img/church.jpg";

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

const Place = ({
  id,
  name,
  code,
  how_to_use,
  prices,
  website,
  sub_hotel,
}: any) => {
  /*  const updatedString = replacePlaceholder(
    how_to_use.desc,
    "[placeHolder]",
    `<a href="mailto:${how_to_use.email}">${how_to_use.email}</a>`
  ); */

  return (
    <div className="places">
      <h2 className="places__title">
        <div className="places__title-name">{name}</div>
      </h2>
      <div className="places__body">
        <div className="code">
          <div className="code__name">CHIESA:</div>
          <div className="code__body">Iglesia de San Bartolomé</div>
          {/* <Image
            className="place__data-church__img"
            src={ChurchImg}
            fill
            alt="church"
          /> */}
        </div>

        <div className="code">
          <div className="code__name">CODICE:</div>
          <div className="code__body">
            <div className="code__body-code">codice</div>
          </div>
        </div>
        <div className="code">
          <div className="code__name">COME FUNZIONA</div>
          <div className="code__body">
            <div
              className="code__body-value"
              /* dangerouslySetInnerHTML={{
                __html: formatPercentage(updatedString),
              }} */
            >
              Danger
            </div>
          </div>
        </div>
        <div className="code">
          <div className="code__name">PREZZI</div>
          <div className="code__body">
            orezzi
            {/*  {prices.length
              ? prices.map((price: any, ind: number) => (
                  <div className="listItem" key={ind}>
                    {price.label}:
                    <div className="listItem__price">{price.price}</div>
                  </div>
                ))
              : "Consultare sul sito internet dell’hotel."} */}
          </div>
        </div>

        {/* <ol className="sub_hotel">
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
        </ol> */}
      </div>
    </div>
  );
};

export default Place;
