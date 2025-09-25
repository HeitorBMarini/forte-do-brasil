"use client";

import Image from "next/image";
import { CERTIFICACOES } from "@/data/certifications";

export default function Certificacoes() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-[#969696]">Somos os melhores</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-10">
          Nossas Certificações
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {CERTIFICACOES.map((cert, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center space-y-3"
            >
              <a
                href={`/pdf/${cert.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Image
                  src="/imgs/pdf.png"
                  alt={cert.label}
                  width={80}
                  height={100}
                  className="mx-auto transition-transform duration-300 group-hover:scale-110"
                />
              </a>
              <p className="text-sm font-medium text-[var(--dark-text)] line-clamp-2">
                {cert.label}
              </p>
              <a
                href={`/pdf/${cert.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-semibold text-white hover:bg-[var(--secondary)] transition"
              >
                Saiba Mais
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
