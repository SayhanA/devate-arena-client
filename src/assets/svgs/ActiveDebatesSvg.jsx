import React from "react";
import { twMerge } from "tailwind-merge";

const ActiveDebatesSvg = ({className=""}) => {
  return (
    <svg
      className={twMerge(`h-12 w-12 text-blue-600 mx-auto mb-4 ${className}`)}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  );
};

export default ActiveDebatesSvg;
