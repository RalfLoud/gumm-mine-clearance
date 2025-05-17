import { useState, useEffect } from "react";
import useScrollSpy from "../hooks/useScrollSpy";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useScrollSpy(["home", "about-company", "services", "capabilities", "advantages", "company-results", "news", "certificate", "contact"], 100);
  
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => void (document.body.style.overflow = "");
  }, [isOpen]);
  
  const handleClose = () => setIsOpen(false);
  
  const linkClass = (id) =>
    `transition-colors hover:text-[#89f901] ${
      activeId === id ? "text-[#89f901] font-semibold" : "text-white"
    }`;
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-gray-800 overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center md:justify-center justify-between">
        
        {/* Десктоп-меню */}
        <div className="hidden md:flex flex-wrap justify-center space-x-6 text-md font-medium uppercase tracking-wider">
          <a href="#home" className={linkClass("home")}>Главная</a>
          <a href="#about-company" className={linkClass("about-company")}>О компании</a>
          <a href="#services" className={linkClass("services")}>Услуги</a>
          <a href="#certificate" className={linkClass("certificate")}>Сертификаты</a>
          {/*<a href="#capabilities" className={linkClass("capabilities")}>Наши возможности</a>*/}
          {/*<a href="#advantages" className={linkClass("advantages")}>Наши преимущества</a>*/}
          {/*<a href="#company-results" className={linkClass("company-results")}>Результаты деятельности</a>*/}
          {/*<a href="#company-results" className={linkClass("company-results")}>Результаты деятельности</a>*/}
          {/*<a href="#news" className={linkClass("news")}>СМИ о нас</a>*/}
          <a href="#contact" className={linkClass("contact")}>Контакты</a>
          <a target="_blank"
             rel="noopener noreferrer" className="text-white transition-colors hover:text-[#89f901]" href="https://t.me/Lugansk_nemo">Трудоустройство</a>
        </div>
        
        {/* Бургер-кнопка */}
        <div className="md:hidden z-50 flex items-center justify-end shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-[2px] bg-white mb-1 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <div className={`w-6 h-[2px] bg-white mb-1 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
            <div className={`w-6 h-[2px] bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>
      
      {/* Затемнение фона */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } md:hidden z-40`}
        onClick={handleClose}
      />
      
      {/* Мобильное меню */}
      <div
        className={`fixed top-0 right-0 w-[80vw] max-w-sm h-full bg-black shadow-lg z-50 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-stretch p-6 space-y-6 text-sm uppercase tracking-wider">
          <a onClick={handleClose} href="#home" className={linkClass("home")}>Главная</a>
          <a onClick={handleClose} href="#about-company" className={linkClass("about-company")}>О компании</a>
          <a onClick={handleClose} href="#services" className={linkClass("services")}>Услуги</a>
          <a onClick={handleClose} href="#certificate" className={linkClass("certificate")}>Сертификаты</a>
          {/*<a onClick={handleClose} href="#capabilities" className={linkClass("capabilities")}>Наши возможности</a>*/}
          {/*<a onClick={handleClose} href="#advantages" className={linkClass("advantages")}>Наши преимущества</a>*/}
          {/*<a onClick={handleClose} href="#company-results" className={`${linkClass("company-results")} leading-tight break-words`}>*/}
          {/*  Результаты деятельности*/}
          {/*</a>*/}
          {/*<a onClick={handleClose} href="#news" className={linkClass("news")}>СМИ о нас</a>*/}
          <a onClick={handleClose} href="#contact" className={linkClass("contact")}>Контакты</a>
          <a target="_blank"
             rel="noopener noreferrer" className="text-white transition-colors hover:text-[#89f901]" onClick={handleClose} href="https://t.me/Lugansk_nemo">Трудоустройство</a>
        </nav>
      
      </div>
    </nav>
  );
};

export default Header;