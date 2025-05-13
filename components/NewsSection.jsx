import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const news = [
  {
    title: "Мы должны помочь людям — нам вместе жить",
    date: "05.02.2025",
    image: "/news/1.webp",
    text: "",
  },
  {
    title: "\"РАТМ Холдинг\" сообщил об отправлении отряда гуманитарного разминирования в ЛНР",
    date: "17.07.2024",
    image: "/news/2.webp",
    text: "",
  },
  {
    title: "\"РАТМ Холдинг\" завершает опытные испытания роботизированного комплекса разминирования (tass.ru)",
    date: "24.05.2024",
    image: "/news/3.webp",
    text: "В компании отметили, что устройство способно обнаружить взрывоопасные предметы как на поверхности земли, так и в слое грунта",
  },
  {
    title: "\"РАТМ Холдинг\" завершает опытные испытания роботизированного комплекса разминирования (tass.ru)",
    date: "24.05.2024",
    image: "/news/4.jpeg",
    text: "В компании отметили, что устройство способно обнаружить взрывоопасные предметы как на поверхности земли, так и в слое грунта",
  },
  // Добавьте больше новостей при необходимости
];

export default function NewsSection() {
  const [visibleCount, setVisibleCount] = useState(3);
  const handleLoadMore = () => setVisibleCount((prev) => prev + 3);
  const visibleNews = news.slice(0, visibleCount);
  const hasMore = visibleCount < news.length;
  
  return (
    <SectionWrapper className="py-16 bg-[#0d0d0d] text-white text-center px-4" id="news">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 uppercase">СМИ о нас</h2>
      
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {visibleNews.map((item, index) => (
            <motion.div
              key={index}
              className=" rounded overflow-hidden shadow-lg text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {item.image && (
                <div className="relative w-full h-52">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                {item.text && <p className="text-sm opacity-70 mb-3">{item.text}</p>}
                <span className="text-xs text-[#78eb46] font-semibold">{item.date}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {hasMore && (
        <div className="mt-12">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-[#78eb46] hover:bg-green-600 text-black rounded-md uppercase font-medium text-md transition"
          >
            Загрузить ещё
          </button>
        </div>
      )}
    </SectionWrapper>
  );
}
