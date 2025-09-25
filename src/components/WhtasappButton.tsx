// WhatsappButton.tsx
"use client";

import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "@/data/contactInfo"; 

export default function WhatsappButton() {
  // pega o primeiro contato do tipo whatsapp
  const whatsapp = contactInfo.find((c) => c.type === "whatsapp");

  if (!whatsapp) return null; // caso não tenha whatsapp no array

  const message = "Olá! Gostaria de mais informações."; // mensagem inicial opcional
  const link = `${whatsapp.href}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-colors"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}
