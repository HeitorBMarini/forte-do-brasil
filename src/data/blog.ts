import type { StaticImageData } from "next/image";

// ✅ imagens dos primeiros artigos
import heroEsquadrias  from "@/components/imgs/blog/esquadria-serralheria.png";
import heroEstruturas  from "@/components/imgs/blog/estrutura-metalica.png";
import heroPintura     from "@/components/imgs/blog/pintura-industrial.png";
import heroReforma     from "@/components/imgs/blog/serralheria-reforma.png";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cover?: StaticImageData | string;
  content: string;
  date: string;
};

export const POSTS: Post[] = [
  {
    slug: "estruturas-metalicas-melhor-opcao",
    title: "Estruturas Metálicas: Por que são a Melhor Opção para Construções?",
    excerpt:
      "Rapidez de obra, alta resistência, versatilidade, sustentabilidade e excelente custo-benefício: entenda por que o aço domina projetos modernos.",
    cover: heroEstruturas,
    date: "2025-01-15",
    content: `...`,
  },
  {
    slug: "serralheria-e-reforma-estrutural",
    title: "Serralheria e Reforma Estrutural: segurança e valorização",
    excerpt:
      "Quando intervir na estrutura? Como a serralheria reforça vigas, escadas, mezaninos e telhados com soluções sob medida.",
    cover: heroReforma,
    date: "2025-01-10",
    content: `...`,
  },
  {
    slug: "pintura-industrial-protecao-durabilidade",
    title: "Pintura Industrial: proteção, durabilidade e valorização",
    excerpt:
      "Epóxi, PU, anticorrosiva e eletrostática a pó: onde aplicar e por que contratar um serviço profissional.",
    cover: heroPintura,
    date: "2025-01-07",
    content: `...`,
  },
  {
    slug: "esquadrias-e-serralheria",
    title: "Esquadrias e Serralheria: beleza, funcionalidade e segurança",
    excerpt:
      "Portas, janelas e fachadas com durabilidade, conforto e estética — e como a serralheria personalizada eleva o projeto.",
    cover: heroEsquadrias,
    date: "2025-01-05",
    content: `...`,
  },

  // 🚀 novos artigos SEM imagem
  {
  slug: "fabricacao-estruturas-metalicas-sob-medida",
  title: "Fabricação de Estruturas Metálicas Sob Medida: Vantagens e Aplicações",
  excerpt:
    "Descubra as vantagens da fabricação de estruturas metálicas sob medida e como essa solução pode tornar seu projeto mais seguro, rápido e econômico.",
  date: "2025-01-20",
  content: `
  <p><strong>Fabricação de Estruturas Metálicas Sob Medida: Vantagens e Aplicações</strong></p>

  <p>Descubra as vantagens da fabricação de estruturas metálicas sob medida e como essa solução pode tornar seu projeto mais seguro, rápido e econômico.</p>
<br>
  <h2>Por que investir em Estruturas Metálicas Sob Medida?</h2>
  <p>A fabricação de estruturas metálicas sob medida vem ganhando destaque no setor da construção civil e industrial por oferecer soluções personalizadas, resistentes e de alto desempenho. Diferente das opções padronizadas, o projeto sob encomenda garante que cada detalhe seja adaptado às necessidades específicas do cliente, aumentando a eficiência e reduzindo custos com desperdícios.</p>
<br>
  <h3>Onde utilizar Estruturas Metálicas Personalizadas?</h3>
  <ul>
    <li>Galpões industriais e comerciais</li>
    <li>Mezaninos metálicos para aproveitamento do espaço interno</li>
    <li>Coberturas e telhados resistentes e duradouros</li>
    <li>Passarelas e plataformas com alta segurança</li>
    <li>Projetos para o agronegócio, como silos e armazéns</li>
  </ul>
<br>
  <h3>Vantagens da Fabricação Sob Medida</h3>
  <ul>
    <li><strong>Rapidez na execução:</strong> montagem simplificada e menor tempo de obra.</li>
    <li><strong>Durabilidade:</strong> uso de aço de alta qualidade com pintura epóxi ou galvanização.</li>
    <li><strong>Flexibilidade:</strong> projetos totalmente adaptados ao espaço e à necessidade do cliente.</li>
    <li><strong>Custo-benefício:</strong> redução de retrabalhos e menor manutenção.</li>
    <li><strong>Expansão futura:</strong> possibilidade de ampliar a estrutura conforme o crescimento do negócio.</li>
  </ul>
<br>
  <h3>Etapas do Processo de Fabricação</h3>
  <ul>
    <li>Projeto e cálculo estrutural – análise técnica e definição do tipo de aço.</li>
    <li>Corte e conformação do metal – precisão garantida por máquinas especializadas.</li>
    <li>Soldagem e montagem – união de peças com máxima resistência.</li>
    <li>Acabamento e proteção – pintura ou galvanização para evitar corrosão.</li>
  </ul>
  <br>

  <h3>Conclusão</h3>
  <p>Investir em uma estrutura metálica sob medida é garantir qualidade, eficiência e segurança em qualquer projeto. Seja para galpões, indústrias, comércios ou agronegócio, essa solução oferece praticidade e excelente retorno sobre o investimento.</p>

  <p><em>Quer saber como a fabricação de estruturas metálicas pode transformar o seu projeto? Entre em contato com nossa equipe e solicite um orçamento personalizado.</em></p>
  `,

  },
  {
  slug: "grades-protecao-guarda-corpos",
  title: "Grades de Proteção e Guarda-Corpos: Segurança e Funcionalidade em Estruturas Metálicas",
  excerpt:
    "Saiba como grades de proteção e guarda-corpos metálicos aumentam a segurança em obras e indústrias, com resistência, durabilidade e design sob medida.",
  date: "2025-01-18",
  content: `
  <p><strong>Grades de Proteção e Guarda-Corpos: Segurança e Funcionalidade em Estruturas Metálicas</strong></p>

  <p>Saiba como grades de proteção e guarda-corpos metálicos aumentam a segurança em obras e indústrias, com resistência, durabilidade e design sob medida.</p>
<br>
  <h2>O que são Grades de Proteção e Guarda-Corpos?</h2>
  <p>As grades de proteção e guarda-corpos são estruturas metálicas desenvolvidas para garantir a segurança de pessoas e equipamentos em diferentes ambientes. Com fabricação sob medida, podem ser aplicadas em áreas industriais, comerciais e residenciais, oferecendo resistência, durabilidade e funcionalidade sem abrir mão do design.</p>
<br>
  <h3>Onde Utilizar Grades de Proteção e Guarda-Corpos?</h3>
  <ul>
    <li>Escadas e mezaninos metálicos</li>
    <li>Varandas e sacadas residenciais ou comerciais</li>
    <li>Plataformas industriais</li>
    <li>Máquinas e equipamentos (proteção perimetral)</li>
    <li>Áreas externas como jardins e espaços de lazer</li>
  </ul>
<br>
  <h3>Vantagens das Grades de Proteção e Guarda-Corpos Metálicos</h3>
  <ul>
    <li><strong>Segurança reforçada:</strong> proteção contra acidentes e quedas.</li>
    <li><strong>Durabilidade:</strong> resistência a impactos e ao desgaste do tempo.</li>
    <li><strong>Personalização:</strong> fabricação sob medida para atender cada projeto.</li>
    <li><strong>Versatilidade:</strong> aplicáveis em ambientes internos e externos.</li>
    <li><strong>Estética:</strong> possibilidade de acabamento moderno, com pintura epóxi ou galvanização.</li>
  </ul>
<br>
  <h3>Como é Feita a Fabricação?</h3>
  <ul>
    <li><strong>Levantamento do projeto:</strong> análise do local e definição das medidas exatas.</li>
    <li><strong>Corte e conformação do aço:</strong> precisão na fabricação das peças.</li>
    <li><strong>Soldagem e montagem:</strong> união de elementos com máxima resistência.</li>
    <li><strong>Acabamento final:</strong> pintura ou galvanização para maior durabilidade.</li>
  </ul>
<br>
  <h3>Conclusão</h3>
  <p>As grades de proteção e guarda-corpos metálicos são indispensáveis para aumentar a segurança em obras, empresas e residências. Com fabricação sob medida, oferecem soluções eficientes, duráveis e adaptadas às necessidades de cada cliente.</p>

  <p><em>Precisa de grades de proteção ou guarda-corpos para seu projeto? Fale com nossa equipe e solicite um orçamento personalizado agora mesmo.</em></p>
  `,
  },
{
  slug: "corrimaos-escadas-metalicas",
  title: "Corrimãos e Escadas Metálicas: Segurança, Resistência e Design Sob Medida",
  excerpt:
    "Escadas e corrimãos metálicos unem resistência, estética e segurança em projetos residenciais, comerciais e industriais.",
  date: "2025-01-16",
  content: `
  <p><strong>Corrimãos e Escadas Metálicas: Segurança, Resistência e Design Sob Medida</strong></p>

  <p>Descubra as vantagens dos corrimãos e escadas metálicas sob medida. Soluções seguras, resistentes e personalizadas para obras industriais e residenciais.</p>
<br>
  <h2>A Importância dos Corrimãos e Escadas Metálicas</h2>
  <p>Os corrimãos e escadas metálicas são soluções que unem segurança, durabilidade e estética em um único projeto. Com fabricação sob medida, atendem desde residências até grandes empreendimentos comerciais e industriais, garantindo resistência estrutural e acabamento de qualidade.</p>
  <p>Além da função prática, essas estruturas agregam valor estético, permitindo projetos modernos, funcionais e adaptados ao espaço disponível.</p>
<br>
  <h3>Onde Utilizar Escadas e Corrimãos Metálicos?</h3>
  <ul>
    <li>Residências – escadas internas e externas com design moderno</li>
    <li>Empresas e escritórios – estruturas seguras e sofisticadas para circulação</li>
    <li>Indústrias – escadas metálicas robustas para áreas técnicas e operacionais</li>
    <li>Comércios e shoppings – soluções duráveis que suportam grande fluxo de pessoas</li>
    <li>Áreas externas – resistentes às intempéries, ideais para jardins, varandas e acessos</li>
  </ul>
  <br>

  <h3>Vantagens das Escadas e Corrimãos Metálicos Sob Medida</h3>
  <ul>
    <li><strong>Alta resistência:</strong> suportam grande peso e uso contínuo.</li>
    <li><strong>Segurança garantida:</strong> corrimãos oferecem apoio e prevenção contra quedas.</li>
    <li><strong>Durabilidade:</strong> aço de qualidade, com pintura epóxi ou galvanização contra corrosão.</li>
    <li><strong>Design personalizado:</strong> adapta-se ao estilo do ambiente, moderno ou clássico.</li>
    <li><strong>Instalação prática:</strong> montagem rápida e eficiente.</li>
  </ul>
<br>
  <h3>Processo de Fabricação</h3>
  <ul>
    <li><strong>Projeto e dimensionamento:</strong> definição das medidas e cálculos estruturais.</li>
    <li><strong>Corte e modelagem do aço:</strong> adaptação ao design definido.</li>
    <li><strong>Soldagem e montagem:</strong> estrutura robusta e estável.</li>
    <li><strong>Acabamento final:</strong> pintura ou galvanização para proteção e estética.</li>
  </ul>
<br>
  <h3>Conclusão</h3>
  <p>Investir em corrimãos e escadas metálicas sob medida é optar por uma solução segura, moderna e durável, que se adapta a qualquer tipo de projeto. Seja em residências, indústrias ou comércios, essas estruturas oferecem praticidade e valorizam o espaço.</p>

  <p><em>Precisa de corrimãos ou escadas metálicas para sua obra? Entre em contato com nossa equipe e solicite um orçamento personalizado.</em></p>
  `,
}


];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
