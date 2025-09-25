// app/servicos/BreadcrumbClient.tsx
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Breadcrumb, BreadcrumbList, BreadcrumbItem,
  BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Home as HomeIcon, ChevronRight } from "lucide-react";
import { getCategory, getService } from "@/data/services";

export default function BreadcrumbClient() {
  // useParams enxerga os segmentos atuais: { categoria?: string, slug?: string }
  const params = useParams() as { categoria?: string; slug?: string };
  const { categoria, slug } = params ?? {};

  const cat = categoria ? getCategory(categoria) : undefined;
  const svc = categoria && slug ? getService(categoria, slug).service : undefined;

  return (
    <Breadcrumb>
      <BreadcrumbList className="flex items-center gap-2 text-sm text-black">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="flex items-center gap-1">
              <HomeIcon size={16} /> Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator>
          <ChevronRight size={14} className="text-black" />
        </BreadcrumbSeparator>

        {!categoria && (
          <BreadcrumbItem>
            <BreadcrumbPage className="font-bold">Serviços</BreadcrumbPage>
          </BreadcrumbItem>
        )}

        {categoria && !slug && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/servicos">Serviços</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator><ChevronRight size={14} className="text-black" /></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold">{cat?.label ?? categoria}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}

        {categoria && slug && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link href="/servicos">Serviços</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator><ChevronRight size={14} className="text-black" /></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={`/servicos/${categoria}`}>{cat?.label ?? categoria}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator><ChevronRight size={14} className="text-black" /></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold">{svc?.label ?? slug}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
