// src/data/services.ts

export type ServiceItem = {
  slug: string;
  label: string;
  desc: string;
  img?: string;
};

/**
 * LISTA PLANA de serviços (sem categorias)
 * Ajuste as extensões das imagens (.png/.jpg) se necessário.
 */
export const SERVICES: ServiceItem[] = [
  {
    slug: "remocao-arvore",
    label: "Remoção de Árvore",
    img: "/imgs/servicos/remocao-arvore.png",
    desc: `A remoção de árvores é um serviço essencial quando há risco à segurança,
interferência com construções ou quando a árvore apresenta doenças graves que
comprometem sua saúde e a do ambiente ao redor. Na Forte Brasil, realizamos cada
serviço com planejamento, técnica e responsabilidade ambiental, garantindo
segurança para pessoas, imóveis e o meio ambiente.

Nosso processo inclui avaliação detalhada da árvore, identificação de riscos,
uso de equipamentos especializados e descarte correto dos resíduos. Além disso,
prezamos pela preservação do máximo possível do ecossistema, oferecendo alternativas
como transplante ou compensação com novas plantações quando viável.

Com a Forte Brasil, você tem a certeza de um serviço seguro, eficiente e realizado
por profissionais experientes.`,
  },
  {
    slug: "destoca-arvore",
    label: "Destoca de Árvores",
    img: "/imgs/servicos/destoca-arvore.png",
    desc: `O destoca de árvores é o processo de remoção completa do toco ou raiz
de uma árvore após sua poda ou remoção, garantindo que o terreno fique livre para
novas construções, jardins ou projetos de paisagismo. Esse serviço é essencial
para evitar problemas como proliferação de pragas, obstáculos no solo ou interferência
em futuras obras.

Na Forte Brasil, realizamos o destoca com equipamentos especializados e técnicas seguras,
garantindo que o serviço seja rápido, eficiente e com mínimo impacto no entorno. Nossa equipe
avalia cada situação, preserva o máximo possível do solo e das plantas ao redor e realiza o
descarte correto do material removido.

Com o serviço de destoca da Forte Brasil, você mantém seu terreno limpo, seguro e pronto para
novos projetos, com a tranquilidade de contar com profissionais experientes e comprometidos
com a qualidade e o respeito à natureza.`,
  },
  {
    slug: "podas-geral",
    label: "Podas em Geral",
    img: "/imgs/servicos/podas-geral.png",
    desc: `A poda de árvores é fundamental para manter a saúde, segurança e estética
de jardins, áreas verdes e propriedades. Realizamos podas de forma técnica e planejada,
respeitando a biologia das árvores e garantindo que cada corte seja feito no momento
certo e da forma correta.

Tipos de poda que executamos:
• Formação: para árvores jovens, visando um desenvolvimento harmonioso da copa.
• Limpeza: remoção de galhos secos, doentes ou quebrados, prevenindo acidentes.
• Redução: controle do porte ou de galhos que interferem em construções, redes ou calçadas.
• Estética: valorização visual do jardim, equilibrando forma, tamanho e simetria da copa.

Utilizamos equipamentos modernos e técnicas seguras, com práticas sustentáveis como
reaproveitamento de resíduos e preservação do ecossistema ao redor.`,
  },
  {
    slug: "limpeza-terreno",
    label: "Limpeza e Organização de Terrenos",
    img: "/imgs/servicos/limpeza-terreno.png",
    desc: `Serviço completo para preparar áreas para construção, paisagismo ou manutenção
do espaço limpo e seguro. Fazemos avaliação, planejamento e execução eficientes, deixando
o terreno livre de entulhos, galhos, restos de poda e materiais que possam oferecer riscos.

Processo típico:
• Remoção de vegetação indesejada (mato alto, arbustos secos, galhos caídos).
• Destoca e nivelamento quando necessário.
• Separação e descarte correto de resíduos, priorizando práticas sustentáveis.
• Organização geral do espaço, deixando tudo pronto para novas atividades.

Transformamos terrenos abandonados ou desorganizados em áreas seguras, limpas e valorizadas,
respeitando o meio ambiente e a segurança de todos.`,
  },
];

/* ----------------- Helpers (PLANO) ----------------- */

/** Busca um serviço pelo slug (sem categorias) */
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/** Slugs úteis para geração de rotas estáticas (SSG) */
export const ALL_SERVICE_SLUGS = SERVICES.map((s) => s.slug);

/* ----------------- Compat (opcional): Categoria única ----------------- */

export type ServiceCategory = {
  category: string;
  label: string;
  desc: string;
  img?: string;
  children: ServiceItem[];
};

/**
 * Mantido apenas para compatibilidade com trechos legados.
 * Pode remover quando todo o app estiver usando a lista plana (SERVICES).
 */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    category: "servicos",
    label: "Serviços",
    desc:
      "Serviços especializados para manutenção, segurança e valorização de áreas verdes, executados com técnica, planejamento e responsabilidade ambiental.",
    img: "/imgs/servicos/servico.png",
    children: SERVICES,
  },
];

/** Helpers legados */
export function getCategory(category: string) {
  return SERVICE_CATEGORIES.find((c) => c.category === category);
}

export function getService(category: string, slug: string) {
  const cat = getCategory(category);
  return { cat, service: cat?.children.find((s) => s.slug === slug) };
}

export const ALL_CATEGORY_SLUGS = SERVICE_CATEGORIES.map((c) => c.category);
export const ALL_SERVICE_PATHS = SERVICE_CATEGORIES.flatMap((c) =>
  c.children.map((s) => ({ category: c.category, slug: s.slug })),
);
