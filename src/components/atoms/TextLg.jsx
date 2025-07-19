import { twMerge } from "tailwind-merge";

const TextLg = ({ className = "", children = null, ...props }) => {
  return (
    <div className={twMerge(`text-text-lite text-lg ${className}`)} {...props}>
      {children}
    </div>
  );
};

export default TextLg;
