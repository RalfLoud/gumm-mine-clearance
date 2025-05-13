import SectionWrapper from "@/components/SectionWrapper";

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">О Нас</h2>
        <div className="max-w-4xl mx-auto text-lg opacity-90 leading-relaxed">
          <p className="mb-6">
            Мы специализируемся на обучении профессионалов, готовых работать в сложных условиях и обеспечивать безопасность людей.
          </p>
          <p>
            Наши инструкторы имеют многолетний опыт в области разминирования и соответствуют всем требованиям государственных стандартов.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}