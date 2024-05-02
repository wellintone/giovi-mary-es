import React, { FC } from "react";

export interface ISubtitle {
  subtitle: string;
  className: string;
}

const Subtitle: FC<ISubtitle> = ({ subtitle, className }) => {
  return <h3 className={`subtitle ${className}`}>{subtitle}</h3>;
};

export default Subtitle;
