"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/content/settings";
const links = [{name:"Work",href:"/projects"},{name:"Services",href:"/services"},{name:"Equipment",href:"/equipment"},{name:"About",href:"/about"},{name:"Contact",href:"/contact"}];
export function Header(){
 const [open,setOpen]=useState(false); const path=usePathname();
 useEffect(()=>{setOpen(false)},[path]);
 useEffect(()=>{document.body.style.overflow=open?"hidden":"";return ()=>{document.body.style.overflow=""}},[open]);
 return <><header className="creative-header"><div className="wrap flex h-20 items-center justify-between gap-5"><Link href="/" aria-label="AV Excel home" onClick={()=>setOpen(false)}><Image src="/brand/logo-light.png" alt={siteConfig.name} width={1400} height={253} priority className="h-8 w-auto max-w-[180px] object-contain md:h-10"/></Link><div className="flex items-center gap-5"><Link href="/contact" className="creative-talk hidden sm:inline-flex">LET'S TALK <ArrowUpRight size={16}/></Link><button type="button" className="creative-menu-button" aria-expanded={open} aria-controls="creative-navigation" aria-label={open?"Close navigation":"Open navigation"} onClick={()=>setOpen(!open)}>{open?<X size={22}/>:<Menu size={22}/>}<span className="hidden sm:inline">{open?"CLOSE":"MENU"}</span></button></div></div></header><div id="creative-navigation" className={`creative-overlay ${open?"is-open":""}`} aria-hidden={!open}><nav className="wrap creative-overlay-inner" aria-label="Main navigation">{links.map((l,i)=><Link key={l.href} tabIndex={open?0:-1} onClick={()=>setOpen(false)} className={`creative-overlay-link ${path===l.href?"active":""}`} href={l.href}><span className="creative-nav-number">0{i+1}</span>{l.name}<ArrowUpRight className="creative-nav-arrow"/></Link>)}<p className="creative-overlay-caption">AV EXCEL MEDIA & COMMUNICATION · ADDIS ABABA, ETHIOPIA</p></nav></div></>;
}
