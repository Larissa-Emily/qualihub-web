import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/5531996124118?text=Olá%20gostaria%20de%20conhecer%20a%20QualiHub"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-[9999]
        flex
        justify-center
        items-center
        w-[66px]
        h-[66px]
        bg-[#1BD741]
        text-white
        rounded-full
        shadow-lg
        hover:scale-105
        transition
      "
    >
      <FaWhatsapp className="w-[36px] h-[36px]" />
    </a>
  );
}
