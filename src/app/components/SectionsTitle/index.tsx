import React, { FC } from "react";
import Subtitle from "./Subtitle";
import MainTitle from "./MainTitle";
import FollowLine from "../FollowLine/FollowLine";

export interface ISectionTitle {
  subtitle?: string;
  mainTitle?: string;
  showFollowLine?: boolean;
}

const SectionTitle: FC<ISectionTitle> = ({
  subtitle = "Subtitle",
  mainTitle = "MainTitle",
  showFollowLine = true,
}) => {
  return (
    <div className="sectionTitle">
      <Subtitle subtitle={subtitle} />
      <MainTitle mainTitle={mainTitle} />
      {showFollowLine && <FollowLine />}
    </div>
  );
};

export default SectionTitle;
