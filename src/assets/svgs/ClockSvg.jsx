import React from "react";
import { twMerge } from "tailwind-merge";

const ClockSvg = ({ className = "" }) => {
  return (
    <svg
      className={twMerge(`h-12 w-12 text-purple-600 mx-auto mb-4 ${className}`)}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default ClockSvg;
