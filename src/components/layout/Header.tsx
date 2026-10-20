"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/content/settings";
const links = siteConfig.navigation;
export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    if (!open) { if (wasOpen.current) menuButton.current?.focus(); wasOpen.current = false; return; }
    wasOpen.current = true;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = panel.current?.querySelector<HTMLElement>('a[href]');
    first?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); setOpen(false); return; }
      if (event.key !== "Tab" || !panel.current) return;
      const focusable = [menuButton.current, ...Array.from(panel.current.querySelectorAll<HTMLElement>('a[href],button:not([disabled])'))].filter((el): el is HTMLElement => Boolean(el));
      if (!focusable.length) return;
      const index = focusable.indexOf(document.activeElement as HTMLElement);
      if (event.shiftKey && index <= 0) { event.preventDefault(); focusable[focusable.length - 1].focus(); }
      else if (!event.shiftKey && index === focusable.length - 1) { event.preventDefault(); focusable[0].focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener("keydown", onKey); };
  }, [open]);
  return <>
    <header className="creative-header"><div className="wrap flex h-20 items-center justify-between gap-5">
      <Link href="/" aria-label="AV Excel home" onClick={() => setOpen(false)} tabIndex={open ? -1 : 0}><Image src="/brand/logo-light.png" alt={siteConfig.name} width={1400} height={253} sizes="(max-width: 640px) 140px, 180px" className="h-8 w-auto max-w-[180px] object-contain md:h-10" /></Link>
      <div className="flex items-center gap-5"><Link href="/contact" tabIndex={open ? -1 : 0} className="creative-talk hidden sm:inline-flex">LET'S TALK <ArrowUpRight size={16} /></Link>
        <button ref={menuButton} type="button" className="creative-menu-button" aria-expanded={open} aria-controls="creative-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(value => !value)}>{open ? <X size={22} /> : <Menu size={22} />}<span className="hidden sm:inline">{open ? "CLOSE" : "MENU"}</span></button>
      </div></div></header>
    <div id="creative-navigation" ref={panel} className={`creative-overlay ${open ? "is-open" : ""}`} aria-hidden={!open} {...(!open ? { inert: true } : {})}>
      <nav className="wrap creative-overlay-inner" aria-label="Main navigation">{links.map((link, index) => <Link key={link.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className={`creative-overlay-link ${pathname === link.href ? "active" : ""}`} href={link.href}><span className="creative-nav-number">0{index + 1}</span>{link.name}<ArrowUpRight className="creative-nav-arrow" /></Link>)}
        <p className="creative-overlay-caption">AV EXCEL MEDIA & COMMUNICATION · ADDIS ABABA, ETHIOPIA</p>
      </nav>
    </div>
  </>;
}
