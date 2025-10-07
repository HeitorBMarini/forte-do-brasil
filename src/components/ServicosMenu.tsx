"use client";

import Link from "next/link";
import { SERVICES } from "@/data/services";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = { className?: string };

/* ===================== DESKTOP ===================== */
export function ServicosMenuDesktop({ className }: Props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={`inline-flex items-center gap-1 ${className ?? ""}`}>
      {/* Rótulo navega para /servicos */}
      <Link
        href="/servicos"
        className="text-sm font-medium transition-opacity hover:opacity-80"
      >
        Serviços
      </Link>

      {/* Chevron abre o dropdown */}
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button
            aria-label="Abrir submenu de Serviços"
            className="p-1 rounded transition hover:bg-black/5"
            aria-expanded={open}
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="min-w-[18rem]">
          {SERVICES.map((s) => (
            <DropdownMenuItem asChild key={s.slug} className="cursor-pointer">
              <Link href={`/servicos/${s.slug}`} className="block py-1.5">
                {s.label}
              </Link>
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/servicos" className="block py-1.5 font-semibold">
              Ver todos os serviços
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export function ServicosMenuMobile({ className }: Props) {
  return (
    <Accordion type="single" collapsible className={`text-center ${className ?? ""}`}>
      <AccordionItem value="servicos">
        <AccordionTrigger
          className="
            py-2 text-base font-medium hover:no-underline 
            justify-center text-center w-full
          "
        >
          <span className="flex items-center justify-center gap-2">
            Serviços
          </span>
        </AccordionTrigger>

        <AccordionContent className="space-y-2">
          <ul className="pl-0 space-y-1 text-center">
            {/* Primeiro item: link direto à página de serviços */}
            <li>
              <Link
                href="/servicos"
                className="block py-2 font-semibold hover:underline"
              >
                Página de serviços
              </Link>
            </li>

            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicos/${s.slug}`}
                  className="block py-2 hover:underline"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
