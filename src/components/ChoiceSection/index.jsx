import React from "react";
import VitalySection from "../../assets/vitalySection.png";
import { FaCheck } from "react-icons/fa";

export default function ChoiceSection() {
  return (
    <section className="py-16 font-jakarta text-[#064282]" id="more">
      {/* CONTAINER PADRÃO */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid grid-cols-1 xl:grid-cols-2 gap-14 items-center">

        {/* TEXTO */}
        <div className="text-center xl:text-left">

          <h2 className="text-[32px] font-semibold mb-6 max-w-[535px] mx-auto xl:mx-0">
            Por que escolher a Qualihub
          </h2>

          {/* Lista */}
          <ul className="space-y-3 mb-8 text-[16px] xl:text-[18px] max-w-[600px] mx-auto xl:mx-0">
            <li className="flex items-center gap-2 justify-center xl:justify-start">
              <FaCheck className="text-[#064282] text-[12px]" />
              Abordagem orientada à prevenção de falhas
            </li>
            <li className="flex items-center gap-2 justify-center xl:justify-start">
              <FaCheck className="text-[#064282] text-[12px]" />
              Visão estratégica e foco em código de qualidade
            </li>
            <li className="flex items-center gap-2 justify-center xl:justify-start">
              <FaCheck className="text-[#064282] text-[12px]" />
              Comunicação clara e objetiva
            </li>
            <li className="flex items-center gap-2 justify-center xl:justify-start">
              <FaCheck className="text-[#064282] text-[12px]" />
              Compromisso com resultados reais
            </li>
            <li className="flex items-center gap-2 justify-center xl:justify-start">
              <FaCheck className="text-[#064282] text-[12px]" />
              Qualidade aplicada desde o início
            </li>
          </ul>

          {/* Texto explicativo */}
          <p className="text-[16px] xl:text-[18px] leading-relaxed mb-4 max-w-[560px] mx-auto xl:mx-0">
            Trabalhamos com{" "}
            <span className="text-[#FC7031] font-semibold">
              responsabilidade
            </span>{" "}
            porque entendemos que cada decisão técnica impacta pessoas e
            negócios reais.
          </p>

          <p className="text-[16px] xl:text-[18px] leading-relaxed max-w-[600px] mx-auto xl:mx-0">
            Na Qualihub, qualidade não é apenas uma etapa do processo — é um{" "}
            <span className="text-[#FC7031] font-semibold">
              compromisso contínuo
            </span>
            . Atuamos com responsabilidade porque sabemos que falhas em sistemas
            afetam operações, resultados e a confiança de quem depende da
            tecnologia todos os dias.
            <br />
            <br />
            Por isso, nosso trabalho é guiado por método, análise criteriosa e
            proximidade com os times técnicos, garantindo{" "}
            <span className="text-[#FC7031] font-semibold">
              estabilidade, previsibilidade e segurança
            </span>
            , mesmo em ambientes críticos e em evolução.
          </p>
        </div>

        {/* IMAGEM */}
        <div className="flex justify-center xl:justify-end">
          <img
            src={VitalySection}
            alt="consultoria em qualidade de software"
            className="w-full max-w-[520px] h-auto object-cover rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}
