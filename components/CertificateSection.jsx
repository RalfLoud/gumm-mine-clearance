import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const certificates = [
  "/images/certificates/certificate1.png",
  "/images/certificates/certificate2.png",
  // "/images/certificates/certificate1.png",
  // "/images/certificates/certificate2.png",
];

const CertificateSection = () => {
  return (
    <SectionWrapper id="certificate">
      <h2 className="text-3xl font-bold mb-8 text-center">Наши Сертификаты</h2>
      
      <div className="grid max-w-6xl mx-auto px-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((src, idx) => (
          <a
            key={idx}
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block overflow-hidden rounded shadow-lg"
          >
            {/* Картинка */}
            <Image
              src={src}
              alt={`Сертификат ${idx + 1}`}
              width={400}
              height={500}
              className="object-cover w-full h-auto"
            />
            
            {/* Иконка через ::after */}
            <div className="absolute inset-0 pointer-events-none group-hover:after:opacity-100 after:opacity-0 after:transition-opacity after:duration-300 after:content-['Просмотреть'] after:absolute after:text-2xl after:text-white after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:z-10 after:pointer-events-none bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default CertificateSection;