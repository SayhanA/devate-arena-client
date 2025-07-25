'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import LogoSvg from '@/assets/svgs/LogoSvg';
import { CiTrophy, CiMenuFries, CiCircleRemove } from 'react-icons/ci';
import ThemeToggle from '../atoms/ThemeToggle';
import ActiveLink from '../atoms/ActiveLink';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../atoms/Button';
import { logout as LogoutApi } from '@/api/authAPIs';
import Image from 'next/image';
import { logout } from '@/redux/slices/authSlice';
import { persistor } from '@/redux/store';
import CustomLink from '../atoms/CustomLink';

const navItems = [
  { href: '/debates', label: 'Browse Debates' },
  { href: '/create-debate', label: 'Create Debate' },
  { href: '/scoreboard', label: 'Scoreboard', icon: <CiTrophy /> },
];

const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await LogoutApi(); // optional API call to invalidate token on backend
      dispatch(logout());
      persistor.purge();
      setIsOpen(false);
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <header className="bg-background text-text-dark shadow-md shadow-shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-5 flex justify-between items-center">
        {/* Logo */}
        <CustomLink
          href="/"
          className="text-xl font-bold flex items-center gap-2 text-text-dark hover:text-blue-500 transition"
        >
          <LogoSvg className="w-6 h-6 text-text-dark" />
          <span className="text-text-dark">DebtArena</span>
        </CustomLink>

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

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />

          {user ? (
            <div className="w-10 h-10 relative group">
              <Image
                src={user?.profilePicture}
                width={50}
                height={50}
                className="rounded-full h-10 w-10 object-cover border-border border-2"
                alt="User profile"
              />
              <div className="w-40 scale-0 p-1 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400 flex-col absolute group-hover:top-14 top-0 end-0 rounded-lg shadow-xl shadow-shadow bg-background">
                <div className="px-5 py-2 flex flex-col gap-3">
                  <CustomLink href={'/profile'}>Profile</CustomLink>
                  <CustomLink href={'/settings'}>Settings</CustomLink>
                </div>
                <Button
                  type="button"
                  alt="Click here to logout."
                  onClick={handleLogout}
                  className="py-2 w-full"
                >
                  Logout
                </Button>
              </div>
            </div>
          ) : (
            ''
          )}

          {!isAuthenticated ? (
            <>
              <CustomLink
                href="/login"
                className="px-4 py-2 rounded-md border border-gray-300 hover:bg-blue-500 hover:text-white text-text-dark transition text-sm"
              >
                Login
              </CustomLink>
              <CustomLink
                href="/register"
                className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition text-sm"
              >
                Sign Up
              </CustomLink>
            </>
          ) : (
            ''
          )}
        </div>

        {/* Mobile Toggle Button */}
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

        {!isAuthenticated ? (
          <>
            <CustomLink
              href="/login"
              className="block text-sm hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Login
            </CustomLink>
            <CustomLink
              href="/register"
              className="block text-sm hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </CustomLink>
          </>
        ) : (
          <Button
            onClick={handleLogout}
            className="w-full text-left text-sm hover:text-blue-500 bg-transparent"
          >
            Logout
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
