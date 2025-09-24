"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";

import HeaderSecondary from "@/components/HeaderSecondary";
import PageHeader from "@/components/PageHeader";

export default function ContatoPage() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: integração (API, Formspree, etc.)
    setTimeout(() => setLoading(false), 800);
  }

  return (
    <>
      <HeaderSecondary />
      <PageHeader title="Contato" />

      <section className="w-full py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
            {/* Coluna Esquerda */}
            <div>
              <h2 className="text-3xl md:text-3xl font-medium text-[var(--primary)]">
                Fale Conosco Agora Mesmo!
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-[var(--dark-text)]/80">
                Solicite seu orçamento sem compromisso ou tire suas dúvidas.
                Nossa equipe está pronta para atendê-lo!
              </p>

              <div className="mt-8 space-y-6">
                {/* Telefone */}
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-[var(--primary)]">Telefone</h4>
                    <div className="mt-1 flex flex-col text-sm text-[var(--dark-text)]/80">
                      <a href="tel:+5511987414459" className="hover:underline">
                        (11) 98741-4459
                      </a>
                      <a href="tel:+5511958770119" className="hover:underline">
                        (11) 95877-0119
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-white">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-semibold text-[var(--primary)]">Email</h4>
                    <div className="mt-1 flex flex-col text-sm text-[var(--dark-text)]/80">
                      <a href="mailto:jeovanemachado1613@gmail.com" className="hover:underline">
                        jeovanemachado1613@gmail.com
                      </a>
                      <a href="mailto:luanarangel689@gmail.com" className="hover:underline">
                        luanarangel689@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita - Formulário */}
            <div className="rounded-2xl bg-[var(--light)] p-6 md:p-8 shadow-sm ring-1 ring-black/5">
              <form onSubmit={onSubmit} className="space-y-5">
                {/* Linha 1 */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[var(--dark-text)]">
                      Nome*
                    </label>
                    <input
                      required
                      name="nome"
                      placeholder="Seu nome"
                      className="w-full rounded-[16px] border border-black/5 bg-black/5 px-3 py-2 text-sm outline-none focus:border-[var(--primary)]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-[var(--dark-text)]">
                      E-mail*
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="exemplo@exemplo.com.br"
                      className="w-full rounded-[16px] border border-black/5 bg-black/5 px-3 py-2 text-sm outline-none focus:border-[var(--primary)]"
                    />
                  </div>
                </div>

                {/* Linha 2 */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[var(--dark-text)]">
                      Telefone*
                    </label>
                    <input
                      required
                      name="telefone"
                      placeholder="(11) 99999-9999"
                      className="w-full rounded-[16px] border border-black/5 bg-black/5 px-3 py-2 text-sm outline-none focus:border-[var(--primary)]"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-[var(--dark-text)]">
                      Como Nos Conheceu*
                    </label>
                    <select
                      required
                      name="como_conheceu"
                      className="w-full rounded-[16px] border border-black/5 bg-black/5 px-3 py-2 text-sm outline-none focus:border-[var(--primary)]"
                    >
                      <option value="">Selecione</option>
                      <option value="indicacao">Indicação</option>
                      <option value="google">Google</option>
                      <option value="instagram">Instagram</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="mb-1 block text-sm font-medium text-[var(--dark-text)]">
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    placeholder="Escreva aqui..."
                    rows={5}
                    className="w-full rounded-[16px] border border-black/5 bg-black/5 px-3 py-2 text-sm outline-none focus:border-[var(--primary)]"
                  />
                </div>

                {/* Observação */}
                <div className="text-right text-xs text-[var(--dark-text)]/60">
                  Os campos com * são obrigatórios
                </div>

                {/* Botão */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--secondary)] disabled:opacity-70"
                >
                  {loading ? "Enviando..." : "Enviar Mensagem"}
                  <span className="translate-y-[1px]">{loading ? "" : "➤"}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
