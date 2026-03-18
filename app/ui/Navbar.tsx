"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition hover:text-blue-400 ${
      pathname === path ? "text-blue-500 font-semibold" : "text-gray-300"
    }`;

  return (
    <nav className="w-full border-b border-gray-800 bg-gray-900/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-white font-bold text-lg">MyApp</div>

        <div className="flex gap-6">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <Link href="/dashboard/about" className={linkClass("/dashboard/about")}>
            About
          </Link>
          <Link href="/dashboard/contact" className={linkClass("/dashboard/contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}