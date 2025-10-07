"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/services";

export default function ServiceRail() {
  const pathname = usePathname() || "";

  const isServicos = pathname.startsWith("/servicos");
  const [open, setOpen] = useState(false);

  const categoryFromSlug = useCallback((slug: string) => {
    for (const c of SERVICE_CATEGORIES) {
      if (c.children.some((s) => s.slug === slug)) return c.category;
    }
    return "";
  }, []);

  const currentSlug = useMemo(() => {
    const segs = pathname.split("/").filter(Boolean); 
    return segs[1] ?? "";
  }, [pathname]);

  const currentCategory = useMemo(
    () => (currentSlug ? categoryFromSlug(currentSlug) : ""),
    [currentSlug, categoryFromSlug]
  );

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const isExpanded = (cat: string) =>
    expanded[cat] ?? (cat === currentCategory);
  const toggleCat = (cat: string) =>
    setExpanded((prev) => ({ ...prev, [cat]: !isExpanded(cat) }));

  if (!isServicos) return null;

  return (
    <>
      {open && (
        <button
          aria-label="Fechar menu de serviços"
          onClick={close}
          className="fixed inset-0 z-[89] bg-black/40 md:hidden"
        />
      )}

      <aside
        id="service-rail"
        className={`
          fixed top-0 right-0 z-[90]
          h-screen w-[85vw] md:w-[280px]
          translate-x-full ${open ? "!translate-x-0" : ""}
          transition-transform duration-300
          bg-primary text-white shadow-xl ring-1 ring-black/10
          overflow-y-auto overscroll-contain
        `}
        style={
          {
            "--rail-w": "280px",
          } as React.CSSProperties
        }
      >
        <header className="sticky top-0 z-10 border-b border-white/10 bg-primary px-4 py-3 text-sm font-semibold uppercase tracking-wide">
          Serviços
        </header>

        <nav className="space-y-2 p-3">
          {SERVICE_CATEGORIES.map((cat) => {
            const expandedNow = isExpanded(cat.category);
            const catActive = currentCategory === cat.category;
            const firstChild = cat.children[0];

            return (
              <div
                key={cat.category}
                className={`rounded-md ${catActive ? "bg-white/5" : ""}`}
              >
                <div className="flex items-center">
                  <Link
                    href={
                      firstChild
                        ? `/servicos/${firstChild.slug}`
                        : `/servicos` // fallback
                    }
                    className="flex-1 px-3 py-2 text-sm font-medium text-zinc-100 hover:text-white"
                    onClick={close}
                  >
                    {cat.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleCat(cat.category)}
                    aria-expanded={expandedNow}
                    aria-controls={`rail-cat-${cat.category}`}
                    className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-md text-zinc-100 hover:bg-white/10"
                    title={expandedNow ? "Recolher" : "Expandir"}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedNow ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {expandedNow && (
                  <div id={`rail-cat-${cat.category}`} className="pb-2 pl-1">
                    {cat.children.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/servicos/${s.slug}`}
                        className={`block rounded-md px-4 py-1.5 text-sm ${
                          s.slug === currentSlug
                            ? "bg-white/20 text-white"
                            : "text-zinc-200 hover:bg-white/10 hover:text-white"
                        }`}
                        onClick={close}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>

      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="service-rail"
        title={open ? "Fechar serviços" : "Abrir serviços"}
        className={`
          hidden md:flex
          fixed top-1/2 -translate-y-1/2 z-[91]
          h-16 w-8 rounded-l-md
          bg-[var(--secondary)] text-white shadow-lg
          items-center justify-center
          transition-all duration-300
        `}
        style={{
          right: open ? "280px" : "0px",
        }}
      >
        <ChevronLeft
          className={`h-4 w-4 transition-transform ${open ? "" : "rotate-180"}`}
        />
      </button>

      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="service-rail"
        title={open ? "Fechar serviços" : "Abrir serviços"}
        className={`
          md:hidden
          fixed bottom-48 right-5 z-[91]
          flex h-12 w-12 items-center justify-center
          rounded-full bg-[var(--secondary)] text-white shadow-lg
          transition-transform active:scale-95
        `}
      >
        <ChevronLeft
          className={`h-5 w-5 transition-transform ${open ? "" : "rotate-180"}`}
        />
      </button>
    </>
  );
}
