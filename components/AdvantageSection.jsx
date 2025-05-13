import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";

export default function AdvantagesSection() {
  return (
    <SectionWrapper
      id="advantages"
      className="relative py-20 px-6 text-white "
    >
   
      <div className="relative z-10 max-w-5xl mx-auto text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase mb-10">
          Наши преимущества
        </h2>
        <p className="mb-6 text-lg leading-relaxed">
          <span className="font-semibold">
            Мы используем передовые отечественные средства поиска ВОП,
            роботизированные средства их уничтожения
          </span>
          , разработанную специально по нашему заказу бронеодежду высочайшего класса
          сертифицированную по ГОСТ, современный комплекс БЛА для наблюдения и за
          местами проведения работ и топогеодезическое оборудование высокой точности.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          Компания, имея собственную охрану, полевой лагерь и транспорт повышенной
          проходимости <span className="font-semibold">способна выполнять задачи в условиях полной автономности.</span>
        </p>
        <p className="text-lg leading-relaxed">
          Наличие БЛА и топогеодезического оборудования высокой точности позволяют
          решать ряд смежных задач. На вооружении компании уникальные миноискатели
          <span className="font-semibold text-[#78eb46]"> «Альфамарин 5000Д»</span> и бомбоискатели
          <span className="font-semibold text-[#78eb46]"> «Киберскан»</span>, специализированные бронежилеты
          <span className="font-semibold text-[#78eb46]"> «Колонтар»</span>, а также роботизированный комплекс
          <span className="font-semibold text-[#78eb46]"> «Диктум»</span>.
        </p>
      </div>
    </SectionWrapper>
  );
}
