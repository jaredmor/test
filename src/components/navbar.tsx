"use client";

import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-[--color-border] bg-[--color-background]/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="/" className="text-base font-semibold tracking-tight">
          yourapp
        </a>

        <nav className="hidden items-center gap-8 text-sm text-[--color-muted] sm:flex">
          <a
            href="#features"
            className="transition-colors hover:text-[--color-foreground]"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="transition-colors hover:text-[--color-foreground]"
          >
            Pricing
          </a>
          <a
            href="#"
            className="transition-colors hover:text-[--color-foreground]"
          >
            Docs
          </a>
          <a
            href="#"
            className="transition-colors hover:text-[--color-foreground]"
          >
            Blog
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm text-[--color-muted] transition-colors hover:text-[--color-foreground] sm:inline-block"
          >
            Sign in
          </a>
          <a
            href="#"
            className="inline-flex h-9 items-center rounded-lg bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
