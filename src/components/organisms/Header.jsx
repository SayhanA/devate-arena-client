'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import LogoSvg from '@/assets/svgs/LogoSvg';
import { CiTrophy, CiMenuFries, CiCircleRemove } from 'react-icons/ci';
import ThemeToggle from '../atoms/ThemeToggle';
import ActiveLink from '../atoms/ActiveLink';

const navItems = [
  { href: "/debates", label: "Browse Debates" },
  { href: "/create-debate", label: "Create Debate" },
  { href: "/scoreboard", label: "Scoreboard", icon: <CiTrophy /> },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background text-text-dark shadow-md shadow-shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold flex items-center gap-2 text-text-dark hover:text-blue-500 transition"
        >
          <LogoSvg className="w-6 h-6 text-text-dark" />
          <span className='text-text-dark'>DebtArena</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <ActiveLink
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-blue-600 transition-colors text-text-lite"
            >
              {item.label}
            </ActiveLink>
          ))}
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/login"
            className="px-4 py-2 rounded-md border border-gray-300 hover:bg-blue-500 hover:text-white text-text-dark transition text-sm"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition text-sm"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-[--color-text-dark]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <CiCircleRemove /> : <CiMenuFries />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-4 pb-6 pt-2 space-y-4 bg-[--color-card-bg] text-[--color-text-lite] border-t border-[--color-border] transition-all duration-300 ${
          isOpen ? 'max-h-[300px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        {navItems.map(({ href, label, icon }) => (
          <ActiveLink
            key={href}
            href={href}
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-500 transition"
          >
            <div className="flex items-center gap-2 text-sm">
              {icon && <span className="text-xl">{icon}</span>} {label}
            </div>
          </ActiveLink>
        ))}

        <ThemeToggle />

        <Link
          href="/login"
          className="block text-sm hover:text-blue-500"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
        <Link
          href="/register"
          className="block text-sm hover:text-blue-500"
          onClick={() => setIsOpen(false)}
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
