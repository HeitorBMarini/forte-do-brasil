"use client";

import Image from "next/image";

import Cta from "@/components/Cta";
import HeaderSecondary from "@/components/HeaderSecondary";
import PageHeader from "@/components/PageHeader";

export default function SobreNosPage() {
  return (
    <>
      <HeaderSecondary />

     <PageHeader title="Sobre nós" />


      <main className="mx-auto max-w-7xl px-4 md:px-10 pb-20">
        <section className="w-full py-12 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-16">
            {/* Left: Illustration */}
            <div className="relative mx-auto w-full max-w-[540px]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[36px]">
                <Image
                  src="/imgs/quem-somos.png"
                  alt="Árvores e cuidados com a natureza"
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold leading-tight mb-0 tracking-tight text-[#1A2602] md:text-4xl">
                FORTE BRASIL
              </h2>
              <p
                className="text-2xl font-medium md:text-base"
                style={{ color: "var(--grey)" }}
              >
                Cultivando a natureza com inovação e excelência
              </p>

              <div className="space-y-4 text-sm leading-relaxed text-[#303030] md:text-[15px]">
                <p>
                  A Forte Brasil foi fundada por Jeovane, um apaixonado pela
                  natureza que sempre acreditou na importância de cuidar do meio
                  ambiente. Com um olhar inovador e comprometido, Jeovane
                  transformou sua paixão em uma empresa dedicada a oferecer serviços
                  de poda e remoção de árvores, além de soluções completas em
                  paisagismo.
                </p>
                <p>
                  Nossa missão é combinar técnica, segurança e estética em cada
                  projeto, garantindo que cada árvore, jardim ou área verde seja
                  tratada com cuidado, respeito e atenção aos detalhes. Com a Forte
                  Brasil, você recebe não apenas um serviço, mas uma experiência que
                  valoriza a natureza e transforma espaços em ambientes mais
                  bonitos, saudáveis e harmoniosos.
                </p>
              </div>

              
            </div>
          </div>
        </section>
      </main>

      <Cta />

    </>
  );
}
