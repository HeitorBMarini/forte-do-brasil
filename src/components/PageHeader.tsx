"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home as HomeIcon, ChevronRight } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PageHeaderProps {
  title: string; // Texto principal da página (h1)
}

export default function PageHeader({ title }: PageHeaderProps) {
  const pathname = usePathname();
  const current = pathname.split("/").filter(Boolean).pop() || "home";

  return (
    <div className="w-full bg-[var(--light)] ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList className="flex items-center gap-2 text-sm text-[var(--dark-text)]">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/" className="flex items-center gap-2">
                  {/* Ícone Home dentro de um círculo verde */}
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                    <HomeIcon size={14} />
                  </span>
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator>
              <ChevronRight size={14} className="text-[var(--dark-text)]" />
            </BreadcrumbSeparator>

            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold capitalize">
                {title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* h1 / título */}
        <h1
          className="mt-6 text-3xl font-bold text-[var(--dark-text)] pb-1
            after:content-[''] after:block after:h-[3px] after:w-16 
            after:bg-[var(--primary)] after:mt-2"
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
