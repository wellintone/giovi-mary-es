import React from "react";
import AttachmentBg from "../AttachmentBg/AttachmentBg";
import Button from "../Buttons/button";
import { BUTTON_VARIANTS, BUTTON_SIZES } from "../Buttons/enums";
import Programmer from "/public/img/programmer.jpg";
import Subtitle from "../SectionsTitle/Subtitle";

const LetsTalk = () => {
  return (
    <section className="section">
      <div className="letsTalk">
        <AttachmentBg
          className="letsTalk__fixedImage"
          bg={Programmer}
        ></AttachmentBg>

        <Subtitle
          subtitle=" We Develop Digital Future"
          className="letsTalk__subtitle"
        ></Subtitle>
        <div className="letsTalk__slogan-content">
          <h1 className="letsTalk__slogan-lets">Let's</h1>
          <h1 className="letsTalk__slogan-talk">Talk?</h1>
        </div>
        <div className="letsTalk__slogan-buttons">
          <Button variant={BUTTON_VARIANTS.Primary} size={BUTTON_SIZES.Large}>
            800 1234 567
          </Button>
          <Button variant={BUTTON_VARIANTS.Secondary} size={BUTTON_SIZES.Large}>
            Make an enquire
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
