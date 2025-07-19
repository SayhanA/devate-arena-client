import React from "react";
import { twMerge } from "tailwind-merge";

const SectionTitle = ({ className = "", children = null, ...props }) => {

  return (
    <strong
      className={twMerge(
        `text-text-dark font-semibold md:text-[40px] ${className}`,
      )}
      {...props}
    >
      {children}
    </strong>
  );
};

export default SectionTitle;
