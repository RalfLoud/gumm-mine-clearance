import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";

export default function CompanyResultsSection() {
  const stats = [
    { value: 3, label: "Количество реализованных\nконтрактов" },
    { value: 40, label: "Площадь очищенных\nземель, ГА" },
    { value: 59, label: "Обнаружено\nВОП" },
    { value: 476, label: "Площадь обследованных\nтерриторий, ГА" },
  ];
  
  const [counts, setCounts] = useState(stats.map(() => 0));
  const hasAnimated = useRef(false);
  const sectionRef = useRef(null);
  const mapRef = useRef(null);
  const [mapVisible, setMapVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          stats.forEach((stat, idx) => {
            let current = 0;
            const step = Math.ceil(stat.value / 60);
            const interval = setInterval(() => {
              current += step;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(interval);
              }
              setCounts(prev => {
                const updated = [...prev];
                updated[idx] = current;
                return updated;
              });
            }, 20);
          });
        }
      },
      { threshold: 0.4 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [stats]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (mapRef.current) observer.observe(mapRef.current);
    return () => mapRef.current && observer.unobserve(mapRef.current);
  }, []);
  
  return (
    <SectionWrapper id="company-results">
      <div ref={sectionRef} className="relative w-full">
        <div className="absolute inset-0 z-0 overflow-hidden" ref={mapRef}>
          <div className="w-full h-full relative">
            <Image
              src="/images/russian-map.png"
              alt="Карта России"
              fill
              className={`
                object-contain object-center
                transition-all duration-[2000ms] ease-in-out
                ${mapVisible ? "opacity-100 scale-150 brightness-100" : "opacity-0 scale-[2.5] brightness-100"}
              `}
            />
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase text-white mb-12">
            Результаты работы компании
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center rounded-full bg-black">
                  <div className="absolute inset-0 rounded-full border-4 border-[#78eb46] shadow-[0_0_20px_#78eb46] animate-pulse-ring"></div>
                  <div className="text-3xl sm:text-4xl font-bold z-10">
                    {counts[idx]}
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-base whitespace-pre-line text-white">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}