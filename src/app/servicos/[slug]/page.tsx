// app/servicos/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SERVICE_CATEGORIES } from "@/data/services";

type Params = { slug: string };

// helper local para encontrar o serviço pelo slug (sem categoria)
function getServiceBySlug(slug: string) {
  for (const c of SERVICE_CATEGORIES) {
    const service = c.children.find((s) => s.slug === slug);
    if (service) return { service, category: c };
  }
  return { service: undefined, category: undefined };
}

export default function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = params;
  const { service } = getServiceBySlug(slug);
  if (!service) return null;

  return (
    <div className="grid gap-8 md:grid-cols-2 md:pt-10">
      <div>
        {service.img ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ring-zinc-100">
            <Image
              src={service.img}
              alt={service.label}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        ) : null}
      </div>

      <div className="space-y-4">
        
        <p className="text-zinc-700">{service.desc}</p>

        <div className="pt-2">
          <Button
            asChild
            className="rounded-full bg-[var(--secondary)] hover:bg-[color:var(--primary)]"
          >
            <Link href="/contato">Solicitar orçamento</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

// SSG — agora só com o slug
export function generateStaticParams() {
  return SERVICE_CATEGORIES.flatMap((c) =>
    c.children.map((s) => ({ slug: s.slug })),
  );
}

// SEO dinâmico
export function generateMetadata({ params }: { params: Params }) {
  const { service } = getServiceBySlug(params.slug);
  return {
    title: service ? `${service.label} | Serviços` : "Serviços",
  };
}
