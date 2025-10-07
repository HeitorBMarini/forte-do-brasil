"use client";

import Image from "next/image";
import Link from "next/link";
import { ContactLinks } from "./ContactLinks";

export default function Footer() {
  return (
    <footer  className="bg-primary text-white py-10 border-t-2"
  style={{ borderTopColor: "rgba(112, 64, 155, 0.25)" }}>
      <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-3">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/imgs/logo-forte.png"
            alt="Forte Brasil Paisagismo"
            width={150}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Navegação */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="font-semibold mb-2">Navegação</h3>
          <Link href="/" className="hover:underline text-zinc-100 text-sm">
            Home
          </Link>
          <Link href="/quem-somos" className="hover:underline text-zinc-100 text-sm">
            Quem Somos
          </Link>
          <Link href="/servicos" className="hover:underline text-zinc-100 text-sm">
            Serviços
          </Link>
          <Link href="/contato" className="hover:underline text-zinc-100 text-sm">
            Contato
          </Link>
          <Link href="/mapa-do-site" className="hover:underline text-zinc-100 text-sm">
            Mapa do Site
          </Link>
        </div>

        {/* Contato */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="font-semibold mb-2">Contato</h3>

         <ContactLinks />
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-zinc-300">
        Copyright © Forte Brasil | Lei 9610 de 19/02/1998
      </div>
    </footer>
  );
}
