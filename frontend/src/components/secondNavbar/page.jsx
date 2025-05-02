'use client';

import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

export default function SecondNavbar({ className = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const links = [
    { href: "/profile", label: "Profile" },
    { href: "/community", label: "Community" },
    { href: "/activities", label: "Activities" },
    { href: "/quest", label: "Quest" },
  ];

  return (
    <nav className={`w-full flex flex-col md:flex-row md:items-center justify-between px-6 py-4 shadow-lg border-b border-gray-200 bg-gradient-to-r from-[#5D4FE1] to-[#4a3fd1] text-white ${className}`}>
      {/* Logo */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link href="/" className="flex items-center gap-2">
          <h1 className="text-3xl font-extrabold tracking-tight select-none">
            <span className="text-white">Tunisia</span>
            <span className="text-black">X</span>
          </h1>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Links */}
      <div
        className={`flex-col md:flex-row md:flex gap-8 md:items-center ${
          menuOpen ? 'flex' : 'hidden'
        } md:mt-0 mt-4`}
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="relative text-white font-medium transition-all duration-300 hover:text-[#F1F1F1] before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-[#F1F1F1] hover:before:w-full before:transition-all before:duration-300"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
