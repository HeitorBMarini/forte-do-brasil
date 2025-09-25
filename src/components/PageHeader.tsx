"use client";

import Link from "next/link";
import { Home as HomeIcon, ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Crumb = { label: string; href?: string };

interface PageHeaderProps {
  title: string;
  /** Se não passar, cai no padrão: Home › {title} */
  breadcrumbs?: Crumb[];
  /** opcional: subtítulo/descrição breve abaixo do título */
  subtitle?: string;
}

export default function PageHeader({ title, breadcrumbs, subtitle }: PageHeaderProps) {
  // fallback: Home › {title}
  const crumbs: Crumb[] =
    breadcrumbs && breadcrumbs.length
      ? breadcrumbs
      : [
          { label: "Home", href: "/" },
          { label: title },
        ];

  return (
    <div className="w-full bg-[var(--light)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList className="flex items-center gap-2 text-sm text-[var(--dark-text)]">
            {crumbs.map((c, i) => {
              const isFirst = i === 0;
              const isLast = i === crumbs.length - 1;

              return (
                <div className="flex items-center gap-2" key={`${c.label}-${i}`}>
                  <BreadcrumbItem>
                    {isLast || !c.href ? (
                      <BreadcrumbPage className="font-bold capitalize">{c.label}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link href={c.href} className="flex items-center gap-2">
                          {isFirst && (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                              <HomeIcon size={14} />
                            </span>
                          )}
                          {isFirst ? "Home" : c.label}
                        </Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>

                  {!isLast && (
                    <BreadcrumbSeparator>
                      <ChevronRight size={14} className="text-[var(--dark-text)]" />
                    </BreadcrumbSeparator>
                  )}
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>

        {/* Título */}
        <h1
          className="mt-6 text-3xl font-bold text-[var(--dark-text)] pb-1
            after:content-[''] after:block after:h-[3px] after:w-16 
            after:bg-[var(--primary)] after:mt-2"
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 text-[15px] text-[var(--dark-text)]/75">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
