import React from "react";

export interface IUnorderedList {
  technologies: any[];
}

function UnorderedList({ technologies }: IUnorderedList) {
  return (
    <ul className="unorderedList">
      {technologies?.map((el, key) => (
        <li key={key}>{el}</li>
      ))}
    </ul>
  );
}

export default UnorderedList;
