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
  siteUrl: string;
  pageName: string;
  clinicName: string;
  professionalName: string;
  professionalRole: string;
  address: string;
  phone: string;
  phoneE164: string;
  email: string;
  instagramUrl: string;
  whatsappUrl: string;
  reviewUrl: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  location: {
    city: string;
    state: string;
    stateCode: string;
    country: string;
    serviceAreaLabel: string;
    attendanceMode: string;
  };
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
  siteUrl: "https://www.camilaterapeutatrg.com.br",
  pageName: "Camila Almeida - Terapeuta TRG",
  clinicName: "Camila Almeida",
  professionalName: "Camila Almeida",
  professionalRole: "Terapeuta TRG",
  address: "João Monlevade - MG | Atendimento online",
  phone: "31 98396-2948",
  phoneE164: "+5531983962948",
  email: "camilas_dm@hotmail.com",
  instagramUrl: "https://www.instagram.com/camilaterapeutatrg__/",
  whatsappUrl:
    "https://wa.me/5531983962948?text=Olá%20Camila%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20TRG",
  reviewUrl: "https://g.page/r/CfDmf7dYj1uVEAE/review",
  seo: {
    title: "Camila Almeida | Terapeuta TRG em João Monlevade - MG",
    description:
      "Terapeuta TRG para João Monlevade - MG. Atendimento online para ansiedade, traumas emocionais, bloqueios e dores do passado com Terapia de Reprocessamento Generativo.",
    keywords: [
      "Camila Almeida",
      "terapeuta TRG em João Monlevade",
      "terapeuta em João Monlevade",
      "terapia TRG João Monlevade",
      "Terapia de Reprocessamento Generativo",
      "TRG",
      "terapia online",
      "ansiedade",
      "traumas emocionais",
      "bloqueios emocionais",
      "João Monlevade MG",
    ],
  },
  location: {
    city: "João Monlevade",
    state: "Minas Gerais",
    stateCode: "MG",
    country: "Brasil",
    serviceAreaLabel: "João Monlevade - MG",
    attendanceMode: "Atendimento online",
  },
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
    ctaLabel: "AGENDE SUA SESSÃO",
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
    ctaLabel: "AGENDE SUA SESSÃO",
  },
  support: {
    title: "Em quais situações a terapia TRG pode te ajudar?",
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
    ctaLabel: "AGENDE SUA SESSÃO",
  },
  about: {
    title: "Camila Almeida - Terapeuta TRG",
    paragraphs: [
      "Ajudo pessoas a superar traumas emocionais, ansiedade, bloqueios e dores do passado através da Terapia de Reprocessamento Generativo, promovendo mais leveza, equilíbrio emocional e liberdade interior.",
    ],
    emphasis: "Reprocessando emoções para uma vida mais leve",
    imageUrl: "/images/psychologist/profile.jpeg",
    ctaLabel: "AGENDE SUA SESSÃO",
  },
  faq: {
    title: "Dúvidas Frequentes",
    items: [
      {
        question: "Como a TRG pode me ajudar?",
        answer:
          "A TRG ajuda o cérebro a reprocessar emoções ligadas a experiências difíceis. Com isso, o sofrimento diminui e a pessoa sente mais leveza, segurança e equilíbrio.",
      },
      {
        question: "Quanto tempo dura o tratamento com TRG?",
        answer:
          "O tempo varia de acordo com a história e as necessidades de cada pessoa. Muitas pessoas percebem mudanças já nas primeiras sessões.",
      },
      {
        question:
          "A TRG é adequada para todos os tipos de problemas emocionais?",
        answer:
          "A TRG pode ajudar em ansiedade, traumas, inseguranças e dores emocionais do passado. A melhor forma de saber se ela é indicada para você é por meio de uma avaliação individual.",
      },
      {
        question: "Posso combinar a TRG com outras formas de terapia?",
        answer:
          "Sim, a TRG pode ser combinada com outras abordagens quando isso fizer sentido para o seu processo. Essa decisão deve ser avaliada de forma personalizada.",
      },
    ],
  },
  finalCta: {
    title:
      "Liberte-se de emoções que ainda prendem você ao passado e descubra uma nova forma de viver com mais leveza, segurança e equilíbrio emocional.",
    description:
      '"A TRG não busca apenas falar sobre o problema, mas ajudar o cérebro a reprocessar as emoções ligadas às experiências vividas."',
    buttonLabel: "AGENDE SUA SESSÃO",
  },
  footer: {
    registration: "Camila Almeida - Terapeuta TRG",
    legalNote: "Reprocessando emoções para uma vida mais leve",
    copyright: "© Todos os direitos reservados",
  },
};
