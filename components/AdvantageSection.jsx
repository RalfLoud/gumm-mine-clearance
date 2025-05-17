import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";

export default function AdvantagesSection() {
  return (
    <SectionWrapper
      id="advantages"
      className="relative py-20 px-6 text-white "
    >
   
      <div className="relative z-10 max-w-5xl mx-auto text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase mb-10">Наши сильные стороны</h2>
        <p className="mb-6 text-lg leading-relaxed">
          <span className="font-semibold">
           Используем самые современные российские технологии обнаружения взрывоопасных предметов (ВОП)
          </span>
          , включая специализированную бронированную экипировку наивысшего уровня защиты, соответствующую требованиям государственного стандарта (ГОСТ).
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          Обеспечиваем безопасность с помощью собственных подразделений охраны, мобильного лагеря и транспорта повышенной проходимости
          <span className="font-semibold">, способного функционировать автономно даже в труднодоступных регионах.</span>
        </p>
        <p className="text-lg leading-relaxed">
          Обладая современным беспилотным оборудованием и высокоточным геодезическим оснащением, мы успешно выполняем дополнительные сопутствующие задачи. Среди нашего арсенала — инновационные металлодетекторы
          <span className="font-semibold text-[#78eb46]"> «Альфамарин 5000Д», </span>сверхчувствительные бомбосигнатурные устройства
          <span className="font-semibold text-[#78eb46]"> «Киберскан», </span>защитные костюмы
          <span className="font-semibold text-[#78eb46]"> премиум-класса</span>, а также роботизированный комплекс
          <span className="font-semibold text-[#78eb46]"> «Уран»</span>.
        </p>
      </div>
    </SectionWrapper>
  );
}
