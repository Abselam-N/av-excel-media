"use client";

import { MessageSquare, Send } from "lucide-react";
import { siteConfig } from "@/content/settings";

const btn =
  "flex h-11 w-11 items-center justify-center bg-foreground text-background transition-colors duration-200 hover:bg-primary";

export function FloatingContact() {
  const whatsapp = `https://wa.me/${siteConfig.contact.whatsappNumber.replace(/[^0-9]/g, "")}?text=Hello%20AV%20Excel,%20I%20would%20like%20to%20inquire%20about%20audiovisual%20services.`;
  const telegram = `https://t.me/+${siteConfig.contact.telegramPhone.replace(/[^0-9]/g, "")}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40 flex flex-col gap-px">
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className={btn}>
        <MessageSquare className="h-5 w-5" />
      </a>
      <a href={telegram} target="_blank" rel="noopener noreferrer" aria-label="Message on Telegram" className={btn}>
        <Send className="h-5 w-5" />
      </a>
    </aside>
  );
}
