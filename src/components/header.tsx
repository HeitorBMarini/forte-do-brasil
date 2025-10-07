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
  SheetClose,
} from "@/components/ui/sheet";
import { ServicosMenuDesktop, ServicosMenuMobile } from "@/components/ServicosMenu";

export default function Header() {
  return (
    <header className="relative bg-white shadow-[0_5px_15px_rgba(25,33,61,0.11)] md:absolute md:bg-transparent md:shadow-none md:inset-x-0 md:top-0 md:z-50">

      <div className="mx-auto flex pt-0 md:pt-5 h-24 md:h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 pt-1 md:pt-10">
          <Image
            src="/imgs/logo-forte.png"
            alt="Forte Brasil Paisagismo"
            width={100}
            height={40}
            className="object-contain contrast-125 brightness-100 invert-0 md:contrast-100 md:brightness-0 md:invert"
            priority
          />

        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-white">
            <li>
              <Link href="/" className="transition-opacity hover:opacity-80">
                Home
              </Link>
            </li>
            <li>
              <Link href="/quem-somos" className="transition-opacity hover:opacity-80">
                Quem Somos
              </Link>
            </li>
            <li>
              <ServicosMenuDesktop />
            </li>
            <li>
              <Link href="/contato" className="transition-opacity hover:opacity-80">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Ações direita (desktop) */}
        <div className="hidden md:block">
          <Canais />
        </div>

        {/* Mobile: menu hambúrguer */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger aria-label="Abrir menu" className="text-[var(--primary)]">
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent
              side="top"
              className="
    w-full bg-[var(--primary)] text-white rounded-b-2xl
    p-0 pt-6 pb-10 sm:max-w-full animate-slideDown
    [&>button:first-of-type]:hidden  /* esconde só o X padrão */
  "
            > <SheetClose
              aria-label="Fechar menu"
              className="
      absolute right-4 top-4 
      flex items-center justify-center
      w-9 h-9 rounded-full border border-white/70 
      text-white text-xl font-light 
      transition-all duration-200
      hover:bg-white/10 hover:scale-105
    "
            >
                ×
              </SheetClose>

              <SheetHeader className="px-6 pb-4">
                <SheetTitle className="flex justify-center">
                  <Image
                    src="/imgs/logo-forte.png"
                    alt="Forte Brasil Paisagismo"
                    width={100}
                    height={40}
                    className="object-contain contrast-125 brightness-100 invert-0 md:contrast-100 md:brightness-0 md:invert"
                    priority
                  />
                </SheetTitle>
              </SheetHeader>

              <nav className="px-6 text-center">
                <ul className="space-y-5 text-lg font-medium">
                  <li>
                    <Link href="/" className="text-white block py-2">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/quem-somos" className="text-white block py-2">
                      Quem Somos
                    </Link>
                  </li>
                  <li>
                    <ServicosMenuMobile />
                  </li>
                  <li>
                    <Link href="/contato" className="text-white block py-2">
                      Contato
                    </Link>
                  </li>
                </ul>

                <div className="flex justify-center mt-8 border-t border-white/20 pt-8">
                  <Canais />
                </div>
              </nav>



            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* animação suave do menu descendo */}
      <style jsx global>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease forwards;
        }
      `}</style>
    </header>
  );
}
