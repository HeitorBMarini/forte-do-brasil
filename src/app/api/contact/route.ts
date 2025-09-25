import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { nome, email, telefone, como_conheceu, mensagem } = await req.json();

    if (!nome || !email) {
      return NextResponse.json({ ok: false, error: "Nome e e-mail são obrigatórios." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE) !== "false", // true para 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // opcional: valida as credenciais/conexão
    await transporter.verify();

    const html = `
      <h2>Novo contato do site</h2>
      <p><b>Nome:</b> ${nome}</p>
      <p><b>E-mail:</b> ${email}</p>
      <p><b>Telefone:</b> ${telefone || "-"}</p>
      <p><b>Como nos conheceu:</b> ${como_conheceu || "-"}</p>
      <p><b>Mensagem:</b></p>
      <p>${(mensagem || "").replace(/\n/g, "<br/>")}</p>
    `;

    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM,          // precisa ser o seu gmail autenticado
      to: process.env.MAIL_TO,              // destino dos leads
      subject: `Contato do site - ${nome}`,
      replyTo: email,                       // botão "Responder" vai para o cliente
      html,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err: any) {
    console.error("EMAIL ERROR:", err);
    return NextResponse.json({ ok: false, error: err?.message || "Erro ao enviar" }, { status: 500 });
  }
}
