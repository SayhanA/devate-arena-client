import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  secondary = false,
  danger = false,
  error = false,
  loading = false,
  disabled = false,
  "aria-label": ariaLabel,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer outline-none h-fit py-3 px-8";

  let variantClass = "";

  if (danger || error) {
    variantClass =
      "bg-red-600 text-text-dark hover:bg-red-700 focus:ring-red-600";
  } else if (secondary) {
    variantClass =
      "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400";
  } else if (loading) {
    variantClass =
      "bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-500 cursor-wait";
  } else {
    variantClass =
      "text-text-dark hover:bg-blue-700 focus:ring-blue-600 border border-border hover:border-transparent";
  }

  const merged = twMerge(base, variantClass, className);

  const hasAccessibleName = Boolean(children) || Boolean(ariaLabel);
  if (process.env.NODE_ENV === "development" && !hasAccessibleName) {
    console.warn(
      "[Accessibility Warning] <Button /> rendered without accessible name. Please provide visible children or an aria-label.",
    );
  }

  const buttonProps = {
    type,
    onClick,
    className: merged,
    disabled: loading || disabled,
    "aria-label": ariaLabel,
    ...props,
  };

  return <button {...buttonProps}>{loading ? "Loading..." : children}</button>;
};

export default Button;
