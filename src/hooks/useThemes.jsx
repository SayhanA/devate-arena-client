// 'use client'

// /* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from "react";

// const getLocalTheme = () => localStorage.getItem("theme");

// const useTheme = () => {
//   const [theme, setTheme] = useState(getLocalTheme() || "system");

//   const element = document.documentElement;
//   const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

//   const applyTheme = (themeToApply) => {
//     element.classList.remove("dark", "light", "red");

//     switch (themeToApply) {
//       case "dark":
//         element.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//         break;

//       case "light":
//         element.classList.add("light");
//         localStorage.setItem("theme", "light");
//         break;

//       case "red":
//         element.classList.add("red");
//         localStorage.setItem("theme", "red");
//         break;

//       case "system":
//       default:
//         localStorage.removeItem("theme");
//         if (darkQuery.matches) {
//           element.classList.add("dark");
//         } else {
//           element.classList.remove("dark");
//         }
//         break;
//     }
//   };

//   useEffect(() => {
//     applyTheme(theme);
//   }, []);

//   useEffect(() => {
//     applyTheme(theme);
//   }, [theme]);

//   useEffect(() => {
//     const handler = (e) => {
//       if (theme === "system") {
//         applyTheme("system");
//       }
//     };
//     darkQuery.addEventListener("change", handler);
//     return () => darkQuery.removeEventListener("change", handler);
//   }, [theme]);

//   return [theme, setTheme];
// };

// export default useTheme;


'use client'

import { useEffect, useState } from "react";

const getLocalTheme = () => {
  // Only access localStorage on the client side
  if (typeof window !== 'undefined') {
    return localStorage.getItem("theme");
  }
  return null;
};

const useTheme = () => {
  const [theme, setTheme] = useState("system"); // Default to system

  useEffect(() => {
    // Initialize theme only on client side
    setTheme(getLocalTheme() || "system");
  }, []);

  const applyTheme = (themeToApply) => {
    if (typeof window === 'undefined') return;

    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    element.classList.remove("dark", "light", "red");

    switch (themeToApply) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        element.classList.add("light");
        localStorage.setItem("theme", "light");
        break;

      case "red":
        element.classList.add("red");
        localStorage.setItem("theme", "red");
        break;

      case "system":
      default:
        localStorage.removeItem("theme");
        if (darkQuery.matches) {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
        break;
    }
  };

  useEffect(() => {
    if (theme) {
      applyTheme(theme);
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      if (theme === "system") {
        applyTheme("system");
      }
    };
    darkQuery.addEventListener("change", handler);
    return () => darkQuery.removeEventListener("change", handler);
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;