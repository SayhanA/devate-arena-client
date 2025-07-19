import { twMerge } from "tailwind-merge";

const TextXL = ({ className = "", children = null, ...props }) => {

  return (
    <p
      className={twMerge(`text-text-lite text-xl normal-case ${className}`)}
      {...props}
    >
      {children}
    </p>
  );
};

export default TextXL;
