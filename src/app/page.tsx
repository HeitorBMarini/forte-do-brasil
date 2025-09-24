import Banner from "@/components/Banner";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Header from "@/components/header";
import QuemSomos from "@/components/quem-somos";
import ServicosHome from "@/components/ServicosHome";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <QuemSomos />
        <ServicosHome/>
        <Faq/>
        <Cta/>
      </main>
    </>
  );
}
