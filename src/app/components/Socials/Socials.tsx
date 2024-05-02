import React from "react";

const Socials = ({ children }: any) => {
  return (
    <div className="socials">
      {children.map((social: any, key: number) => (
        <div key={key} className="socials-wrapper">
          {social}
        </div>
      ))}
    </div>
  );
};

export default Socials;
