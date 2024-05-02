import React, { FC } from "react";

export interface IMainTitle {
  mainTitle: string;
}

const MainTitle: FC<IMainTitle> = ({ mainTitle }) => {
  return <h2 className="mainTitle">{mainTitle}</h2>;
};

export default MainTitle;
