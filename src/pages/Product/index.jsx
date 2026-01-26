import React from "react";
import Menu from "../../components/MenuBar";
import Image from "../../assets/Image.png";
import Certifica from "../../assets/certifica.png";
import Woohub from "../../assets/woohub.png";
import Assurex from "../../assets/assurex.png";
import Orixpay from "../../assets/orixpay.png";
import FooterSection from "../../components/FooterSection";
export default function Product() {
  return (
    <section className="w-full min-h-screen bg-white ">
      {/* MENU */}
      <nav className="relative z-10">
        <Menu />
      </nav>

      {/* CONTEÚDO */}
      <main className="max-w-[1400px] mx-auto pt-32 pb-24 border-b-2  max-2xl:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* TEXTO */}
          <header className="lg:max-w-[700px] max-lg:text-center ">
            <h3 className="text-sm font-semibold tracking-widest text-[#FC7031] uppercase mb-4">
              Nossos produtos
            </h3>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#064282] leading-tight mb-6">
              Soluções integradas que impulsionam eficiência, segurança e
              crescimento
            </h1>

            <p className="text-[#064282] text-base md:text-lg leading-relaxed mb-4">
              Na QualiHub, desenvolvemos produtos tecnológicos especializados
              para atender demandas reais de empresas que buscam automação,
              conformidade, escalabilidade e performance operacional.
            </p>

            <p className="text-[#064282] text-base md:text-lg leading-relaxed">
              Nossos produtos atuam de forma independente ou integrada,
              permitindo que sua empresa reduza custos, aumente produtividade e
              tome decisões mais estratégicas, com total controle e
              transparência dos processos críticos.
            </p>
          </header>

          {/* IMAGEM */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={Image}
              alt="Ilustração representando soluções digitais da QualiHub"
              className="w-full max-w-[520px] h-auto"
            />
          </div>
        </div>
      </main>
      <div className="max-w-[1400px] mx-auto py-20 max-lg:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {/* meCertifica.ai */}
          <article className="flex flex-col h-full bg-white border rounded-2xl p-6 hover:shadow-lg transition">
            <header className="flex justify-center items-center pb-6 border-b">
              <img
                src={Certifica}
                alt="meCertifica.ai"
                className="h-14 object-contain"
              />
            </header>

            <div className="pt-6 flex flex-col gap-3 flex-1">
              <h2 className="text-lg font-semibold text-[#064282]">
                Me Certifica Aí
              </h2>
              <p className="text-sm font-medium text-[#FC7031]">
                Certificados Digitais
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Automatize a emissão, gestão e controle de certificados digitais
                com segurança, rastreabilidade e conformidade legal.
              </p>
              <a
                target="_blank"
                href="https://mecertificaai.online/"
                className="mt-auto h-[40px] rounded-lg cursor-pointer
             flex items-center justify-center
             bg-[#125dff] hover:bg-[#0b3ca7] text-white"
              >
                Saiba mais
              </a>
            </div>
          </article>

          {/* WooHub */}
          <article className="flex flex-col h-full bg-white border rounded-2xl p-6 hover:shadow-lg transition">
            <header className="flex justify-center items-center pb-6 border-b">
              <img src={Woohub} alt="WooHub" className="h-14 object-contain" />
            </header>

            <div className="pt-6 flex flex-col gap-3 flex-1">
              <h2 className="text-lg font-semibold text-[#064282]">WooHub</h2>
              <p className="text-sm font-medium text-[#FC7031]">
                Marketplace de Espaços
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Plataforma inteligente para divulgação, gestão e locação de
                espaços, conectando anunciantes e locatários.
              </p>
              <a
                target="_blank"
                href="https://www.woohub.online/"
                className="mt-auto bg-[#f37517] hover:bg-[#b85911] text-white h-[40px] rounded-lg cursor-pointer flex items-center justify-center"
              >
                Saiba mais
              </a>
            </div>
          </article>

          {/* AssureX */}
          <article className="flex flex-col h-full bg-white border rounded-2xl p-6 hover:shadow-lg transition">
            <header className="flex justify-center items-center pb-6 border-b">
              <img
                src={Assurex}
                alt="AssureX"
                className="h-14 object-contain"
              />
            </header>

            <div className="pt-6 flex flex-col gap-3 flex-1">
              <h2 className="text-lg font-semibold text-[#064282]">Assurex</h2>
              <p className="text-sm font-medium text-[#FC7031]">
                Compliance e Riscos
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Centralize controles, reduza riscos operacionais e garanta
                conformidade com normas e processos críticos do negócio.
              </p>
              <a
                target="_blank"
                href="https://www.assurex.com.br/"
                className="mt-auto bg-[#0d9082] hover:bg-[#07554d] text-white h-[40px] rounded-lg cursor-pointer flex items-center justify-center"
              >
                Saiba mais
              </a>
            </div>
          </article>

          {/* OrixPay */}
          <article className="flex flex-col h-full bg-white border rounded-2xl p-6 hover:shadow-lg transition">
            <header className="flex justify-center items-center pb-6 border-b">
              <img
                src={Orixpay}
                alt="OrixPay"
                className="h-14 object-contain"
              />
            </header>

            <div className="pt-6 flex flex-col gap-3 flex-1">
              <h2 className="text-lg font-semibold text-[#064282]">OrixPay</h2>
              <p className="text-sm font-medium text-[#FC7031]">
                Soluções de Pagamento
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Facilite cobranças, automatize transações e tenha controle
                financeiro com uma solução segura e escalável.
              </p>
              <a
                href="https://www.orixpay.com.br/"
                target="_blank"
                className="mt-auto bg-[#6241d7] hover:bg-[#3d13d4] text-white h-[40px] rounded-lg cursor-pointer flex items-center justify-center"
              >
                Saiba mais
              </a>
            </div>
          </article>
        </div>
      </div>
      <footer>
        <FooterSection />
      </footer>
    </section>
  );
}
