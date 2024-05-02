import React, { FC, HTMLAttributes } from "react";

export interface IAttachmentBg {
  bg: { src: string };
}

const AttachmentBg: FC<IAttachmentBg & HTMLAttributes<HTMLElement>> = ({
  className,
  bg,
  children,
}) => {
  return (
    <div
      className={`${className} fixedBg`}
      style={{
        backgroundImage: `url(${bg?.src || bg})`,
        /*  filter: "grayscale(1) contrast(1)", */
      }}
    >
      {children}
    </div>
  );
};

export default AttachmentBg;
