"use client";

import { useEffect, useState } from "react";
// A lib exporta Fancybox nesse path:
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function useFancybox(options: any = {}) {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!root) return;
    NativeFancybox.bind(root, "[data-fancybox]", options);
    return () => NativeFancybox.unbind(root);
  }, [root, options]);

  return [setRoot] as const;
}
