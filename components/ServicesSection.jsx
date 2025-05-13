import React from 'react';
import SectionWrapper from "@/components/SectionWrapper";

export default function ServicesSection() {
  const services = [
    {
      title: "Обследование территорий и объектов",
      subtitle: "(Техническая разведка)",
      description: "на наличие взрывоопасных предметов",
    },
    {
      title: "Сплошная очистка территорий и",
      subtitle: "(Разминирование)",
      description: "объектов от взрывоопасных предметов",
    },
    {
      title: "Снос зданий и сооружений",
      subtitle: "",
      description: "взрывным способом",
    },
    {
      title: "Аудит услуг по разминированию",
      subtitle: "",
      description: "",
    },
  ];
  
  return (
    <SectionWrapper id="services" className="py-20 text-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-5xl font-bold mb-12 text-center ">УСЛУГИ КОМПАНИИ</h2>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className=" rounded-md p-6 border-2 border-gray-600 hover:scale-105 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl text-[#78eb46] font-semibold mb-2">{service.title}</h3>
              {service.subtitle && <p className="text-lg italic mb-2">{service.subtitle}</p>}
              <p className="text-lg opacity-90">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}