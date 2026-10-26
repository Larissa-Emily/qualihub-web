import React from "react";

import { FaCheck, FaCog, FaPaintBrush } from "react-icons/fa";
import { MdOutlineLightbulb } from "react-icons/md";
import { RiRobot2Fill } from "react-icons/ri";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { GoWorkflow } from "react-icons/go";
import { LuBrainCircuit } from "react-icons/lu";

const services = [
  {
    title: "QA & Testes",
    subtitle: "de software",
    icon: FaCheck,
    items: [
      "Testes manuais e automatizados",
      "Testes funcionais, regressão e validação",
      "Garantia de qualidade contínua",
    ],
  },
  {
    title: "Desenvolvimento",
    subtitle: "de sistemas",
    icon: FaCog,
    items: [
      "Aplicações web e APIs",
      "Código limpo, escalável e testável",
      "Foco em performance e manutenção",
    ],
  },
  {
    title: "Consultoria",
    subtitle: "em TI",
    icon: MdOutlineLightbulb,
    items: [
      "Análise técnica e arquitetural",
      "Apoio à tomada de decisão",
      "Melhoria de processos e qualidade",
    ],
  },
  {
    title: "Design e UX/UI",
    subtitle: "",
    icon: FaPaintBrush,
    items: [
      "Identidade visual e interfaces profissionais",
      "Design focado em usabilidade e conversão",
      "Experiência do usuário alinhada ao negócio",
    ],
  },
];

const aiSolutions = [
  {
    title: "Agentes",
    subtitle: "inteligentes",
    icon: RiRobot2Fill,
    items: [
      "Atendimento automatizado",
      "Integração com sistemas",
      "Respostas inteligentes",
    ],
  },
  {
    title: "Automação",
    subtitle: "com IA",
    icon: GoWorkflow,
    items: [
      "Otimização de processos",
      "Integração entre ferramentas",
      "Ganho de produtividade",
    ],
  },
  {
    title: "Análise",
    subtitle: "inteligente de dados",
    icon: TbBrandGoogleAnalytics,
    items: [
      "Análise de indicadores",
      "Identificação de padrões",
      "Relatórios inteligentes",
    ],
  },
  {
    title: "Sistemas",
    subtitle: "com IA integrada",
    icon: LuBrainCircuit,
    items: [
      "IA integrada a aplicações web",
      "Busca inteligente de informações",
      "Soluções sob medida",
    ],
  },
];

function ServiceCard({ title, subtitle, icon: Icon, items }) {
  return (
    <article className="w-full min-w-0 h-full border border-[#E6E6E6] rounded-lg p-5 sm:p-6">
      <div className="flex items-start gap-3 mb-5">
        <div className="w-[26px] h-[26px] shrink-0 rounded-md bg-[#FC7031] flex items-center justify-center text-white text-sm">
          <Icon />
        </div>

        <h3 className="min-w-0 min-h-[48px] text-[18px] font-semibold text-[#064282] leading-snug">
          {title}
          {subtitle && (
            <>
              <br />
              {subtitle}
            </>
          )}
        </h3>
      </div>

      <ul className="space-y-2 text-[#064282] text-[14px]">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <FaCheck className="text-[#064282] text-[12px] shrink-0 mt-1" />
            <span className="min-w-0">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ServiceGrid({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
      {items.map((item) => (
        <ServiceCard key={item.title} {...item} />
      ))}
    </div>
  );
}

export default function ServiceSection() {
  return (
    <section id="service" className="py-16 font-jakarta">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Nossos serviços */}
        <div>
          <header className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#064282] text-center xl:text-left">
              Nossos serviços
            </h2>
          </header>

          <ServiceGrid items={services} />
        </div>

        {/* Soluções com IA */}
        <div className="mt-12">
          <header className="mb-10">
            <h2 className="text-[22px] font-semibold text-[#064282] text-center xl:text-left">
              Soluções com IA
            </h2>
          </header>

          <ServiceGrid items={aiSolutions} />
        </div>
      </div>
    </section>
  );
}
