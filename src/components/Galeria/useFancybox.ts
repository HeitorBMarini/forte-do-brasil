// ./components/Galeria/useFancybox.ts
"use client";

import { useCallback, useEffect, useState } from "react";
import { Fancybox, type FancyboxOptions } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

type RefCb = (node: HTMLDivElement | null) => void;

export function useFancybox(options: Partial<FancyboxOptions> = {}) {
  const [root, setRoot] = useState<HTMLDivElement | null>(null);

  const bind = useCallback(() => {
    if (!root) return;
    // Rebind idempotente (desfaz e refaz)
    Fancybox.unbind(root);
    Fancybox.bind(root, "[data-fancybox]", options);
  }, [root, options]);

  useEffect(() => {
    if (!root) return;
    bind();
    return () => Fancybox.unbind(root);
  }, [root, bind]);

  const ref: RefCb = useCallback((node) => {
    setRoot(node);
  }, []);

  const refresh = bind;

  return { ref, refresh };
}
