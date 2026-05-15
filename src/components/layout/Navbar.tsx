"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, WA_PRESUPUESTO } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const navBg = scrolled
    ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)]"
    : "bg-transparent";

  const linkColor = scrolled ? "text-roble-text" : "text-white/85";
  const iconColor = scrolled ? "text-roble-muted" : "text-white/70";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav
        className="max-w-6xl mx-auto flex items-center justify-between px-4 h-18"
        aria-label="Navegación principal"
      >
        {/* ── Logo ─────────────────────────────── */}
        <Link
          href="/"
          className="flex-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Viviendas Roble — Inicio"
        >
          <Image
            src="/assets/branding/logo.png"
            alt="Viviendas Roble"
            width={160}
            height={48}
            className={`object-contain h-10 w-auto transition-all duration-300 ${
              !scrolled ? "brightness-0 invert" : ""
            }`}
            priority
          />
        </Link>

        {/* ── Desktop links ─────────────────────── */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:opacity-60 ${linkColor}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop right actions ─────────────── */}
        <div className="hidden md:flex items-center gap-3">
          {/* Search icon */}
          <Link
            href="/buscar"
            aria-label="Buscar"
            className={`p-2 rounded-lg transition-colors duration-200 hover:opacity-60 ${iconColor}`}
          >
            <SearchIcon />
          </Link>

          {/* CTA */}
          <a
            href={WA_PRESUPUESTO}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-roble-dark text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-roble-dark-hover transition-colors duration-200"
          >
            Pedí tu presupuesto
          </a>
        </div>

        {/* ── Mobile right icons ─────────────────── */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/buscar"
            aria-label="Buscar"
            className={`p-2 ${iconColor}`}
          >
            <SearchIcon />
          </Link>

          {/* Hamburger */}
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-200 ${
                menuOpen
                  ? "rotate-45 translate-y-2 bg-roble-dark"
                  : scrolled
                  ? "bg-roble-dark"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-200 ${
                menuOpen
                  ? "opacity-0"
                  : scrolled
                  ? "bg-roble-dark"
                  : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-200 ${
                menuOpen
                  ? "-rotate-45 -translate-y-2 bg-roble-dark"
                  : scrolled
                  ? "bg-roble-dark"
                  : "bg-white"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ─────────────────────────── */}
      <div
        className={`md:hidden bg-white border-t border-roble-beige overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-4 gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block text-roble-text font-medium py-3 border-b border-roble-beige/60 last:border-0 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={WA_PRESUPUESTO}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-roble-dark text-white text-sm font-medium py-3 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Pedí tu presupuesto
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
