export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  htmlContent: string;
  backgroundUrl: string;
  readingTime: string;
  createdAt: string;
  updatedAt: string;
  authorName: string;
  authorAvatarUrl: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "o-que-e-trg-terapia-reprocessamento-generativo",
    title: "O que é a TRG e como ela pode transformar sua vida emocional",
    category: "Terapia",
    excerpt:
      "Entenda o que é a Terapia de Reprocessamento Generativo, como funciona e de que forma ela pode ajudar você a reprocessar memórias dolorosas e encontrar mais leveza.",
    htmlContent: `
      <p>A Terapia de Reprocessamento Generativo (TRG) é uma abordagem terapêutica moderna que trabalha com a forma como o cérebro armazena e processa memórias emocionais. Ao contrário de abordagens tradicionais que focam apenas na fala sobre o problema, a TRG age diretamente na raiz: as marcas emocionais gravadas na memória.</p>
      <h2>Como funciona o reprocessamento</h2>
      <p>Durante as sessões de TRG, o terapeuta conduz o paciente por um processo estruturado de identificação e reprocessamento de memórias carregadas de emoções negativas. O objetivo é que o cérebro reorganize essas experiências, dissolvendo o peso emocional associado a elas.</p>
      <p>Esse processo é possível porque o cérebro humano possui a capacidade de reconsolidar memórias — ou seja, cada vez que uma memória é acessada, ela se torna maleável por um breve período, permitindo que novas informações e perspectivas sejam integradas a ela.</p>
      <h2>O que a TRG pode tratar</h2>
      <p>A TRG tem demonstrado resultados significativos em casos de:</p>
      <ul>
        <li>Ansiedade crônica e ataques de pânico</li>
        <li>Traumas emocionais de infância ou vida adulta</li>
        <li>Bloqueios emocionais que limitam o desenvolvimento pessoal</li>
        <li>Padrões repetitivos em relacionamentos</li>
        <li>Baixa autoestima e insegurança profunda</li>
        <li>Sentimentos persistentes de culpa, vergonha ou mágoa</li>
      </ul>
      <h2>Resultados esperados</h2>
      <p>Muitas pessoas relatam perceber mudanças já nas primeiras sessões — uma sensação de leveza, de que algo "saiu do lugar". Com o avanço do processo, é comum notar maior clareza emocional, reações mais equilibradas a situações antes gatilhadoras e uma relação mais saudável consigo mesmo.</p>
      <p>A TRG não apaga memórias — ela transforma a carga emocional que essas memórias carregam, permitindo que você possa olhar para o passado sem ser dominado por ele.</p>
    `,
    backgroundUrl: "/images/psychologist/about-trg.jpg",
    readingTime: "5 min",
    createdAt: "2025-01-15T00:00:00Z",
    updatedAt: "2025-01-15T00:00:00Z",
    authorName: "Camila Almeida",
    authorAvatarUrl: "/images/psychologist/profile.jpeg",
    tags: ["TRG", "terapia", "saúde emocional", "reprocessamento"],
  },
  {
    id: "2",
    slug: "como-a-ansiedade-afeta-o-corpo-e-o-que-fazer",
    title: "Como a ansiedade afeta o corpo e o que fazer a respeito",
    category: "Saúde Mental",
    excerpt:
      "A ansiedade vai muito além de uma sensação mental. Ela se manifesta fisicamente de formas que muitas vezes surpreendem. Saiba como identificar e lidar com esses sinais.",
    htmlContent: `
      <p>A ansiedade é frequentemente descrita como uma sensação de preocupação ou medo intenso. Mas para quem a vive de perto, ela vai muito além disso — é uma experiência que habita o corpo inteiro, causando sintomas físicos que, muitas vezes, chegam antes mesmo do pensamento ansioso.</p>
      <h2>Os sinais físicos da ansiedade</h2>
      <p>O corpo reage ao estado ansioso através do sistema nervoso autônomo, liberando hormônios como o cortisol e a adrenalina. Isso pode causar:</p>
      <ul>
        <li>Tensão muscular, especialmente no pescoço, ombros e maxilar</li>
        <li>Dores de cabeça frequentes sem causa aparente</li>
        <li>Distúrbios digestivos, como náusea, diarreia ou síndrome do intestino irritável</li>
        <li>Palpitações cardíacas e sensação de aperto no peito</li>
        <li>Dificuldade para dormir ou sono agitado</li>
        <li>Fadiga persistente, mesmo com descanso adequado</li>
      </ul>
      <h2>Por que o corpo "sente" a ansiedade</h2>
      <p>Do ponto de vista neurológico, o cérebro ansioso opera em um estado de alerta constante — como se um perigo iminente estivesse sempre presente. Essa resposta de "luta ou fuga" foi essencial para a sobrevivência dos nossos ancestrais, mas no mundo moderno, é ativada por situações cotidianas como um prazo no trabalho ou um conflito em um relacionamento.</p>
      <p>Quando esse estado de alerta se torna crônico, o corpo paga um preço alto. Os sistemas imunológico, digestivo e cardiovascular sofrem com a sobrecarga hormonal contínua.</p>
      <h2>O que fazer</h2>
      <p>O primeiro passo é reconhecer que a ansiedade tem uma raiz emocional que precisa ser tratada — não apenas mascarada. Técnicas de respiração e mindfulness ajudam no manejo dos sintomas, mas para transformar o padrão ansioso de forma mais profunda, uma abordagem terapêutica como a TRG pode ser muito eficaz, pois trabalha diretamente com as memórias e experiências que originaram esse estado de alerta no sistema nervoso.</p>
    `,
    backgroundUrl: "/images/psychologist/transformation-trg.jpg",
    readingTime: "4 min",
    createdAt: "2025-02-03T00:00:00Z",
    updatedAt: "2025-02-03T00:00:00Z",
    authorName: "Camila Almeida",
    authorAvatarUrl: "/images/psychologist/profile.jpeg",
    tags: ["ansiedade", "saúde mental", "terapia", "bem-estar", "sintomas físicos"],
  },
  {
    id: "3",
    slug: "traumas-emocionais-na-infancia-e-seus-reflexos-na-vida-adulta",
    title: "Traumas emocionais na infância e seus reflexos na vida adulta",
    category: "Desenvolvimento Pessoal",
    excerpt:
      "Experiências dolorosas na infância deixam marcas que moldam comportamentos, crenças e padrões emocionais na vida adulta. Entenda como isso acontece e como é possível se libertar.",
    htmlContent: `
      <p>Quando vivemos experiências dolorosas na infância — abandono, rejeição, humilhação, negligência ou situações de medo — o cérebro em desenvolvimento registra essas memórias com uma intensidade emocional muito alta. E essas marcas, se não processadas, continuam influenciando nossa vida décadas depois.</p>
      <h2>Como o trauma se manifesta na vida adulta</h2>
      <p>Você já percebeu que reage de forma desproporcional a certas situações? Ou que repete padrões em relacionamentos que gostaria de mudar, mas não consegue? Esses são sinais comuns de traumas emocionais não resolvidos:</p>
      <ul>
        <li>Dificuldade em confiar nas pessoas, mesmo quando há razões para confiar</li>
        <li>Hipersensibilidade a críticas ou rejeições</li>
        <li>Sabotagem inconsciente de conquistas e relacionamentos</li>
        <li>Necessidade excessiva de aprovação ou controle</li>
        <li>Sensação de não ser "suficiente" em nenhuma área da vida</li>
        <li>Dificuldade em estabelecer ou manter limites saudáveis</li>
      </ul>
      <h2>O mecanismo por trás do trauma</h2>
      <p>O cérebro é um órgão que busca padrões. Quando uma experiência foi muito dolorosa, ele cria uma "regra" para proteger o organismo de passar por aquilo de novo. Essa regra opera abaixo do nível consciente, moldando comportamentos e percepções sem que a pessoa perceba a origem.</p>
      <p>Por isso, simplesmente "querer mudar" raramente é suficiente. A mudança real precisa acontecer no nível onde a memória emocional está gravada.</p>
      <h2>É possível se libertar</h2>
      <p>Sim. A neurociência moderna confirma que o cérebro é plástico — capaz de criar novos padrões e de reconsolidar memórias antigas. Abordagens como a TRG trabalham justamente nesse nível, ajudando o sistema nervoso a processar o que ficou "preso" e a liberar o peso emocional associado às experiências do passado.</p>
      <p>Esse não é um processo de apagar o passado, mas de se libertar dele — para que você possa viver o presente com mais leveza e autenticidade.</p>
    `,
    backgroundUrl: "/images/psychologist/hero-trg.png",
    readingTime: "6 min",
    createdAt: "2025-02-20T00:00:00Z",
    updatedAt: "2025-02-20T00:00:00Z",
    authorName: "Camila Almeida",
    authorAvatarUrl: "/images/psychologist/profile.jpeg",
    tags: ["trauma", "infância", "desenvolvimento pessoal", "TRG", "padrões emocionais"],
  },
  {
    id: "4",
    slug: "sinais-de-que-voce-precisa-comecar-uma-terapia",
    title: "7 sinais de que pode ser a hora de começar uma terapia",
    category: "Bem-estar",
    excerpt:
      "Muitas pessoas adiam a decisão de buscar ajuda terapêutica. Mas alguns sinais indicam que o momento de cuidar da saúde emocional chegou. Confira os principais.",
    htmlContent: `
      <p>Iniciar uma terapia ainda carrega algum estigma em muitas culturas, mas a verdade é que cuidar da saúde emocional é tão importante quanto cuidar da saúde física. Você não espera uma emergência médica para ir ao médico — por que esperaria uma crise emocional severa para buscar suporte psicológico?</p>
      <h2>Sinais de que pode ser hora de buscar ajuda</h2>
      <ul>
        <li><strong>Sensação persistente de que "algo está errado"</strong> — mesmo sem conseguir identificar exatamente o quê, você sente um peso ou uma insatisfação que não passa.</li>
        <li><strong>Dificuldade em lidar com emoções intensas</strong> — crises de choro, raiva desproporcional, ansiedade frequente ou sensação de vazio emocional.</li>
        <li><strong>Relacionamentos que causam sofrimento repetido</strong> — se você percebe que vive os mesmos conflitos com pessoas diferentes, pode haver um padrão emocional para ser trabalhado.</li>
        <li><strong>Sintomas físicos sem explicação médica</strong> — dores de cabeça crônicas, tensão muscular, problemas digestivos e insônia muitas vezes têm origem emocional.</li>
        <li><strong>Dificuldade para tomar decisões</strong> — medo paralisante, procrastinação excessiva ou sensação constante de estar "no caminho errado".</li>
        <li><strong>Memórias ou experiências do passado que ainda doem muito</strong> — se você pensa em algo e ainda sente aquela dor intensa, essa memória pode se beneficiar de reprocessamento.</li>
        <li><strong>Sensação de que está "no limite"</strong> — quando o peso emocional começa a afetar o desempenho no trabalho, a qualidade dos relacionamentos ou o autocuidado.</li>
      </ul>
      <h2>Começar mais cedo faz diferença</h2>
      <p>Quanto mais cedo você busca apoio, mais fácil é trabalhar as questões antes que elas se consolidem em padrões mais profundos. A terapia não é um recurso apenas para crises — é uma ferramenta de autoconhecimento e desenvolvimento emocional que pode transformar sua qualidade de vida de forma duradoura.</p>
      <p>Se você se identificou com algum dos sinais acima, considere dar o primeiro passo. Uma conversa inicial já pode trazer clareza sobre o que está acontecendo e qual caminho faz mais sentido para você.</p>
    `,
    backgroundUrl: "/images/psychologist/about-trg.jpg",
    readingTime: "4 min",
    createdAt: "2025-03-10T00:00:00Z",
    updatedAt: "2025-03-10T00:00:00Z",
    authorName: "Camila Almeida",
    authorAvatarUrl: "/images/psychologist/profile.jpeg",
    tags: ["terapia", "saúde mental", "bem-estar", "autoconhecimento"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);
}

export function formatBlogDate(dateStr: string): string {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateStr));
}
