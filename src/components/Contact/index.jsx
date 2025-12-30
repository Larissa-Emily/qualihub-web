import React, { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [messageText, setMessageText] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSendContact(e) {
    e.preventDefault();

    if (!name || !email || !phone || !messageText) {
      toast.error("Todos os campos devem ser preenchidos!");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("https://qualihub-web-back.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          messageText,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        toast.error(error.error || "Erro ao enviar mensagem");
        return;
      }

      toast.success("Mensagem enviada com sucesso!");
      toast.success("Em breve te retornaremos.");

      setName("");
      setEmail("");
      setPhone("");
      setMessageText("");
    } catch (err) {
      console.error(err);
      toast.error("Erro de conexão com o servidor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-20 text-[#064282]" id="contact">
      {/* CONTAINER PADRÃO */}
      <div className="max-w-[1400px] mx-auto px-16 flex flex-col items-center">
        {/* HEADER */}
        <header className="text-center mb-12">
          <h1 className="text-[32px] md:text-[35px] font-semibold mb-4">
            Vamos elevar o nível de qualidade do seu sistema
          </h1>

          <p className="text-[15px] md:text-[18px] max-w-[620px] mx-auto">
            Converse com a Qualihub e descubra como reduzir riscos, melhorar a
            performance e tomar decisões técnicas com mais segurança.
          </p>
        </header>

        {/* FORMULÁRIO */}
        <form
          onSubmit={handleSendContact}
          className="w-full max-w-[520px] bg-white border border-[#E5E5E5] rounded-xl px-10 py-10 shadow-sm"
        >
          {/* Nome */}
          <div className="flex flex-col mb-5">
            <label className="text-[14px] font-medium mb-1">
              Nome <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-[48px] px-4 border border-[#DFDFDF] rounded-lg text-[14px] focus:outline-none focus:border-[#064282]"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col mb-5">
            <label className="text-[14px] font-medium mb-1">
              Email corporativo <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[48px] px-4 border border-[#DFDFDF] rounded-lg text-[14px] focus:outline-none focus:border-[#064282]"
              required
            />
          </div>

          {/* Telefone */}
          <div className="flex flex-col mb-5">
            <label className="text-[14px] font-medium mb-1">
              Telefone <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-[48px] px-4 border border-[#DFDFDF] rounded-lg text-[14px] focus:outline-none focus:border-[#064282]"
              required
            />
          </div>

          {/* Mensagem */}
          <div className="flex flex-col mb-8">
            <label className="text-[14px] font-medium mb-1">
              Mensagem <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Mensagem"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              rows={4}
              required
              className="px-4 py-3 border border-[#DFDFDF] rounded-lg text-[14px] resize-none focus:outline-none focus:border-[#064282]"
            />
          </div>

          {/* BOTÃO */}
          <button
            type="submit"
            disabled={loading}
            className={`
    w-full
    h-[48px]
    flex
    items-center
    justify-center
    gap-2
    rounded-lg
    text-[15px]
    font-semibold
    transition
    ${
      loading
        ? "bg-[#FC7031]/70 cursor-not-allowed"
        : "bg-[#FC7031] hover:bg-[#e9652b]"
    }
    text-white
  `}
          >
            {loading ? (
              <>
                <AiOutlineLoading3Quarters className="animate-spin text-[18px]" />
                Enviando...
              </>
            ) : (
              "Enviar mensagem"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
