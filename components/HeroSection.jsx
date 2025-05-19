import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex justify-center items-center">
      {/* Фон */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        {/* Градиент внизу */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-[#0d0d0d]"></div>
      </div>
      
      {/* Контент */}
      <div className="container relative z-10 text-center px-4">
        <Image src={"/images/main-logo-kondorra.webp"} width={200} quality={100} height={120} alt={"Гуманитарное разминирование"} priority={true} className="mx-auto"/>
        <h1 className="text-2xl md:text-6xl font-bold my-6 leading-tight text-white">
          СЛУЖБА ГУММАНИТАРНОГО РАЗМИНИРОВАНИЯ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white opacity-80">
          Нельзя создать прочный мир там, где почва полна мин.
        </p>
      </div>
    </section>
  );
}