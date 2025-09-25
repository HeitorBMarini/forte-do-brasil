// app/servicos/page.tsx
import Image from "next/image";
import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/data/services";

export const metadata = { title: "Serviços | Souza Martins" };

export default function ServicosPage() {
  // Achata as categorias em uma lista de serviços
  const SERVICES = SERVICE_CATEGORIES.flatMap((c) => c.children);

  return (
    <main className="mx-auto max-w-68xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => (
          <Link
            key={s.slug}
            href={`/servicos/${s.slug}`}
            className="group block overflow-hidden rounded-xl bg-white ring-1 ring-zinc-200 border border-[var(--secondary)] shadow-sm transition hover:shadow-md"
          >
            <article>
              {/* Imagem do serviço */}
              {s.img && (
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.label}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-4">
                <h3 className="text-lg font-semibold text-[var(--dark-text)]">
                  {s.label}
                </h3>
                {s.desc && (
                  <p className="mt-2 text-sm text-zinc-600 line-clamp-2">
                    {s.desc}
                  </p>
                )}

                <span className="mt-4 w-full text-center inline-block rounded-2xl bg-[var(--primary)] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white">
                  Saiba Mais
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
