import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    { src: "/images/partners/arena.png", alt: "Арена" },
    { src: "/images/partners/stm.png", alt: "СТМ" },
    { src: "/images/partners/monolit.png", alt: "Монолит" },
    { src: "/images/partners/yarl.png", alt: "Ярл" },
  ];
  
  return (
    <section className="py-16 px-4 bg-transparent text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-12">
          Наши партнёры
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, idx) => (
            <div key={idx} className="relative w-24 h-24 sm:w-36 sm:h-36">
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
