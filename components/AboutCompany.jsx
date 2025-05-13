import Image from 'next/image';
import SectionWrapper from "@/components/SectionWrapper";

export default function AboutCompany() {
  return (
    <SectionWrapper id="about-company" className="py-20  relative">
   
      
      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column: Text Content */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">О КОМПАНИИ</h2>
          <p className="text-lg opacity-90 leading-relaxed mb-6">
            Мы — команда ветеранов инженерных войск во главе с лучшими управленцами и профессионалами в области интеграции технологий и научно-технического развития, специалистами по разминированию, робототехнике и применению БЛА.
          </p>
          <p className="text-lg opacity-90 leading-relaxed mb-6">
            Наша цель — реализация проектов совместно с государственными органами, государственными и частными компаниями в интересах повышения эффективности использования ресурсов.
          </p>
          <p className="text-lg opacity-90 leading-relaxed mb-6">
            Сегодня мы собрали специалистов и стали уникальной компанией, способной быть единым окном для решения всего спектра задач по возврату в хозяйственный оборот земель промышленного, сельскохозяйственного и иного назначения.
          </p>
          <p className="text-lg font-semibold text-[#78eb46] mb-6">
            Завтра мы вместе проложим дорогу в мирную жизнь.
          </p>
          <p className="text-lg opacity-90 leading-relaxed mb-6">
            Компания имеет лицензию Ростехнадзора на обращение со взрывчатыми веществами и положительное заключение уполномоченного органа Минобороны России. Мы соблюдаем правила охраны труда и экологические стандарты.
          </p>
          <p className="text-lg font-semibold text-[#78eb46]">
            С нами безопасно!
          </p>
        </div>
        
        {/* Right Column: Image */}
        <div className="relative flex flex-col gap-6">
          <Image
            src="/images/hero-bg.jpg"
            alt="Сапёр гуманитарного разминирования"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
            layout="responsive"
          />
          <Image
            src="/images/hero-bg.jpg"
            alt="Сапёр гуманитарного разминирования"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
            layout="responsive"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}