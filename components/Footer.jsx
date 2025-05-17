import { Mail, MapPin, Send } from "lucide-react";

export default function Footer() {
  return (
    <section id="contact" className="bg-[#0d0d0d] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Контактная информация</h2>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold">ООО КОНДОР-РА</p>
            <p className="text-sm opacity-80">5007123650</p>
          </div>
          
          <div>
            <div className="flex items-center gap-2 mt-1">
              <Mail className="w-12 h-12 text-[#78eb46] opacity-80" />
              <a href="mailto:russaper@mail.ru" className="text-sm hover:underline">
                russaper@mail.ru
              </a>
            </div>
          </div>
          
          <address className="not-italic">
            <div className="flex items-start gap-2">
              <MapPin className="w-12 h-12 text-[#78eb46] opacity-80 mt-1" />
              <p className="text-sm leading-snug">
                141840, Московская Область, м.о. Дмитровский,<br />г Яхрома, ул Парковая, д. 3
              </p>
            </div>
          </address>
          
          <div>
            <div className="flex items-center gap-2">
              <a
                href="https://t.me/Lugansk_nemo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline"
              >
                <Send className="w-12 h-12 text-[#78eb46] opacity-80" />
              </a>
             
              <a
                href="https://t.me/Lugansk_nemo"
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