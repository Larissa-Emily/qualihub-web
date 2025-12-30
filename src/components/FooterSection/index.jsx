import React from "react";
import { FaLinkedin, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function FooterSection() {
  return (
    <footer className="bg-[#064282] text-white">
      {/* CONTAINER PADRÃO */}
      <div className="max-w-[1400px] mx-auto px-16 py-8">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-6">
          {/* ESQUERDA */}
          <div className="text-center xl:text-left">
            <p className="text-[14px] font-medium">QualiHub © 2025</p>
            <p className="text-[13px] text-white/80 mt-1">
              QA · Desenvolvimento · Consultoria · Design e UX/UI
            </p>
          </div>

          {/* DIREITA — ÍCONES */}
          <div>
            <ul className="flex gap-4">
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/108835160/admin/dashboard/"
                  aria-label="LinkedIn"
                  className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <FaLinkedin className="text-[18px]" />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://wa.me/5531996124118?text=Olá%20gostaria%20de%20falar%20com%20a%20QualiHub"
                  aria-label="Telefone"
                  className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <FaPhoneAlt className="text-[16px]" />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="mailto:contato@qualihub.online?subject=Contato%20via%20site&body=Olá,%20gostaria%20de%20mais%20informações"
                  aria-label="Email"
                  className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <MdEmail className="text-[18px]" />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/quali_hub/"
                  aria-label="Instagram"
                  className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <FaInstagram className="text-[18px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
