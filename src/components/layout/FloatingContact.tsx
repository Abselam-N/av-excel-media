"use client";

import { Send } from "lucide-react";
import { siteConfig } from "@/content/settings";

const btn =
  "flex h-11 w-11 items-center justify-center bg-foreground text-background transition-colors duration-200 hover:bg-primary";

export function FloatingContact() {
  const whatsapp = `https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "")}?text=Hello%20AV%20Excel,%20I%20would%20like%20to%20inquire%20about%20audiovisual%20services.`;
  const telegram = `https://t.me/+${siteConfig.contact.telegramPhone.replace(/[^0-9]/g, "")}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40 flex flex-col gap-px">
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className={btn}>
        <svg viewBox="0 0 24 24" width="21" height="21" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.85 11.85 0 0 0 12.07 0C5.48 0 .1 5.37.1 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.9 11.9 0 0 0 5.87 1.5h.01c6.6 0 11.97-5.38 11.98-11.98a11.9 11.9 0 0 0-3.54-8.41ZM12.08 21.85a9.87 9.87 0 0 1-5.04-1.38l-.36-.22-3.68.97.98-3.59-.24-.37a9.91 9.91 0 1 1 8.34 4.59Zm5.45-7.42c-.3-.15-1.77-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.63-.93-2.23-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.29.5 1.73.64.73.23 1.4.2 1.93.12.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z"/></svg>
      </a>
      <a href={telegram} target="_blank" rel="noopener noreferrer" aria-label="Message on Telegram" className={btn}>
        <Send className="h-5 w-5" />
      </a>
    </aside>
  );
}
