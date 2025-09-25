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
import {
  ServicosMenuDesktop,
  ServicosMenuMobile,
} from "@/components/ServicosMenu";

export default function HeaderSecundario() {
  return (
    <header className="relative bg-[var(--light)]">
      <div className="mx-auto flex py-3 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/imgs/logo-2.png"
            alt="Forte Brasil Paisagismo"
            width={110}
            height={40}
            className="object-contain "
            priority
          />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-[var(--primary)]">
            <li>
              <Link href="/" className="transition-opacity hover:opacity-80">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/quem-somos"
                className="transition-opacity hover:opacity-80"
              >
                Quem Somos
              </Link>
            </li>
            {/* Submenu Serviços (desktop) */}
            <li>
              <ServicosMenuDesktop className="text-[var(--primary)]" />
            </li>
            <li>
              <Link
                href="/contato"
                className="transition-opacity hover:opacity-80"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        {/* Ações direita (desktop) */}
        <div className="hidden md:block">
          <Canais className="text-white" />
        </div>

        {/* Mobile: menu hambúrguer */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger aria-label="Abrir menu" className="text-[var(--primary)]">
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            {/* Drawer claro no mobile */}
            <SheetContent
              side="right"
              className="w-[88vw] sm:max-w-sm p-0 bg-[var(--primary)] text-primary"
            >
              <SheetClose
                aria-label="Fechar"
                className="absolute right-4 top-4 text-primary"
              />

              <SheetHeader className="px-6 pt-6 pb-2">
                <SheetTitle className="flex items-center gap-2 text-primary">
                  <Image
                    src="/imgs/logo-2.png"
                    alt="Forte Brasil Paisagismo"
                    width={110}
                    height={36}
                    className="object-contain brightness-0 invert"
                  />
                </SheetTitle>
              </SheetHeader>

              <nav className="px-6 py-4">
                <ul className="space-y-3 text-base font-medium">
                  <li>
                    <Link href="/" className="block py-2 text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/quem-somos"
                      className="block py-2 text-white"
                    >
                      Quem Somos
                    </Link>
                  </li>

                  {/* Submenu Serviços (mobile) */}
                  <li className="py-1">
                    <ServicosMenuMobile className="text-white" />
                  </li>

                  <li>
                    <Link href="/contato" className="block py-2 text-white">
                      Contato
                    </Link>
                  </li>
                </ul>

                {/* Canais no mobile */}
                <div className="mt-6 border-t border-white pt-4">
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
