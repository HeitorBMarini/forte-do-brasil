"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const phone = "5511976159174"; // coloque o número no formato internacional
  const message = "Olá! Gostaria de mais informações."; // mensagem inicial opcional
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-30 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg transition-colors"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}
