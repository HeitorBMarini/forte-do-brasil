"use client";

import * as React from "react";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Search, X } from "lucide-react";

type Props = { images: string[] };

export default function GaleriaCarouselClient({ images }: Props) {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };

  // ESC / setas teclado
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex]);

  return (
    <section className="w-full py-16 bg-[var(--light)]">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="text-sm text-zinc-500">Veja</p>
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-8">
          Nossos Trabalhos
        </h2>

        <div className="relative">
          <Splide
            aria-label="Galeria de trabalhos"
            options={{
              type: "loop",
              perPage: 4,
              perMove: 1,
              autoplay: true,
              gap: "1rem",
              speed: 1000,
              arrows: true,
              pagination: false,
              breakpoints: {
                1280: { perPage: 4 },
                1024: { perPage: 3 },
                768: { perPage: 2 },
                480: { perPage: 1 },
              },
            }}
            className="galeria-splide !px-2"
          >
            {images.map((src, i) => (
              <SplideSlide key={src + i}>
                <button
                  type="button"
                  onClick={() => openLightbox(i)}
                  className="group relative block w-full overflow-hidden rounded-xl"
                  title="Ampliar"
                >
                  <div className="relative h-[220px] w-full">
                    <Image
                      src={src}
                      alt={`Trabalho ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover"
                      priority={i < 4}
                    />
                  </div>

                  {/* overlay */}
                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* lupa com animação de baixo p/ cima */}
             <span
  className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-4 translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
>


                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow">
                      <Search className="h-5 w-5 text-[var(--primary)]" />
                    </span>
                  </span>
                </button>
              </SplideSlide>
            ))}
          </Splide>

          {/* setas do Splide centralizadas embaixo */}
          <style jsx global>{`
            .galeria-splide .splide__arrows {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              bottom: -48px;
              display: flex;
              gap: 12px;
              z-index: 5;
            }
            .galeria-splide .splide__arrow {
              position: static !important;
              width: auto;
              height: auto;
              background: transparent !important;
              border: 0 !important;
              box-shadow: none !important;
              opacity: 1;
              padding: 2px;
              color: #1a2602; /* fallback p/ var(--primary) */
            }
            .galeria-splide .splide__arrow svg {
              width: 22px;
              height: 22px;
              fill: currentColor;
            }
          `}</style>
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          {/* fechar (X) */}
          <button
            className="fixed right-4 top-4 z-[70] inline-flex items-center justify-center rounded-full bg-white/95 p-2 text-[var(--primary)] shadow"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>

          {/* setas do lightbox */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[70] rounded-full bg-white/95 px-3 py-2 text-[var(--primary)] shadow hover:bg-white"
            aria-label="Anterior"
          >
            &#8249;
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[70] rounded-full bg-white/95 px-3 py-2 text-[var(--primary)] shadow hover:bg-white"
            aria-label="Próxima"
          >
            &#8250;
          </button>

          {/* imagem ampliada */}
          <div
            className="relative max-h-[95vh] max-w-[95vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex]}
              alt="Imagem ampliada"
              width={2000}
              height={1500}
              className="h-auto w-auto max-h-[120vh] max-w-[120vw] object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
