"use client";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Header({ name, links }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
useEffect(() => {
  try {
    const savedTheme = localStorage.getItem("theme");
    const isDark =
      savedTheme === "dark" ||
      (savedTheme !== "light" &&
        document.documentElement.classList.contains("dark"));

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  } catch {
    const isDark =
      document.documentElement.classList.contains("dark");
    setDark(isDark);
  }
}, []);
function toggle() {
  const next = !dark;
  setDark(next);

  document.documentElement.classList.toggle("dark", next);

  try {
    localStorage.setItem("theme", next ? "dark" : "light");
  } catch {}
}
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-display text-lg font-bold">{name}</a>
        <nav aria-label="Main" className="hidden gap-6 text-sm md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-muted hover:text-ink">{label}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} className="rounded-full p-2 hover:bg-surface">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Menu" className="rounded-full p-2 hover:bg-surface md:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-bg px-5 py-3 md:hidden">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block py-3 text-lg font-medium">{label}</a>)}
        </nav>
      )}
    </header>
  );
}
