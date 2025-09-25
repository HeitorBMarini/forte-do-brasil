// types/splide-react.d.ts
declare module "@splidejs/react-splide" {
  // Reexporta os tipos reais do pacote
  export * from "@splidejs/react-splide/dist/types";

  // E também expõe os componentes (fallback para qualquer caso)
  const Splide: any;
  const SplideSlide: any;
  export { Splide, SplideSlide };
}

// Se você importa o CSS direto, ajude o TS a aceitar:
declare module "@splidejs/react-splide/css";
