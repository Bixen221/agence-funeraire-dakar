"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { PhoneIcon } from "./Icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-cedre/20 bg-pierre/95 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-3 md:h-20">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={`text-[0.95rem] transition-colors hover:text-bronze ${path === n.href ? "font-semibold text-cedre" : "text-ink/80"}`}>
              {n.label}
            </Link>
          ))}
          <Link href="/demande" className="btn btn-gold !py-2.5 text-sm">Demander une prise en charge</Link>
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <a href={site.tel} aria-label={`Appeler le ${site.phoneDisplay}, 24 h/24`} className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-cedre/25 px-3 py-2 max-[379px]:h-10 max-[379px]:w-10 max-[379px]:justify-center max-[379px]:px-0 text-sm font-medium text-cedre transition-colors hover:border-cedre hover:bg-cedre hover:text-white">
            <PhoneIcon className="h-4 w-4" /> <span className="hidden sm:inline">{site.phoneDisplay}</span><span className="max-[379px]:hidden sm:hidden">24 h/24</span>
          </a>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} className="grid h-10 w-10 place-items-center rounded-full text-cedre transition-colors hover:bg-cedre hover:text-white">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
              {open ? <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-mobile" className="border-t border-cedre/20 bg-pierre lg:hidden" aria-label="Navigation mobile">
          <ul className="container-site flex flex-col py-2">
            {[...nav, { href: "/demande", label: "Demander une prise en charge" }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className={`block py-3 text-lg font-serif transition-colors hover:text-bronze ${path === n.href ? "text-bronze" : "text-cedre"}`}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
