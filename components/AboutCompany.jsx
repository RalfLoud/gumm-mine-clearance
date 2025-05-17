import Image from 'next/image';
import SectionWrapper from "@/components/SectionWrapper";

export default function AboutCompany() {
  return (
    <SectionWrapper id="about-company" className="py-20  relative">
   
      
      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Text Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">О КОМПАНИИ</h2>
          <p className="text-lg opacity-90 leading-relaxed mb-6">Мы — команда опытных военных инженеров, объединенных профессиональными менеджерами и экспертами в сфере технологических инноваций, научно-технических разработок, обезвреживания опасных объектов, роботизации и эксплуатации беспилотных аппаратов.</p>
          <p className="text-lg opacity-90 leading-relaxed mb-6">Нашей главной задачей является совместная работа с правительственными структурами, предприятиями государственного и частного сектора для достижения максимальной продуктивности в управлении ресурсами.</p>
          <p className="text-lg opacity-90 leading-relaxed mb-6">Сейчас наша компания объединяет высококвалифицированных профессионалов, готовых комплексно решать любые задачи по возвращению земельных участков различных назначений обратно в экономическое и мирное использование.</p>
          <p className="text-lg font-semibold text-[#78eb46] mb-6">Будущее начинается сегодня — мы прокладываем путь к безопасной жизни.</p>
          <p className="text-lg opacity-90 leading-relaxed mb-6">У нашей организации имеется официальное разрешение от Ростехнадзора на работу с взрывоопасными материалами, подтвержденное одобрение компетентных органов Министерства обороны РФ. Мы строго придерживаемся требований безопасности труда и действующих экологических норм.</p>
          <p className="text-lg font-semibold text-[#78eb46]">Доверяя нам, вы доверяете надежности и качеству.</p>
        </div>
        
        {/* Right Column: Image */}
        <div className="relative flex flex-col gap-6">
          <Image
            src="/images/about/about1.jpg"
            alt="Сапёр гуманитарного разминирования"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/images/about/abou2.jpg"
            alt="Сапёр гуманитарного разминирования"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}