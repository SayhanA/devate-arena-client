'use client'
import { NavLink, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const ActiveLink = ({ to = "/", children, className = "", ...props }) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <NavLink
      to={to}
      className={twMerge(
        `transition-colors duration-200 ${path === to ? "font-semibold text-blue-600" : "text-text-dark"} ${className}`,
      )}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
