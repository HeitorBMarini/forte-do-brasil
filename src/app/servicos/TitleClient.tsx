// app/servicos/TitleClient.tsx
"use client";

import { useParams } from "next/navigation";
import { getCategory, getService } from "@/data/services";

export default function TitleClient() {
  const params = useParams() as { categoria?: string; slug?: string };
  const { categoria, slug } = params ?? {};

  const cat = categoria ? getCategory(categoria) : undefined;
  const svc = categoria && slug ? getService(categoria, slug).service : undefined;

  const title = svc?.label ?? cat?.label ?? "Serviços";

  return (
    <>
      <h1
        className="relative mt-6 text-3xl font-bold text-[var(--dark-text)] pb-1
                   after:content-[''] after:block after:h-[3px] after:w-16 
                   after:bg-[var(--primary)] after:mt-2"
      >
        {title}
      </h1>

      
    </>
  );
}
