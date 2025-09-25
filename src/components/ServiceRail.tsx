"use client";

import { useState, useCallback, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/services";

export default function ServiceRail() {
  const pathname = usePathname();

  const isServicos = pathname.startsWith("/servicos");
  const [open, setOpen] = useState(false);

  const currentCategory = useMemo(() => {
    const segs = pathname.split("/").filter(Boolean); // ["servicos", "categoria", "slug?"]
    return segs[1] || "";
  }, [pathname]);

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const isExpanded = (cat: string) => expanded[cat] ?? (cat === currentCategory);
  const toggleCat = (cat: string) =>
    setExpanded((prev) => ({ ...prev, [cat]: !isExpanded(cat) }));

  if (!isServicos) return null;

  return (
    <>
      {/* Backdrop (apenas mobile) */}
      {open && (
        <button
          aria-label="Fechar menu de serviços"
          onClick={close}
          className="fixed inset-0 z-[89] bg-black/40 md:hidden"
        />
      )}

      {/* Drawer (mobile + desktop) */}
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
            // variável usada também no posicionamento do botão desktop
            // @ts-ignore
            "--rail-w": "280px",
          } as React.CSSProperties
        }
      >
        <header className="px-4 py-3 border-b border-white/10 font-semibold uppercase tracking-wide text-sm sticky top-0 bg-primary z-10">
          Serviços
        </header>

        <nav className="p-3 space-y-2">
          {SERVICE_CATEGORIES.map((cat) => {
            const expandedNow = isExpanded(cat.category);
            const catActive = currentCategory === cat.category;

            return (
              <div
                key={cat.category}
                className={`rounded-md ${catActive ? "bg-white/5" : ""}`}
              >
                {/* Cabeçalho da categoria: link + caret */}
                <div className="flex items-center">
                  <Link
                    href={`/servicos/${cat.category}`}
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
                      className={`h-4 w-4 transition-transform ${expandedNow ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {/* Lista de serviços da categoria */}
                {expandedNow && (
                  <div id={`rail-cat-${cat.category}`} className="pb-2 pl-1">
                    {cat.children.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/servicos/${cat.category}/${s.slug}`}
                        className="block px-4 py-1.5 text-sm text-zinc-200 hover:text-white hover:bg-white/10 rounded-md"
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

      {/* Botão / aba – desktop */}
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
        <ChevronLeft className={`h-4 w-4 transition-transform ${open ? "" : "rotate-180"}`} />
      </button>

      {/* Botão flutuante – mobile */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="service-rail"
        title={open ? "Fechar serviços" : "Abrir serviços"}
        className={`
          md:hidden
          fixed bottom-48 right-5 z-[91]
          h-12 w-12 rounded-full
          bg-[var(--secondary)] text-white shadow-lg
          flex items-center justify-center
          transition-transform active:scale-95
        `}
      >
        <ChevronLeft className={`h-5 w-5 transition-transform ${open ? "" : "rotate-180"}`} />
      </button>
    </>
  );
}
