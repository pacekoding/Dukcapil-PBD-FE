"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Beranda" },
    { href: "/profil", label: "Profil Dinas" },
    { href: "/populasi", label: "Data Populasi" },
  ];

  return (
    <div className="bg-dukcapil-primary text-white">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="font-semibold text-lg">
          Dukcapil Papua Barat Daya
        </Link>

        {/* Menu */}
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-yellow-300 ${
                  pathname === link.href ? "text-yellow-300" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
