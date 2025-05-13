import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const stats = [
  {
    value: "до 90 га",
    label: "Техническая разведка\nв месяц",
  },
  {
    value: "до 45 га",
    label: "Очистка ручным\nспособом от ВОП в месяц",
  },
  {
    value: "до 120 га",
    label: "Очистка с использованием\nмеханизации",
  },
  {
    value: "42",
    label: "Штатная\nчисленность саперов",
  },
];

export default function CapabilitiesSection() {
  return (
    <SectionWrapper id="capabilities" className="py-16 bg-[#0d0d0d] text-center text-white">
      <h2 className="text-3xl md:text-5xl font-bold  mb-12 uppercase">Наши возможности</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-4">
        {stats.map(({ value, label }, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="relative w-36 h-36 rounded-full  shadow-[0_0_15px_#78eb46]">
              {/* Animated solid ring with pulse */}
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
              
              {/* Value */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="z-10 text-white text-center text-2xl md:text-2xl">{value}</span>
              </div>
            </div>
            
            <p className="text-md mt-4 whitespace-pre-line">{label}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}