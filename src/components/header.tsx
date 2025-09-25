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
    <header
      className="
        relative 
        bg-white shadow-[0_5px_15px_rgba(25,33,61,0.11)] 
        md:absolute md:bg-transparent md:shadow-none md:inset-x-0 md:top-0 md:z-50
      "
    >
      <div className="mx-auto flex pt-0 md:pt-5 h-24 md:h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 pt-1 md:pt-10">
          <Image
            src="/imgs/logo-forte.png"
            alt="Forte Brasil Paisagismo"
            width={100}
            height={40}
            className="object-contain md:brightness-0 md:invert"
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

            {/* Submenu Serviços (desktop) */}
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
            {/* ícone primário sobre header branco */}
            <SheetTrigger aria-label="Abrir menu" className="text-[var(--primary)]">
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[88vw] bg-primary sm:max-w-sm p-0 text-white"
            >
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

                  {/* Submenu Serviços (mobile) */}
                  <li className="py-1">
                    <ServicosMenuMobile />
                  </li>

                  <li>
                    <Link href="/contato" className="text-white block py-2">
                      Contato
                    </Link>
                  </li>
                </ul>

                {/* Canais no mobile */}
                <div className="flex items-center mt-6 border-t gap-4 pt-10 text-white">
                  <Canais />
                </div>
              </nav>

              {/* X branco */}
              <SheetClose className="absolute right-4 top-4 text-white" />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
