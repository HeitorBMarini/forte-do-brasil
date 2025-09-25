"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SERVICE_CATEGORIES } from "@/data/services";

const imgPlaceholder = "/imgs/servicos/servico.png";

export default function ServicosHome() {
  // pega todos os serviços de todas as categorias (hoje é só "servicos")
  const services = SERVICE_CATEGORIES.flatMap((c) => c.children);

  return (
    <section className="w-full bg-[var(--light)] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="block text-sm uppercase tracking-[0.25em] text-[color:var(--grey)]">
            Confira os
          </span>
          <h2 className="relative inline-block mt-2 text-[color:var(--dark-text)] text-3xl md:text-4xl font-bold
            ">
            Nossos Serviços
          </h2>
        </div>

        {/* Grid de serviços */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link key={s.slug} href={`/servicos/${s.slug}`} className="block group">
              <article className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-zinc-100 transition hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={s.img ?? imgPlaceholder}
                    alt={s.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-[var(--primary)] transition">
                    {s.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 line-clamp-3">
                    {s.desc}
                  </p>
                  <div className="mt-6">
                    <Button
                      size="sm"
                      className="rounded-full w-full bg-[var(--primary)] uppercase text-white hover:bg-[color:var(--secondary)] transition"
                    >
                      Saiba mais
                    </Button>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
