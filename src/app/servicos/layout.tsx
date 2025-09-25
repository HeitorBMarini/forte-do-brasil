// app/servicos/layout.tsx
import { ReactNode } from "react";
import HeaderSecondary from "@/components/HeaderSecondary";
import ServiceRail from "@/components/ServiceRail";
import PageHeaderWrapper from "@/components/PageHeaderWrapper";

export default function ServicosLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HeaderSecondary />            {/* ✅ Só aqui */}
      <ServiceRail />
      <PageHeaderWrapper />          {/* breadcrumb + título dinâmico */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
    </>
  );
}
