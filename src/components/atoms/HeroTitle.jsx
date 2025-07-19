import { twMerge } from "tailwind-merge";

const HeroTitle = ({ className = "", children = null, ...props }) => {
  return (
    <h1
      className={twMerge(
        `text-text-dark mb-10 max-w-[640px] text-center text-5xl leading-[60px] font-bold ${className}`
      )}
      style={{ wordSpacing: ".5rem" }}
      {...props}
    >
      {children}
    </h1>
  );
};

export default HeroTitle;
