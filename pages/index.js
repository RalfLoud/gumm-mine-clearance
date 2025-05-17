import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
// import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import AboutCompany from "@/components/AboutCompany";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import AdvantagesSection from "@/components/AdvantageSection";
// import CompanyResultsSection from "@/components/CompanyResultSection";
// import NewsSection from "@/components/NewsSection";
import TrainingContact from "@/components/TrainingContact";
import CertificateSection from "@/components/CertificateSection";
import SeoSchema from "@/components/SeoSchema";

export default function Home() {
  return (
    <>
      <Head>
          <meta charSet="UTF-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          
          <title>ГРК Кондор — Гуманитарное разминирование территорий</title>
          <meta name="description"
                content="ГРК Кондор — профессиональное гуманитарное разминирование. Очистка территорий от взрывоопасных предметов. Работаем по всей России."/>
          
          <meta name="keywords"
                content="разминирование, техническая разведка, очистка территории, ВОП, гуманитарное разминирование, ГРК Кондор"/>
          
          <meta name="author" content="ГРК Кондор"/>
          <meta name="language" content="ru"/>
          
          <meta property="og:title" content="ГРК Кондор — Гуманитарное разминирование территорий"/>
          <meta property="og:description"
                content="Профессиональная очистка территорий от ВОП. Сертифицированные специалисты. Современное оборудование. Работаем по всей России."/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://grkondor.ru/"/>
          <meta property="og:image" content="https://grkondor.ru/images/og-image.png"/>
          
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="ГРК Кондор — Гуманитарное разминирование"/>
          <meta name="twitter:description"
                content="Очистка территорий от взрывоопасных предметов (ВОП). Профессиональный подход и гарантии безопасности."/>
          <meta name="twitter:image" content="https://grkondor.ru/images/og-image.png"/>
          
          <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        
      </Head>
      <SeoSchema/>
      <Header/>
      <HeroSection/>
      {/*<AboutSection />*/}
      <AboutCompany/>
      <ServicesSection/>
      <CapabilitiesSection/>
      <AdvantagesSection/>
      {/*<CompanyResultsSection/>*/}
      <CertificateSection/>
      {/*<NewsSection/>*/}
      <TrainingContact/>
      <Footer/>
    </>
  );
}