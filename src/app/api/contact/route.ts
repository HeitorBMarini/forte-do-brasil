// app/api/contact/route.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Nodemailer precisa do runtime Node.js (não Edge)
export const runtime = "nodejs";

type ContactPayload = {
  nome: string;
  email: string;
  telefone?: string;
  como_conheceu?: string;
  mensagem?: string;
};

function parseBool(v: string | undefined, fallback = true) {
  if (v === undefined) return fallback;
  return !/^(false|0|no)$/i.test(v);
}

export async function POST(req: NextRequest) {
  try {
    const raw = (await req.json()) as unknown;

    const body = raw as Partial<ContactPayload>;
    const nome = body?.nome?.toString().trim();
    const email = body?.email?.toString().trim();
    const telefone = body?.telefone?.toString().trim();
    const como_conheceu = body?.como_conheceu?.toString().trim();
    const mensagem = body?.mensagem?.toString() ?? "";

    if (!nome || !email) {
      return NextResponse.json(
        { ok: false, error: "Nome e e-mail são obrigatórios." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST ?? "";
    const port = Number(process.env.SMTP_PORT ?? 465);
    const secure = parseBool(process.env.SMTP_SECURE, true);
    const user = process.env.SMTP_USER ?? "";
    const pass = process.env.SMTP_PASS ?? "";
    const from = process.env.MAIL_FROM ?? user; // fallback seguro
    const to = process.env.MAIL_TO ?? user;     // fallback seguro

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.verify();

    const html = `
      <h2>Novo contato do site</h2>
      <p><b>Nome:</b> ${nome}</p>
      <p><b>E-mail:</b> ${email}</p>
      <p><b>Telefone:</b> ${telefone || "-"}</p>
      <p><b>Como nos conheceu:</b> ${como_conheceu || "-"}</p>
      <p><b>Mensagem:</b></p>
      <p>${mensagem.replace(/\n/g, "<br/>")}</p>
    `;

    const info = await transporter.sendMail({
      from,
      to,
      subject: `Contato do site - ${nome}`,
      replyTo: email,
      html,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err: unknown) {
    // Sem "any" — extrai mensagem com segurança
    const message =
      err instanceof Error ? err.message : "Erro ao enviar";
    console.error("EMAIL ERROR:", err);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
