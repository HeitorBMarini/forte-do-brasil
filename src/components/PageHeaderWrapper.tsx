"use client";

import { useParams } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { SERVICE_CATEGORIES } from "@/data/services";

// helper para achar serviço pelo slug (modelo atual: 1 categoria "servicos")
function findServiceBySlug(slug?: string) {
  if (!slug) return undefined;
  const all = SERVICE_CATEGORIES.flatMap((c) => c.children);
  return all.find((s) => s.slug === slug);
}

export default function PageHeaderWrapper() {
  // rota atual: /servicos  ou  /servicos/[slug]
  const params = useParams() as { slug?: string };
  const service = findServiceBySlug(params?.slug);

  // breadcrumbs:
  // - listagem: Home › Serviços
  // - detalhe:  Home › Serviços › {Serviço}
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
  ];

  if (service) {
    crumbs.push({
      label: service.label,
      href: ""
    });
  }

  const title = service?.label ?? "Serviços";

  return <PageHeader title={title} breadcrumbs={crumbs} />;
}
