const SeoSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ГРК Кондор",
    "url": "https://grkondor.ru",
    "logo": "https://grkondor.ru/images/logo.png",
    "image": "https://grkondor.ru/images/og-image.jpg",
    "description": "ГРК Кондор занимается гуманитарным разминированием территорий от взрывоопасных предметов. Профессиональная команда и современное оборудование.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RU"
    },
    "sameAs": [
      "https://t.me/Lugansk_nemo",
    ]
  };
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default SeoSchema;