"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

export default function FAQSection() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-medium  leading-tight tracking-tight text-[#1A2602] md:text-4xl">
            Dúvidas frequentes e <br /> Nossos diferenciais
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          {/* Diferenciais */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h3 className="font-semibold text-lg text-[#1A2602]">Diferencial</h3>
              <p className="text-sm text-[#303030]">
                Soluções completas e atendimento personalizado.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h3 className="font-semibold text-lg text-[#1A2602]">Licenciamento</h3>
              <p className="text-sm text-[#303030]">
                Suporte em autorizações ambientais.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-md">
              <h3 className="font-semibold text-lg text-[#1A2602]">Segurança</h3>
              <p className="text-sm text-[#303030]">
                Equipamentos modernos e normas de segurança.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <Accordion
            type="single"
            collapsible
            className="grid gap-6 md:grid-cols-2"
          >
            {faq.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i + 1}`}
                // Último ocupa 2 colunas
                className={`overflow-hidden rounded-2xl bg-[var(--light)] px-5 py-4 shadow-sm ring-1 ring-zinc-100 ${
                  i === faq.length - 1 ? "md:col-span-2" : ""
                }`}
              >
                <AccordionTrigger className="group flex w-full items-center justify-between text-left [&>svg]:hidden">
                  <span className="text-sm font-medium text-[#303030]">
                    {i + 1}. {f.q}
                  </span>

                  <span className="shrink-0 rounded-sm bg-[#f6f6f6] p-1.5 text-[#888] transition-colors group-hover:bg-zinc-200">
                    <Plus className="h-4 w-4" />
                  </span>
                </AccordionTrigger>

                <AccordionContent className="pt-2 text-sm text-[#303030] leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

const faq = [
  {
    q: "O que diferencia a Forte Brasil?",
    a: "Oferecemos soluções completas em paisagismo e remoção de árvores com segurança, qualidade e atendimento personalizado.",
  },
  {
    q: "Vocês trabalham com licenciamento ambiental?",
    a: "Sim. Auxiliamos em toda a parte burocrática, incluindo autorizações junto aos órgãos competentes quando necessário.",
  },
  {
    q: "É seguro contratar a remoção de árvores com vocês?",
    a: "Sim. Utilizamos equipamentos modernos e seguimos todas as normas de segurança para proteger pessoas e patrimônios.",
  },
  {
    q: "Além da remoção, fazem podas e manutenção?",
    a: "Sim. Realizamos podas técnicas, manutenção de áreas verdes e serviços completos de jardinagem e paisagismo.",
  },
  {
    q: "A equipe é especializada?",
    a: "Contamos com profissionais capacitados e experientes, garantindo eficiência e resultados de alta qualidade.",
  },
];
