"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Canais } from "./canais";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function HeaderSecundario() {
  return (
    <header className="relative bg-light">
      <div className="mx-auto flex py-3 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/imgs/logo-2.png"
            alt="Forte Brasil Paisagismo"
            width={110}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-primary">
            <li><Link href="/" className="transition-opacity hover:opacity-80">Home</Link></li>
            <li><Link href="/quem-somos" className="transition-opacity hover:opacity-80">Quem Somos</Link></li>
            <li><Link href="/servicos" className="transition-opacity hover:opacity-80">Serviços</Link></li>
            <li><Link href="/contato" className="transition-opacity hover:opacity-80">Contato</Link></li>
          </ul>
        </nav>

        {/* Ações direita (desktop) */}
        <div className="hidden md:block">
          {/* <<< AQUI: força cor primária nos ícones */}
          <Canais className="text-primary" />
        </div>

        {/* Mobile: menu hambúrguer */}
        <div className="md:hidden">
          <Sheet>
            {/* <<< AQUI: ícone hambúrguer na cor primária */}
            <SheetTrigger aria-label="Abrir menu" className="text-primary">
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            {/* <<< AQUI: fundo claro + texto primário no drawer */}
            <SheetContent side="right" className="w-[88vw] bg-primary text-primary sm:max-w-sm p-0">
              <SheetHeader className="px-6 pt-6 pb-2">
                <SheetTitle className="flex items-center gap-2">
                  <Image
                    src="/imgs/logo-forte.png"
                    alt="Forte Brasil Paisagismo"
                    width={110}
                    height={36}
                    className="object-contain"
                  />
                </SheetTitle>
              </SheetHeader>

              <nav className="px-6 py-4">
                <ul className="space-y-3 text-base font-medium">
                  <li><Link href="/" className="block py-2 text-white">Home</Link></li>
                  <li><Link href="/quem-somos" className="block py-2 text-white">Quem Somos</Link></li>
                  <li><Link href="/servicos" className="block py-2 text-white">Serviços</Link></li>
                  <li><Link href="/contato" className="block py-2 text-white">Contato</Link></li>
                </ul>

                {/* Canais no mobile — visíveis e na cor primária */}
                <div className="mt-6 border-t pt-4">
                  <Canais className="text-white" />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
