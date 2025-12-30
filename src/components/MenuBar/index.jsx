import { useState } from "react";
import QualiHubLogo from "../../assets/logo-qualihub.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function MenuBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-[999] bg-white border-b border-[#f0f0f0]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between max-2xl:px-16 py-6 font-jakarta">

        {/* Logo */}
        <img
          src={QualiHubLogo}
          alt="QualiHub"
          className="h-[48px] w-auto"
        />

        {/* MENU DESKTOP */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8 text-[18px] font-semibold text-[#064282]">
            <li><a href="#home" className="hover:border-b-2 border-[#FC7031]">Home</a></li>
            <li><a href="#about" className="hover:border-b-2 border-[#FC7031]">Sobre</a></li>
            <li><a href="#service" className="hover:border-b-2 border-[#FC7031]">Serviços</a></li>
            <li><a href="#more" className="hover:border-b-2 border-[#FC7031]">Mais</a></li>
            <li><a href="#contact" className="hover:border-b-2 border-[#FC7031]">Contato</a></li>
          </ul>
        </nav>

        {/* HAMBURGER (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#064282] text-[28px]"
          aria-label="Abrir menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="lg:hidden bg-white border-t border-[#f0f0f0] shadow-md">
          <ul className="flex flex-col px-6 py-6 gap-4 text-[18px] font-semibold text-[#064282]">
            <li><a onClick={() => setOpen(false)} href="#home">Home</a></li>
            <li><a onClick={() => setOpen(false)} href="#about">Sobre</a></li>
            <li><a onClick={() => setOpen(false)} href="#service">Serviços</a></li>
            <li><a onClick={() => setOpen(false)} href="#more">Mais</a></li>
            <li><a onClick={() => setOpen(false)} href="#contact">Contato</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}
