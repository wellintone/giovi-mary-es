import React from "react";

const Title = ({ text, isOrange }: any) => {
  return (
    <h2 className={`title${isOrange ? "" : "-black"}`}>{text || "Title"}</h2>
  );
};

export default Title;
