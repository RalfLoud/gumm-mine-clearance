import SectionWrapper from "./SectionWrapper";

const TrainingContact = () => {
  return (
    <SectionWrapper className="min-h-[5vh] " innerClassName="min-h-[0] pb-12"  id="training-contact">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Записаться на обучение (Скоро)
      </h2>
      
      <button disabled={true} className="max-w-xl mx-auto rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 pb-6">
          <a
            href="#"
            className="block px-4 w-full pointer-events-none text-center bg-gray-700 text-black hover:scale-105 transition-colors font-semibold py-3 rounded"
          >
            ЗАПИСАТЬСЯ НА ОБУЧЕНИЕ
          </a>
        </div>
      </button>
    </SectionWrapper>
  );
};

export default TrainingContact;