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
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className={`inline-flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-80 ${className ?? ""}`}
          aria-expanded={open}
        >
          Serviços
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
  );
}

/* ===================== MOBILE ===================== */
export function ServicosMenuMobile({ className }: Props) {
  return (
    <Accordion type="single" collapsible className={className}>
      <AccordionItem value="servicos">
        {/* O AccordionTrigger já tem um ChevronDown interno */}
        <AccordionTrigger className="py-2 text-base font-medium hover:no-underline">
          Serviços
        </AccordionTrigger>

        <AccordionContent className="space-y-2">
          <ul className="pl-2 space-y-1">
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
            <li className="pt-2">
              <Link
                href="/servicos"
                className="block py-2 font-semibold hover:underline"
              >
                Ver todos os serviços
              </Link>
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
