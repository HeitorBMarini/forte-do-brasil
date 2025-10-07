// ./components/Galeria/GaleriaCarousel.tsx
"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Search } from "lucide-react";
import { useFancybox } from "./Galeria/useFancybox";

const imageCount = 19;
const IMAGES = Array.from({ length: imageCount }, (_, i) =>
  i === 0 ? "/imgs/galeria/galeria.png" : `/imgs/galeria/galeria-${i + 1}.png`
);

export default function GaleriaCarousel() {
  const fancybox = useFancybox({}); // { ref, refresh }

  return (
    <section className="w-full py-16 bg-[var(--light)]">
      <div className="mx-auto max-w-7xl px-4 text-center" ref={fancybox.ref}>
        <p className="text-sm text-zinc-500">Veja</p>
        <h2 className="mb-8 text-2xl font-bold text-[var(--primary)] md:text-3xl">
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
            // rebind quando o Splide monta/atualiza/move
            onMounted={fancybox.refresh}
            onMoved={fancybox.refresh}
            onUpdated={fancybox.refresh}
          >
            {IMAGES.map((src, i) => (
              <SplideSlide key={src}>
                <a
                  data-fancybox="galeria"
                  href={src}
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

                  <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span className="pointer-events-none absolute left-1/2 bottom-4 -translate-x-1/2 translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow">
                      <Search className="h-5 w-5 text-[var(--primary)]" />
                    </span>
                  </span>
                </a>
              </SplideSlide>
            ))}
          </Splide>

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
              color: #1a2602;
            }
            .galeria-splide .splide__arrow svg {
              width: 22px;
              height: 22px;
              fill: currentColor;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
