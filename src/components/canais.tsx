import * as React from "react";
import { Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface CanaisProps {
  className?: string;
}

export function Canais({ className = "text-white" }: CanaisProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href="https://instagram.com/fortebrasil"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="transition-opacity hover:opacity-80"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href="https://wa.me/5599999999999"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="transition-opacity hover:opacity-80"
      >
        <FaWhatsapp className="h-5 w-5" />
      </a>
    </div>
  );
}
