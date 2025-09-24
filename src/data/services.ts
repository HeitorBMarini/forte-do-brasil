// src/data/services.ts

export type ServiceItem = {
  slug: string;
  label: string;
  desc: string;
  img?: string;
};

export type ServiceCategory = {
  category: string;
  label: string;
  desc: string;
  img?: string;
  children: ServiceItem[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    category: "exemplo",
    label: "Categoria Exemplo",
    desc: "Descrição da categoria exemplo em lorem ipsum dolor sit amet.",
    img: "/imgs/servicos/servico.png", // ✅ caminho direto
    children: [
      {
        slug: "servico-exemplo",
        label: "Serviço Exemplo",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        img: "/imgs/servicos/servico.png", // ✅ caminho direto
      },
    ],
  },
];

// Helpers
export function getCategory(category: string) {
  return SERVICE_CATEGORIES.find((c) => c.category === category);
}

export function getService(category: string, slug: string) {
  const cat = getCategory(category);
  return { cat, service: cat?.children.find((s) => s.slug === slug) };
}

export const ALL_CATEGORY_SLUGS = SERVICE_CATEGORIES.map((c) => c.category);
export const ALL_SERVICE_PATHS = SERVICE_CATEGORIES.flatMap((c) =>
  c.children.map((s) => ({ category: c.category, slug: s.slug }))
);
