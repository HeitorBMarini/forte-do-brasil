"use client";

import Image from "next/image";
import { Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-0 md:grid-cols-[1fr_2fr]">
          {/* Imagem — escondida no mobile */}
          <div className="relative w-full hidden md:block">
            <Image
              src="/imgs/cta.png"
              alt="Árvore com sol"
              fill
              priority
              className="
                absolute
                !h-full
                !w-[103%]
                !-left-[24px]
                !-top-[8px]
                right-0
                bottom-0
                scale-[1.20]
                object-cover
                rounded-xl
              "
            />
          </div>

          {/* Conteúdo */}
          <div
            className="
              flex flex-col items-center justify-center text-center p-8 text-white
              rounded-[46px] md:rounded-r-[46px] md:rounded-l-none
              min-h-[18rem]
            "
            style={{
              background:
                "linear-gradient(270deg, #203003 14.01%, #6B7457 87.37%)",
            }}
          >
            <h2 className="text-2xl font-bold leading-snug md:text-3xl">
              Valorizamos sua área <br /> verde do jeito certo
            </h2>
            <p className="mt-3 max-w-lg text-sm md:text-base text-zinc-100/90">
              Com a Forte Brasil, sua área ganha transformação, cuidado e
              manutenção com responsabilidade e excelência.
            </p>

            <div className="mt-6">
              <a
                href="/contato"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--light)] px-6 py-3 text-sm font-medium text-[#1A2602] shadow-sm transition hover:bg-zinc-300"
              >
                <Phone className="h-4 w-4" />
                Solicite Seu Orçamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
