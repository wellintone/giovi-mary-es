import React from "react";

const Break = ({ children, isOrange = false }: any) => {
  return (
    <span className="break">
      <div className={`break-svg${isOrange ? "-orange" : ""}`}>{children}</div>
    </span>
  );
};

export default Break;
