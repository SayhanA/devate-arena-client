import { twMerge } from "tailwind-merge";

const TextSM = ({ className = "", children = null, ...props }) => {

  return (
    <p className={twMerge(`text-text-lite text-sm ${className}`)} {...props}>
      {children}
    </p>
  );
};

export default TextSM;
