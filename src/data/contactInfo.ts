// contactInfo.ts
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const contactInfo = [
  { 
    type: "phone", 
    label: "(11) 98741-4459", 
    href: "tel:+5511987414459", 
    icon: Phone 
  },
  { 
    type: "whatsapp", 
    label: "(11) 95877-0119", 
    href: "https://wa.me/5511958770119", 
    icon: FaWhatsapp 
  },
  { 
    type: "email", 
    label: "jeovanemachado1613@gmail.com", 
    href: "mailto:jeovanemachado1613@gmail.com", 
    icon: Mail 
  },
  { 
    type: "email", 
    label: "luanarangel689@gmail.com", 
    href: "mailto:luanarangel689@gmail.com", 
    icon: Mail 
  },
];
