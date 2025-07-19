'use client'

import { useEffect, useRef, useState } from "react";
import useTheme from "@/hooks/useThemes";
import Button from "./Button";

const ThemeToggle = ({ className = "" }) => {
  const [theme, setTheme] = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const themeIcons = {
    light: "☀️",
    dark: "🌙",
    system: "🖥️",
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="hover:bg-border/50 flex w-full items-center gap-2 border-0 px-2 py-2"
        variant="outline"
      >
        <span className="text-base">{themeIcons[theme] || "🎨"}</span>
        {/* <span className="capitalize">{theme}</span>{" "} */}
      </Button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-full min-w-40 rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="py-1">
            {["light", "dark", "system"].map((option) => (
              <button
                key={option}
                onClick={() => {
                  setTheme(option);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center px-4 py-2 text-left text-sm ${
                  theme === option
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                }`}
                aria-current={theme === option ? "true" : undefined}
              >
                <span className="mr-2 text-base">{themeIcons[option]}</span>
                <span className="capitalize">{option}</span>{" "}
                {/* Translated option */}
                {theme === option && (
                  <svg
                    className="ml-auto h-4 w-4 text-blue-500 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
