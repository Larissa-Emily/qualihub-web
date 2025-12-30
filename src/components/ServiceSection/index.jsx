import React from "react";
import { FaCheck, FaCog, FaPaintBrush } from "react-icons/fa";
import { MdOutlineLightbulb } from "react-icons/md";

export default function ServiceSection() {
  return (
    <section className="py-16 font-jakarta" id="service">
      {/* CONTAINER PADRÃO (MESMO DO HERO E MENU) */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Título */}
        <header className="mb-10">
          <h2 className="text-[32px] font-semibold text-[#064282]  text-center xl:text-left">
            Nossos serviços
          </h2>
        </header>

        {/* Cards */}
        <div
          className="
        grid
        grid-cols-1
        lgx:grid-cols-2
        xlx:grid-cols-4
        gap-8 xlx:gap-[200px]
        justify-items-center
        xl:justify-items-start
      "
        >
          {/* Card 1 */}
          <div className="w-[360px] border border-[#E6E6E6] rounded-lg p-6 ">
            <div className="flex items-start xl:justify-center gap-3 mb-4">
              <div className="w-[26px] h-[26px] rounded-md bg-[#FC7031] flex items-center justify-center text-white text-sm font-bold">
                <FaCheck />
              </div>
              <h3 className="h-[63px] text-[18px] font-semibold text-[#064282] leading-snug">
                QA & Testes <br /> de software
              </h3>
            </div>

            <ul className="space-y-2 text-[#064282] text-[14px]">
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#064282] text-[12px]" />
                Testes manuais e automatizados
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#064282] text-[12px]" />
                Testes funcionais, regressão e validação
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#064282] text-[12px]" />
                Garantia de qualidade contínua
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="w-[360px] border border-[#E6E6E6] rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-[26px] h-[26px] rounded-md bg-[#FC7031] flex items-center justify-center text-white text-sm font-bold">
                <FaCog />
              </div>
              <h3 className="h-[63px] text-[18px] font-semibold text-[#064282] leading-snug">
                Desenvolvimento <br /> de sistemas
              </h3>
            </div>

            <ul className="space-y-2 text-[#064282] text-[14px]">
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#064282] text-[12px]" />
                Aplicações web e APIs
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#064282] text-[12px]" />
                Código limpo, escalável e testável
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#064282] text-[12px]" />
                Foco em performance e manutenção
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="w-[360px] border border-[#E6E6E6] rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-[26px] h-[26px] rounded-md bg-[#FC7031] flex items-center justify-center text-white text-sm font-bold">
                <MdOutlineLightbulb />
              </div>
              <h3 className="h-[63px] text-[18px] font-semibold text-[#064282] leading-snug">
                Consultoria <br /> em TI
              </h3>
            </div>

            <ul className="space-y-2 text-[#064282] text-[14px]">
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#064282] text-[12px]" />
                Análise técnica e arquitetural
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#064282] text-[12px]" />
                Apoio à tomada de decisão
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#064282] text-[12px]" />
                Melhoria de processos e qualidade
              </li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="w-[360px] border border-[#E6E6E6] rounded-lg p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-[26px] h-[26px] rounded-md bg-[#FC7031] flex items-center justify-center text-white text-sm font-bold">
                <FaPaintBrush />
              </div>
              <h3 className="h-[63px] text-[18px] font-semibold text-[#064282] leading-snug">
                Design e UX/UI
              </h3>
            </div>

            <ul className="space-y-2 text-[#064282] text-[14px]">
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#064282] text-[12px]" />
                Identidade visual e interfaces profissionais
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#064282] text-[12px]" />
                Design focado em usabilidade e conversão
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-[#064282] text-[12px]" />
                Experiência do usuário alinhada ao negócio
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
