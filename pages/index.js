import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import AboutCompany from "@/components/AboutCompany";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import AdvantagesSection from "@/components/AdvantageSection";
import CompanyResultsSection from "@/components/CompanyResultSection";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Школа Разминирования</title>
        <meta name="description" content="Профессиональное обучение сапёров гуманитарного разминирования." />
      </Head>
      <Header />
      <HeroSection />
      {/*<AboutSection />*/}
      <AboutCompany/>
      <ServicesSection />
      <CapabilitiesSection/>
      <AdvantagesSection/>
      <CompanyResultsSection/>
      <NewsSection/>
      <Footer />
    </>
  );
}