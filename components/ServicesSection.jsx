import React from 'react';
import SectionWrapper from "@/components/SectionWrapper";
import { LucideCheckCircle } from "lucide-react";

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
        <h2 className="text-5xl font-bold mb-12 text-center text-gray-200 drop-shadow-lg">
          УСЛУГИ КОМПАНИИ
        </h2>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-xl p-6 border border-gray-700 bg-black/40 backdrop-blur-md shadow-md hover:shadow-[0_0_20px_#89f901aa] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -inset-px bg-gradient-to-tr from-[#89f901] to-transparent opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300" />
              <div className="relative z-10">
                <h3 className="text-xl text-[#89f901] font-semibold mb-2 flex items-center gap-2">
                  <LucideCheckCircle className="w-5 h-5 text-[#89f901]" />
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-md italic text-gray-300 mb-1">
                    {service.subtitle}
                  </p>
                )}
                <p className="text-md text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
