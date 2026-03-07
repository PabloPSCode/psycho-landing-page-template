export type SupportIconName = "mente" | "ansiedade" | "familia" | "proposito";

interface HeaderLink {
  label: string;
  href: string;
}

interface SupportItem {
  title: string;
  description: string;
  icon: SupportIconName;
}

interface FAQItem {
  question: string;
  answer: string;
}

export const psychologistLandingMock: {
  pageName: string;
  clinicName: string;
  professionalName: string;
  professionalRole: string;
  address: string;
  phone: string;
  email: string;
  instagramUrl: string;
  whatsappUrl: string;
  headerLinks: HeaderLink[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    imageUrl: string;
  };
  transformation: {
    title: string;
    paragraphs: string[];
    imageUrl: string;
  };
  method: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    ctaLabel: string;
  };
  support: {
    title: string;
    items: SupportItem[];
    ctaLabel: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    emphasis: string;
    imageUrl: string;
    ctaLabel: string;
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  finalCta: {
    title: string;
    description: string;
    buttonLabel: string;
  };
  footer: {
    registration: string;
    legalNote: string;
    copyright: string;
  };
} = {
  pageName: "Camila Almeida - Terapeuta TRG",
  clinicName: "Camila Almeida",
  professionalName: "Camila Almeida",
  professionalRole: "Terapeuta TRG",
  address: "Atendimento online",
  phone: "31 98912-6231",
  email: "camilas_dm@hotmail.com",
  instagramUrl: "https://www.instagram.com/camilasoares__/",
  whatsappUrl: "https://wa.me/5531912341234",
  headerLinks: [
    { label: "Início", href: "#inicio" },
    { label: "Método", href: "#metodo" },
    { label: "Sobre", href: "#sobre" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#contato" },
  ],
  hero: {
    eyebrow: "Camila Almeida - Terapeuta TRG",
    title: "Reprocessando emoções para uma vida mais leve",
    description:
      "Ajudo pessoas a superar traumas emocionais, ansiedade, bloqueios e dores do passado através da Terapia de Reprocessamento Generativo, promovendo mais leveza, equilíbrio emocional e liberdade interior.",
    ctaLabel: "Agende sua sessão",
    imageUrl: "/images/psychologist/hero-trg.jpg",
  },
  transformation: {
    title: "Liberte-se de emoções que ainda prendem você ao passado",
    paragraphs: [
      "Descubra uma nova forma de viver com mais leveza, segurança e equilíbrio emocional.",
    ],
    imageUrl: "/images/psychologist/transformation-trg.jpg",
  },
  method: {
    title: "O que é a TRG?",
    subtitle: "Terapia de Reprocessamento Generativo",
    paragraphs: [
      "A TRG é uma abordagem terapêutica que ajuda a pessoa a reprocessar memórias dolorosas e emoções negativas armazenadas no cérebro.",
      "Durante as sessões, trabalhamos para que o cérebro reorganize essas experiências, reduzindo o sofrimento emocional e trazendo mais paz e equilíbrio.",
    ],
    ctaLabel: "Agende sua sessão",
  },
  support: {
    title: "A TRG pode ajudar se você:",
    items: [
      {
        title: "Ansiedade constante",
        description: "Sente ansiedade ou preocupações constantes.",
        icon: "ansiedade",
      },
      {
        title: "Dores do passado",
        description:
          "Carrega experiências dolorosas do passado que ainda afetam o presente.",
        icon: "mente",
      },
      {
        title: "Medos e inseguranças",
        description: "Tem medos, inseguranças ou baixa autoestima.",
        icon: "proposito",
      },
      {
        title: "Tristeza profunda",
        description:
          "Vive tristeza profunda ou sentimentos difíceis de explicar.",
        icon: "ansiedade",
      },
      {
        title: "Padrões nos relacionamentos",
        description: "Percebe que repete padrões negativos em relacionamentos.",
        icon: "familia",
      },
      {
        title: "Culpa, vergonha e mágoas",
        description: "Carrega culpa, vergonha ou mágoas antigas.",
        icon: "mente",
      },
      {
        title: "Traumas e perdas",
        description:
          "Passou por traumas emocionais, perdas ou situações difíceis.",
        icon: "mente",
      },
      {
        title: "Mais leveza e confiança",
        description:
          "Deseja se sentir mais leve, confiante e em paz consigo mesmo.",
        icon: "proposito",
      },
    ],
    ctaLabel: "Agende sua sessão",
  },
  about: {
    title: "Camila Almeida - Terapeuta TRG",
    paragraphs: [
      "Ajudo pessoas a superar traumas emocionais, ansiedade, bloqueios e dores do passado através da Terapia de Reprocessamento Generativo, promovendo mais leveza, equilíbrio emocional e liberdade interior.",
    ],
    emphasis: "Reprocessando emoções para uma vida mais leve",
    imageUrl: "/images/psychologist/profile.png",
    ctaLabel: "Agende sua sessão",
  },
  faq: {
    title: "Dúvidas Frequentes",
    items: [
      {
        question: "Como a TRG pode me ajudar?",
        answer:
          "A TRG é uma abordagem terapêutica que ajuda a reprocessar memórias dolorosas e emoções negativas armazenadas no cérebro. Durante as sessões, trabalhamos para que o cérebro reorganize essas experiências, reduzindo o sofrimento emocional e trazendo mais paz e equilíbrio. Ela pode ajudar em casos de ansiedade, dores do passado, medos, inseguranças, baixa autoestima, tristeza profunda, padrões negativos nos relacionamentos, culpa, vergonha, mágoas, traumas emocionais e perdas. A TRG não busca apenas falar sobre o problema, mas ajudar o cérebro a reprocessar as emoções ligadas às experiências vividas, promovendo mais leveza, segurança, equilíbrio emocional e liberdade interior.",
      },
      {
        question: "Quanto tempo dura o tratamento com TRG?",
        answer:
          "A duração do tratamento com TRG pode variar dependendo das necessidades individuais de cada pessoa. Algumas pessoas podem começar a sentir melhorias significativas após algumas sessões, enquanto outras podem precisar de um período mais longo para alcançar os resultados desejados. Em geral, muitas pessoas experimentam benefícios notáveis em um período de 4 a 8 sessões, mas isso pode variar. O importante é que o processo seja conduzido de forma personalizada, respeitando o ritmo e as necessidades de cada indivíduo.",
      },
      {
        question:
          "A TRG é adequada para todos os tipos de problemas emocionais?",
        answer:
          "A TRG é uma abordagem terapêutica versátil que pode ser eficaz para uma ampla gama de problemas emocionais, incluindo ansiedade, traumas, bloqueios emocionais, dores do passado, medos, inseguranças, baixa autoestima, tristeza profunda e padrões negativos nos relacionamentos. No entanto, é importante ressaltar que cada pessoa é única, e a eficácia da TRG pode variar dependendo das circunstâncias individuais. É recomendado consultar um terapeuta qualificado para avaliar se a TRG é a abordagem mais adequada para o seu caso específico.",
      },
      {
        question: "Posso combinar a TRG com outras formas de terapia?",
        answer:
          "Sim, a TRG pode ser combinada com outras formas de terapia, dependendo das necessidades e preferências individuais. Muitos terapeutas utilizam uma abordagem integrativa, combinando técnicas de diferentes modalidades terapêuticas para oferecer um tratamento mais abrangente e personalizado. É importante discutir suas opções de tratamento com um terapeuta qualificado para determinar a melhor abordagem para o seu caso específico.",
      },
    ],
  },
  finalCta: {
    title:
      "Liberte-se de emoções que ainda prendem você ao passado e descubra uma nova forma de viver com mais leveza, segurança e equilíbrio emocional.",
    description:
      '"A TRG não busca apenas falar sobre o problema, mas ajudar o cérebro a reprocessar as emoções ligadas às experiências vividas."',
    buttonLabel: "Agende sua sessão",
  },
  footer: {
    registration: "Camila Almeida - Terapeuta TRG",
    legalNote: "Reprocessando emoções para uma vida mais leve",
    copyright: "© Todos os direitos reservados",
  },
};
