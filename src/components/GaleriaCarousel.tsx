// src/components/GaleriaCarousel.tsx
import fs from "fs";
import path from "path";
import GaleriaCarouselClient from "./GaleriaCarouselClient";

/**
 * Server Component: lê os arquivos da pasta public/imgs/galeria
 * e passa a lista para o client component renderizar o carrossel.
 */
export default function GaleriaCarousel() {
  const dir = path.join(process.cwd(), "public", "imgs", "galeria");

  let files: string[] = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => f.match(/\.(png|jpe?g|webp|gif)$/i))
      .sort();
  } catch {
    files = [];
  }

  const images = files.map((f) => `/imgs/galeria/${f}`);

  return <GaleriaCarouselClient images={images} />;
}
