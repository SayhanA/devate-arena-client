import LogoSvg from "@/assets/svgs/LogoSvg";
import Link from "next/link";
import React from "react";
import ThemeToggle from "../atoms/ThemeToggle";
import Button from "../atoms/Button";
import { CiTrophy } from "react-icons/ci";

const Header = () => {
  return (
    <header className="sm:px-10 py-5 shadow-shadow shadow-xl flex justify-between items-center">
      <Link
        href="/"
        className="text-xl font-bold flex items-center gap-1 text-text-dark"
      >
        <LogoSvg /> DebtArena
      </Link>
      <nav>
        <Link
          href="/scoreboard"
          className="text-text-lite flex gap-1 items-center"
        >
          <CiTrophy className="text-2xl font-bold" /> ScoreBoard
        </Link>
      </nav>
      <div className="flex gap-2">
        <ThemeToggle />
        <Link
          href="login"
          className="px-4 py-2 border-0 hover:bg-blue-500 rounded-md transition-all hover:text-white"
        >
          Login
        </Link>
        <Link
          href="register"
          className="px-4 py-2 border-0 hover:bg-blue-500 rounded-md transition-all hover:text-white"
        >
          SignUp
        </Link>
      </div>
    </header>
  );
};

export default Header;
