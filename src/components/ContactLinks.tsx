"use client";

import { contactInfo } from "@/data/contactInfo";

interface ContactLinksProps {
  title?: string; // opcional: pode mudar o título (default: "Contato")
}

export function ContactLinks({ title = "Contato" }: ContactLinksProps) {
  return (
    <div className="flex flex-col items-center md:items-start space-y-3">

      {contactInfo.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          target={item.type === "whatsapp" ? "_blank" : undefined}
          rel={item.type === "whatsapp" ? "noopener noreferrer" : undefined}
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <item.icon className="h-4 w-4" /> {item.label}
        </a>
      ))}
    </div>
  );
}
