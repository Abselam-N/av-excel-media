import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/settings";
import { servicesData } from "@/content/services";

const heading = "mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-gray-700";
const link = "transition-colors duration-200 hover:text-primary";

export function Footer() {
  const services = Object.values(servicesData);
  const { contact } = siteConfig;

  return (
    <footer className="bg-white text-gray-700">
      <div className="wrap py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Image src="/brand/logo.png" alt={siteConfig.name} width={1400} height={253} sizes="(max-width: 640px) 140px, 180px" className="h-9 w-auto" />
            <p className="mt-6 max-w-[40ch] text-sm leading-relaxed">{siteConfig.description}</p>
          </div>

          <div className="md:col-span-2">
            <h4 className={heading}>Navigate</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}><Link href={item.href} className={link}>{item.name}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className={heading}>Services</h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`} className={link}>{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className={heading}>Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>{contact.address}</li>
              <li><a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className={link}>{contact.phone}</a></li>
              <li><a href={`tel:${contact.altPhone.replace(/\s+/g, "")}`} className={link}>{contact.altPhone}</a></li>
              <li><a href={`mailto:${contact.email}`} className={link}>{contact.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-black/15 pt-6 text-xs sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.location}, {siteConfig.country}</p>
        </div>
      </div>
    </footer>
  );
}
