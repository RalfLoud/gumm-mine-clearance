import { Mail, MapPin, Send } from "lucide-react";

export default function Footer() {
  return (
    <section id="contact" className="bg-[#0d0d0d] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Контактная информация</h2>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold">ООО «КОМПЛИТ ТЕХНИК»</p>
            <p className="text-sm opacity-80">ИНН: 9728100230</p>
          </div>
          
          <div>
            <p className="text-sm">8 (800) 234 13 85</p>
            <div className="flex items-center gap-2 mt-1">
              <Mail className="w-4 h-4 text-[#78eb46] opacity-80" />
              <a href="mailto:info@sgrvip.ru" className="text-sm hover:underline">
                info@sgrvip.ru
              </a>
            </div>
          </div>
          
          <address className="not-italic">
            <div className="flex items-start gap-2">
              <MapPin className="w-12 h-12 text-[#78eb46] opacity-80 mt-1" />
              <p className="text-sm leading-snug">
                129626, г. Москва, вн.тер.г., м.о. Алексеевский,<br />ул. 2-я Мытищинская, д. 2 с. 1
              </p>
            </div>
          </address>
          
          <div>
            <div className="flex items-center gap-2">
              <Send className="w-12 h-12 text-[#78eb46] opacity-80" />
              <a
                href="https://t.me/sapper_channel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                Telegram канал<br />Службы гуманитарного разминирования
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}