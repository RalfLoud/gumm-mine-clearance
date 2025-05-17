import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const CertificateCard = ({ src }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  
  // Простой observer без framer-motion
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // только один раз
        }
      },
      {
        threshold: 0.3,
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      ref={ref}
    >
      <div className="relative overflow-hidden rounded shadow-lg">
        <Image
          src={src}
          alt="Сертификат"
          width={400}
          height={500}
          className="object-cover w-full h-auto"
        />
        
        {/* 🔍 ИКОНКА */}
        <div
          className={`absolute inset-0 flex items-center justify-center
            bg-black/40 text-white transition-opacity duration-500 pointer-events-none
            ${visible ? "opacity-100" : "opacity-0"} group-hover:opacity-100`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 15z"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default CertificateCard;
