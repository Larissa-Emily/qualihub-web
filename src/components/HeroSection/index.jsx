import HeroImage from "../../assets/hero-woman.png";

export default function HeroSection({ onContactClick }) {
  return (
    <main className="w-full overflow-hidden font-jakarta max-xl:py-12" id="home">
      <section className="w-full flex items-center justify-center py-20 px-6 xl:px-20 bg-white">
        <div className="max-w-[1400px] w-full grid grid-cols-1 xl:grid-cols-2 gap-14 items-center">

          {/* TEXTO */}
          <div className="text-center xl:text-left">
            <h1 className="text-[28px] md:text-[36px] xl:text-[46px] font-bold text-[#064282] leading-tight">
              Qualidade e tecnologia <br />
              para sistemas que não <br />
              podem falhar
            </h1>

            <p className="mt-6 text-[14px] md:text-[16px] xl:text-[18px] text-[#064282] max-w-[520px] mx-auto xl:mx-0">
              Atuamos com QA, desenvolvimento e consultoria em TI
              para reduzir falhas, melhorar performance e dar mais
              segurança às decisões técnicas.
            </p>

            <button
              onClick={onContactClick}
              className="mt-8 bg-[#FC7031] hover:bg-[#e9652b] transition text-white font-semibold px-8 py-3 rounded-md"
            >
              Conheça nossa abordagem
            </button>
          </div>

          {/* IMAGEM */}
          <div className="flex justify-center xl:justify-end">
            <div className="w-full max-w-[420px] md:max-w-[520px] xl:max-w-[560px]">
              <img
                src={HeroImage}
                alt="consultoria em qualidade de software"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
