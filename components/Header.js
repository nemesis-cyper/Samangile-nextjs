"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  ["/", "Home"],
  ["/rooms", "Stay"],
  ["/wellness", "Wellness"],
  ["/gallery", "Gallery"],
  ["/about", "About"],
  ["/contact", "Contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="nav-row">
        <Link href="/" className="brand-lockup" aria-label="Samangile Guest Lodge — Home">
          <img src="/assets/brand/samangile-logo-master.png" alt="Samangile Guest Lodge logo" />
        </Link>
        <nav className={`nav-links${open ? " open" : ""}`} id="navLinks">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} className={pathname === href ? "active-link" : ""}>
              {label}
            </Link>
          ))}
          <Link href="/contact#book" className="nav-cta">
            Book Now
          </Link>
        </nav>
        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          &#9776;
        </button>
      </div>
    </header>
  );
}
