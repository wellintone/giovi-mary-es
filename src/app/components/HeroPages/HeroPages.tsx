import React from "react";
import AttachmentBg from "../AttachmentBg/AttachmentBg";
import NextBreadcrumb from "../BreadCrumb/BreadCrumb";

const HeroPages = ({ bg, titlePage }: any) => {
  return (
    <div className="heroPages">
      <AttachmentBg className="heroPages__bg" bg={bg} />
      <div className="heroPages__overlay"></div>
      <div className="heroPages__desc">
        <h2 className="heroPages__desc-title">{titlePage}</h2>
        <div className="heroPages__desc-breadCrumbs">
          <NextBreadcrumb
            homeElement={"Home"}
            separator={<span> | </span>}
            activeClasses="heroPages__desc-activate"
            containerClasses="heroPages__desc-container"
            listClasses="heroPages__desc-list"
            capitalizeLinks
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPages;
