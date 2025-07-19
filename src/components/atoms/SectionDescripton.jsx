import React from "react";
import { twMerge } from "tailwind-merge";

const SectionDescripton = ({ className = "", children = null, ...props }) => {

  return (
    <p
      className={twMerge(`text-text-lite mx-auto max-w-[641px] ${className}`)}
      {...props}
    >
      {children}
    </p>
  );
};

export default SectionDescripton;
