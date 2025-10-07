// src/types/splide-react.d.ts
declare module "@splidejs/react-splide" {
  import * as React from "react";

  export interface SplideProps {
    options?: Record<string, unknown>;
    hasTrack?: boolean;
    className?: string;
    children?: React.ReactNode;
    [key: string]: unknown;
  }

  export interface SplideSlideProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    [key: string]: unknown;
  }

  export const Splide: React.FC<SplideProps>;
  export const SplideSlide: React.FC<SplideSlideProps>;
}
