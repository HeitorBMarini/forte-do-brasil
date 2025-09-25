// app/servicos/PageHeaderWrapper.tsx
"use client";

import { getCategory, getService } from "@/data/services";
import { useParams } from "next/navigation";
import PageHeader from "@/components/PageHeader";

export default function PageHeaderWrapper() {
  const { categoria, slug } = (useParams() as { categoria?: string; slug?: string }) ?? {};
  const cat = categoria ? getCategory(categoria) : undefined;
  const svc = categoria && slug ? getService(categoria, slug).service : undefined;

  const title = svc?.label ?? cat?.label ?? "Serviços";
  const desc = svc?.desc ?? cat?.desc;

  return <PageHeader title={title}  />; // ✅ sem header aqui
}
