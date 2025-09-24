"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[500px] md:h-[700px] hidden md:block">
      {/* Imagem de fundo */}
      <Image
        src="/imgs/banner.png"
        alt="Banner Forte Brasil"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay escurecido */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl">
          <h1
            className="
              text-white font-extrabold uppercase
              text-[32px] md:text-5xl
              leading-[120%] font-[Montserrat]
            "
          >
            TRANSFORME SUA ÁREA VERDE <br />
            COM QUEM ENTENDE DO ASSUNTO
          </h1>

          <p className="mt-4 text-white text-sm md:text-lg font-normal">
            A FORTE BRASIL É ESPECIALISTA EM CUIDAR, VALORIZAR E MANTER ESPAÇOS <br />
            VERDES COM QUALIDADE, SEGURANÇA E RESPONSABILIDADE.
          </p>

          <div className="mt-6">
            <a
              href="/contato"
              className="inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-secondary"
            >
              Fale Com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
