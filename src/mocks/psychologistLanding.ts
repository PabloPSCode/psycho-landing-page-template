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
  pageName: "Terapia TRG",
  clinicName: "Instituto Horizonte Terapêutico",
  professionalName: "Dra. Helena L. Costa",
  professionalRole: "Psicóloga Clínica | Especialista em Terapia TRG",
  address: "João Monlevade - MG",
  phone: "31 91234-1234",
  email: "contato@institutohorizonte.com.br",
  instagramUrl: "https://www.instagram.com/",
  whatsappUrl: "https://wa.me/5531912341234",
  headerLinks: [
    { label: "Início", href: "#inicio" },
    { label: "Método", href: "#metodo" },
    { label: "Sobre", href: "#sobre" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#contato" },
  ],
  hero: {
    eyebrow: "Cuidado psicológico para viver melhor",
    title: "Psicoterapia e acolhimento com identidade para a sua transformação",
    description:
      "Atendimento terapêutico autoral para superar traumas, fortalecer sua autoestima e construir uma vida com mais equilíbrio emocional.",
    ctaLabel: "Agende sua sessão",
    imageUrl: "/images/psychologist/hero-trg.jpg",
  },
  transformation: {
    title: "Juntos, vamos superar o passado e redefinir seu futuro",
    paragraphs: [
      "O peso do passado ainda influencia suas escolhas?",
      "Existe algo que te impede de alcançar seus sonhos e viver com mais leveza?",
      "Você não precisa carregar esse fardo sozinho(a). Há uma forma segura de ressignificar memórias e construir uma nova história.",
    ],
    imageUrl: "/images/psychologist/transformation-trg.jpg",
  },
  method: {
    title: "Conheça um pouco mais sobre a técnica mais avançada do século XXI em terapia",
    subtitle: "A TRG, Terapia de Reprocessamento Generativo",
    paragraphs: [
      "A TRG é uma abordagem terapêutica focada na raiz dos conflitos emocionais. Com ela, traumas, medos e padrões repetitivos são trabalhados de forma profunda e respeitosa.",
      "Ao ressignificar memórias dolorosas, o cérebro constrói novas respostas emocionais. Isso fortalece sua autonomia, melhora suas relações e amplia sua capacidade de tomar decisões.",
    ],
    ctaLabel: "Agende sua sessão",
  },
  support: {
    title: "Estou pronta para te ajudar!",
    items: [
      {
        title: "Traumas e bloqueios",
        description: "Ressignificação de experiências que ainda causam dor.",
        icon: "mente",
      },
      {
        title: "Ansiedade e estresse",
        description: "Redução de sintomas e recuperação de equilíbrio emocional.",
        icon: "ansiedade",
      },
      {
        title: "Relações familiares",
        description: "Melhoria da comunicação e fortalecimento de vínculos.",
        icon: "familia",
      },
      {
        title: "Propósito de vida",
        description: "Desenvolvimento de clareza para avançar com segurança.",
        icon: "proposito",
      },
    ],
    ctaLabel: "Agende sua sessão",
  },
  about: {
    title: "Sobre mim",
    paragraphs: [
      "Sou psicóloga clínica, terapeuta certificada em TRG e atuo com foco no acolhimento de adultos que desejam superar dores emocionais e viver com mais autonomia.",
      "Com uma abordagem ética e humanizada, conduzo sessões que respeitam sua história, seu ritmo e seus limites, sempre com escuta ativa e atenção individual.",
      "Meu compromisso é oferecer um espaço seguro para que você recupere sua força emocional e avance para uma vida mais leve e significativa.",
    ],
    emphasis: "Vamos juntas nessa transformação?",
    imageUrl: "/images/psychologist/about-trg.jpg",
    ctaLabel: "Agende sua sessão",
  },
  faq: {
    title: "Dúvidas Frequentes",
    items: [
      {
        question: "O que é Terapia de Reprocessamento Generativo (TRG)?",
        answer:
          "A TRG é uma abordagem terapêutica que trabalha a raiz dos conflitos emocionais, ajudando você a ressignificar experiências difíceis e reduzir sintomas emocionais persistentes.",
      },
      {
        question: "Quem pode se tratar com a TRG?",
        answer:
          "Adultos que desejam superar traumas, ansiedade, medos, inseguranças e padrões emocionais repetitivos podem se beneficiar da TRG, sempre com avaliação profissional individual.",
      },
      {
        question: "Como a TRG pode me ajudar na prática?",
        answer:
          "O método auxilia na redução do sofrimento emocional, melhora a clareza mental, fortalece sua autoestima e contribui para relações mais saudáveis no dia a dia.",
      },
      {
        question: "Como saber se a TRG é apropriada para mim?",
        answer:
          "Na primeira conversa avaliamos seu histórico, suas necessidades e seus objetivos para definir se a TRG é a abordagem mais indicada para o seu momento.",
      },
      {
        question: "Quais os benefícios da TRG?",
        answer:
          "Entre os principais benefícios estão alívio emocional, melhora do bem-estar, maior estabilidade interna e mais autonomia para lidar com desafios da vida.",
      },
      {
        question: "A TRG é regulamentada?",
        answer:
          "A aplicação clínica deve ser realizada por profissional qualificado e devidamente habilitado, seguindo princípios éticos e boas práticas de atendimento terapêutico.",
      },
      {
        question: "Quantas sessões são recomendadas e qual a duração?",
        answer:
          "A quantidade de sessões varia conforme cada caso. Em geral, os encontros têm duração média de 50 a 60 minutos e o plano é definido de forma personalizada.",
      },
      {
        question: "Qual é o valor de cada sessão?",
        answer:
          "Os valores são informados no contato inicial, de acordo com formato do atendimento, objetivo terapêutico e disponibilidade de agenda.",
      },
    ],
  },
  finalCta: {
    title: "Dê o primeiro passo e permita-se viver a transformação que você merece.",
    description:
      "Venha conversar comigo e tirar suas dúvidas sobre a TRG em um atendimento acolhedor.",
    buttonLabel: "Tire suas dúvidas",
  },
  footer: {
    registration:
      "CRP ativo | Especialização em Terapia de Reprocessamento Generativo (TRG)",
    legalNote:
      "Atendimento particular para adultos e casais, presencial e online.",
    copyright: "© Todos os direitos reservados.",
  },
};
