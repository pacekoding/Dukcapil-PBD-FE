"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Beranda" },
    { href: "/profil", label: "Profil Dinas" },
    { href: "/populasi", label: "Data Populasi" },
  ];

  return (
    <nav className="bg-dukcapil-primary text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* === Logo === */}
        <Link href="/" className="font-semibold text-base sm:text-lg">
          Dukcapil Papua Barat Daya
        </Link>

        {/* === Desktop Menu === */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-yellow-300 transition-colors ${
                  pathname === link.href ? "text-yellow-300" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* === Mobile Toggle Button === */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="white"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* === Mobile Dropdown === */}
      {isOpen && (
        <div className="md:hidden bg-dukcapil-primary border-t border-white/20">
          <ul className="flex flex-col space-y-2 py-3 px-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)} // close menu after click
                  className={`block py-2 px-2 rounded hover:bg-white/10 ${
                    pathname === link.href ? "text-yellow-300" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
