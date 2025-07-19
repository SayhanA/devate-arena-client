import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

const Text = ({ className = "", children = null, ...props }) => {
  return (
    <div className={twMerge(`text-text-lite ${className}`)} {...props}>
      {children}
    </div>
  );
};

export default Text;
