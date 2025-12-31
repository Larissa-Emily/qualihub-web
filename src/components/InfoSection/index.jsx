import React from "react";
import InfoImage from "../../assets/infoImage.png";

export default function InfoSection() {
  return (
    <section
      className="border-b border-[#e5e5e5] font-jakarta py-16"
      id="about"
    >
      <div className="max-w-[1400px] mx-auto px-16 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">

        {/* TEXTO */}
        <div>
          <h1 className="text-center text-[28px] xl:text-[35px] xl:text-left max-w-[535px] text-[#064282] font-semibold">
            Decisões técnicas mais seguras começam com qualidade
          </h1>

          <p className="text-[16px] xl:text-[18px] text-center xl:text-left text-[#064282] max-w-[726px] py-4">
            A Qualihub nasce para apoiar empresas que entendem que qualidade não é
            custo, é estratégia. Atuamos desde a prevenção de falhas até a
            evolução contínua de sistemas, unindo visão técnica, método e
            responsabilidade.
          </p>

          <p className="text-[16px] text-center xl:text-left xl:text-[18px] text-[#064282] max-w-[663px]">
            Trabalhamos lado a lado com times de tecnologia para garantir
            estabilidade, escalabilidade e previsibilidade, mesmo em ambientes
            críticos.
          </p>
        </div>

        {/* IMAGEM */}
        <div className="flex justify-center xl:justify-end">
          <img
            src={InfoImage}
            alt="consultoria em qualidade de software"
            className="w-full max-w-[520px] h-auto object-cover rounded-xl"
          />
        </div>

      </div>
    </section>
  );
}
 