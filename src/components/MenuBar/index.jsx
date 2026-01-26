import { useState } from "react";
import QualiHubLogo from "../../assets/logo-qualihub.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function MenuBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function goToSection(sectionId) {
    setOpen(false);

    // Se já estiver no Home, apenas faz scroll
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // Se estiver em outra rota (ex: /product), volta pro Home
    navigate("/", {
      state: { scrollTo: sectionId },
    });
  }

  return (
    <header className="w-full fixed top-0 z-[999] bg-white border-b border-[#f0f0f0]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between max-2xl:px-16 py-6 font-jakarta">
        {/* Logo */}
        <img src={QualiHubLogo} alt="QualiHub" className="h-[48px] w-auto" />

        {/* MENU DESKTOP */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8 text-[18px] font-semibold text-[#064282]">
            <li>
              <button
                onClick={() => goToSection("home")}
                className="hover:border-b-2 border-[#FC7031]"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => goToSection("about")}
                className="hover:border-b-2 border-[#FC7031]"
              >
                Sobre
              </button>
            </li>
            <li>
              <button
                onClick={() => goToSection("service")}
                className="hover:border-b-2 border-[#FC7031]"
              >
                Serviços
              </button>
            </li>
            <li>
              <button
                onClick={() => goToSection("more")}
                className="hover:border-b-2 border-[#FC7031]"
              >
                Mais
              </button>
            </li>
            <li>
              <button
                onClick={() => goToSection("contact")}
                className="hover:border-b-2 border-[#FC7031]"
              >
                Contato
              </button>
            </li>
            <li>
              <Link
                to="/product"
                className="hover:border-b-2 border-[#FC7031]"
              >
                Nossos Produtos
              </Link>
            </li>
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
            <li>
              <button onClick={() => goToSection("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => goToSection("about")}>Sobre</button>
            </li>
            <li>
              <button onClick={() => goToSection("service")}>Serviços</button>
            </li>
            <li>
              <button onClick={() => goToSection("more")}>Mais</button>
            </li>
            <li>
              <button onClick={() => goToSection("contact")}>Contato</button>
            </li>
            <li>
              <Link to="/product" onClick={() => setOpen(false)}>
                Nossos Produtos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
