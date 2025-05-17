import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";

const stats = [
  { value: 79, suffix: "га", label: "Техническая разведка\nв месяц" },
  { value: 38, suffix: "га", label: "Очистка ручным\nспособом от ВОП в месяц" },
  { value: 107, suffix: "га", label: "Очистка с использованием\nмеханизации" },
  { value: 35, suffix: "", label: "Штатная\nчисленность саперов" },
];

function useCountUp(trigger, target, duration = 1500) {
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    if (!trigger) return;
    
    let current = 0;
    const stepTime = 30;
    const steps = Math.ceil(duration / stepTime);
    const increment = target / steps;
    
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        clearInterval(interval);
      } else {
        setValue(Math.round(current));
      }
    }, stepTime);
    
    return () => clearInterval(interval);
  }, [trigger, target, duration]);
  
  return value;
}

function CountUpCard({ target, suffix, label, isInView, delay }) {
  const countedValue = useCountUp(isInView, target);
  
  return (
    <motion.div
      className="flex flex-col items-center group"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="relative w-36 h-36 rounded-full shadow-[0_0_15px_#78eb46]">
        <div className="absolute inset-0 rounded-full p-[2px] group-hover:animate-spin-slow animate-pulse-ring">
          <div
            className="w-full h-full rounded-full"
            style={{
              background: "#78eb46",
              WebkitMaskImage: "radial-gradient(farthest-side, transparent calc(100% - 3px), black 100%)",
              maskImage: "radial-gradient(farthest-side, transparent calc(100% - 3px), black 100%)",
              boxShadow: "0 0 15px #78eb46",
            }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="z-10 text-white text-center text-2xl md:text-2xl">
            {countedValue} {suffix}
          </span>
        </div>
      </div>
      <p className="text-md mt-4 whitespace-pre-line">{label}</p>
    </motion.div>
  );
}

export default function CapabilitiesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px", amount: 0.1 });
  
  return (
    <SectionWrapper id="capabilities" className="py-16 bg-[#0d0d0d] text-center text-white">
      <div ref={sectionRef}>
        <h2 className="text-3xl md:text-5xl font-bold mb-12 uppercase">Наши возможности</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {stats.map(({ value, label, suffix }, index) => (
            <CountUpCard
              key={index}
              target={value}
              suffix={suffix}
              label={label}
              delay={index * 0.15}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}