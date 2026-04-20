export type Lang = 'tr' | 'en'

export const translations = {
  en: {
    profile: {
      name: 'Oguzhan Turgut Demircioglu',
      title: 'Software Developer',
      summary:
        'Backend-focused developer with 5+ years of experience. I build reliable business software with Java, Spring Boot, .NET and React.',
      email: 'oguzhanturgut611@gmail.com',
      phone: '+90 552 773 59 94',
      location: 'Ankara, Turkiye',
      linkedin: 'https://www.linkedin.com/in/oguzhan-demircioglu/',
      github: 'https://github.com/OguzhanDemircioglu',
    },
    nav: {
      viewCV: 'View CV',
      contact: 'Contact',
    },
    summary: {
      pageTitle: 'Summary',
      text: 'Software developer focused on backend systems with solid frontend support experience. I mainly build enterprise applications, integration-heavy services and web products that need to work reliably.',
      blocks: [
        { label: 'Experience', value: '5+ years' },
        { label: 'Main stack', value: 'Java, Spring Boot, .NET, React' },
        { label: 'Domains', value: 'VoIP, CRM, GIS, e-invoicing' },
      ],
      notes: [
        'Experienced with monolithic and microservice-based systems.',
        'Worked across Java, Spring Boot, .NET, React, Oracle and PostgreSQL environments.',
      ],
    },
    education: {
      pageTitle: 'Education',
      items: [
        {
          period: '2014 - 2019',
          title: 'Turk Hava Kurumu University',
          text: 'Electrical and Electronics Engineering (English). Built a strong technical foundation in systems, analysis and problem solving.',
        },
        {
          period: 'Core Focus',
          title: 'Software Development',
          text: 'Focused on backend development, APIs, microservices, database work and practical frontend delivery with React.',
        },
        {
          period: 'Key Topics',
          title: 'Engineering Mindset',
          text: 'Comfortable with enterprise systems, legacy modernization, integrations, communication services and product-oriented web applications.',
        },
        {
          period: 'Language',
          title: 'English',
          text: 'Upper intermediate (B2). Able to work with technical documentation and international teams.',
        },
      ],
    },
    experience: {
      pageTitle: 'Work Experience',
      items: [
        {
          period: '12.2024 - 01.2026',
          role: 'Software Developer - Global PBX',
          text: 'Worked on a Web Phone platform with Java 17, Spring Boot, React, Redis, Elasticsearch and microservices.',
        },
        {
          period: '07.2024 - 12.2024',
          role: 'Software Developer - Basarsoft',
          text: 'Built GIS-based stock, vehicle and employee tracking workflows with .NET 7, React, Ocelot and Docker.',
        },
        {
          period: '10.2023 - 07.2024',
          role: 'Software Developer - KolaySoft',
          text: 'Worked on e-invoicing systems across Spring Boot portal services, React frontend, .NET desktop tools and REST/SOAP APIs.',
        },
        {
          period: '11.2021 - 10.2023',
          role: 'Software Developer - Etiya',
          text: 'Maintained legacy SOAP/XML flows and contributed to Spring Boot REST modernization, Angular frontend and Oracle PL/SQL work.',
        },
      ],
    },
    projects: {
      titles: [
        'Project Details I',
        'Project Details II',
        'Project Details III',
        'Project Details IV',
      ],
      techUsed: 'Tech Stack:',
      reasonLeaving: 'Reason for leaving:',
      items: [
        {
          title: 'Web Phone (VoIP Platform)',
          company: 'Global PBX',
          period: '12.2024 - 01.2026',
          tags: ['Java 17', 'Spring Boot', 'React.js', 'Redis', 'Elasticsearch', 'gRPC', 'Docker', 'Gradle', 'RabbitMQ', 'Wildfly', 'Zabbix'],
          details: [
            'Large-scale microservice-based VoIP platform supporting mobile, web and desktop clients',
            'Took responsibility for 3 microservices within a broad microservice ecosystem',
            'Provided backend support across all 3 platform layers',
            'Maintained the React.js web frontend alongside backend work',
            'RocketChat integration: WebSocket-based instant messaging module',
            'AI chatbot integration; used Elasticsearch for search and response matching',
            'Used Redis for caching; Java 17, Spring Boot, Gradle and Docker',
          ],
          note: 'Team was downsized due to organizational restructuring',
        },
        {
          title: 'GIS-Based Asset & Stock Tracking',
          company: 'Basarsoft',
          period: '07.2024 - 12.2024',
          tags: ['.NET 7', 'React.js', 'Ocelot', 'Oracle', 'Docker'],
          details: [
            'Multi-module asset and stock tracking system with 3 core modules',
            'Asset Management: vehicle and meeting room assignment tracking',
            'GIS Module: map-based tracking of employee locations and vehicles',
            'Microservice architecture with .NET 7, Ocelot API Gateway, containerized with Docker',
            'Worked on React.js frontend screens',
          ],
          note: 'Laid off due to team restructuring',
        },
        {
          title: 'E-Invoicing & e-Transformation Systems',
          company: 'KolaySoft',
          period: '10.2023 - 07.2024',
          tags: ['Java 8', 'Spring Boot', 'React 16', '.NET', 'Wildfly', 'Zabbix'],
          details: [
            'e-Transformation system integrating client invoice data with GIB (Revenue Administration)',
            '.NET desktop application installed on client machines to collect accounting data',
            'Portal layer with Java 8 (Spring Boot) and React 16 for invoice management',
            'Reported e-Invoice data to GIB in compliance with legal standards',
            'Used Wildfly as app server and Zabbix for system monitoring',
            '3 projects — REST & SOAP APIs, PostgreSQL & MSSQL',
          ],
          note: 'Resigned for personal reasons',
        },
        {
          title: 'TürkTelekom CRM Order Management',
          company: 'Etiya',
          period: '11.2021 - 10.2023',
          tags: ['Java 8', 'Spring Boot', 'Angular', 'JSP', 'SOAP', 'Oracle PL/SQL'],
          details: [
            'Maintained a legacy Java 1.8 SOAP/XML monolithic system in production since 2005',
            'Contributed to migration to Spring Boot (Java 8) and RESTful APIs',
            'Contributed to Angular-based frontend as part of modernization',
            '3 projects: legacy SOAP system, Spring Boot backend, Angular frontend',
            'Oracle PL/SQL development and optimization',
            'Volunteered in .NET 3.1 API development for the "Ahbap" NGO project',
          ],
          note: 'Resigned for a better opportunity',
        },
      ],
    },
    skills: {
      pageTitle: 'Technical Skills',
      items: [
        { category: 'Backend', value: 'Java (SOA Architecture), Spring Boot, .NET Core' },
        { category: 'Frontend', value: 'React, Next.js, Angular 2.0' },
        { category: 'Arch & APIs', value: 'Microservices, RESTful, SOAP, gRPC, Feign Client, Clean Architecture' },
        { category: 'Databases', value: 'Oracle, PostgreSQL, MSSQL, PL/SQL' },
        { category: 'DevOps & Tools', value: 'Docker, Git, Ocelot, RabbitMQ, Redis, Elasticsearch, Zabbix' },
        { category: 'Other', value: 'WebRTC, SIP/VoIP, Unit Testing, XML/XSLT' },
      ],
      language: { label: 'Language', value: 'English — Upper Intermediate (B2)' },
    },
    ownProjects: {
      pageTitle: 'Own Projects',
      livePreview: 'Live Preview',
      techUsed: 'Tech Used:',
      items: [
        {
          title: 'Pet Commerce Website',
          link: 'https://pet-eight-rho.vercel.app',
          stack: 'React, Vite, Spring Boot, payment flow, admin tools',
          description:
            'A product-focused commerce website I am building to sell. It already includes catalog, cart, login, orders, payments and admin-side features.',
          details: [
            'Catalog, product detail, cart and order flow',
            'Login, profile and notification features',
            'Spring Boot backend with admin operations',
            'Payment and Telegram notification integration',
          ],
          note: 'This project is not only a demo. It has potential to become a reusable starter product for niche stores.',
        },
      ],
    },
    contact: {
      pageTitle: 'Contact',
      heading: "Let's build something useful.",
      text: 'I enjoy backend-heavy systems, integration work and product-focused web applications with clear business value.',
      linkedin: 'LinkedIn Profile',
      github: 'GitHub Profile',
    },
    end: {
      pageTitle: 'End',
      heading: 'Thanks for reading.',
      text: 'Backend systems, integrations and product-focused development.',
    },
  },

  tr: {
    profile: {
      name: 'Oğuzhan Turgut Demircioğlu',
      title: 'Yazılım Geliştirici',
      summary:
        'Backend odaklı, 5+ yıl deneyimli bir geliştirici. Java, Spring Boot, .NET ve React ile güvenilir iş yazılımları geliştiriyorum.',
      email: 'oguzhanturgut611@gmail.com',
      phone: '+90 552 773 59 94',
      location: 'Ankara, Türkiye',
      linkedin: 'https://www.linkedin.com/in/oguzhan-demircioglu/',
      github: 'https://github.com/OguzhanDemircioglu',
    },
    nav: {
      viewCV: 'CV Görüntüle',
      contact: 'İletişim',
    },
    summary: {
      pageTitle: 'Özet',
      text: 'Backend sistemlere odaklanan, güçlü frontend destek deneyimine sahip yazılım geliştiricisi. Ağırlıklı olarak kurumsal uygulamalar, entegrasyon yoğun servisler ve güvenilir web ürünleri geliştiriyorum.',
      blocks: [
        { label: 'Deneyim', value: '5+ yıl' },
        { label: 'Ana Yığın', value: 'Java, Spring Boot, .NET, React' },
        { label: 'Alanlar', value: 'VoIP, CRM, GIS, e-fatura' },
      ],
      notes: [
        'Monolitik ve mikroservis tabanlı sistemlerde deneyim sahibiyim.',
        'Java, Spring Boot, .NET, React, Oracle ve PostgreSQL ortamlarında çalıştım.',
      ],
    },
    education: {
      pageTitle: 'Eğitim',
      items: [
        {
          period: '2014 - 2019',
          title: 'Türk Hava Kurumu Üniversitesi',
          text: 'Elektrik ve Elektronik Mühendisliği (İngilizce). Sistemler, analiz ve problem çözme alanında güçlü teknik altyapı.',
        },
        {
          period: 'Ana Odak',
          title: 'Yazılım Geliştirme',
          text: 'Backend geliştirme, API\'lar, mikroservisler, veritabanı çalışmaları ve React ile frontend teslimatına odaklandım.',
        },
        {
          period: 'Temel Konular',
          title: 'Mühendislik Yaklaşımı',
          text: 'Kurumsal sistemler, eski sistem modernizasyonu, entegrasyonlar ve ürün odaklı web uygulamalarında deneyim.',
        },
        {
          period: 'Dil',
          title: 'İngilizce',
          text: 'Orta-üst seviye (B2). Teknik dokümanlar ve uluslararası ekiplerle çalışabiliyorum.',
        },
      ],
    },
    experience: {
      pageTitle: 'İş Deneyimi',
      items: [
        {
          period: '12.2024 - 01.2026',
          role: 'Yazılım Geliştirici - Global PBX',
          text: 'Java 17, Spring Boot, React, Redis, Elasticsearch ve mikroservislerle Web Phone platformu üzerinde çalıştım.',
        },
        {
          period: '07.2024 - 12.2024',
          role: 'Yazılım Geliştirici - Basarsoft',
          text: '.NET 7, React, Ocelot ve Docker ile GIS tabanlı stok, araç ve personel takip iş akışları geliştirdim.',
        },
        {
          period: '10.2023 - 07.2024',
          role: 'Yazılım Geliştirici - KolaySoft',
          text: 'Spring Boot portal servisleri, React frontend, .NET masaüstü araçları ve REST/SOAP API\'leri kapsayan e-fatura sistemleri.',
        },
        {
          period: '11.2021 - 10.2023',
          role: 'Yazılım Geliştirici - Etiya',
          text: 'Eski SOAP/XML akışlarını korudum; Spring Boot REST modernizasyonu, Angular frontend ve Oracle PL/SQL çalışmaları.',
        },
      ],
    },
    projects: {
      titles: [
        'Proje Detayları I',
        'Proje Detayları II',
        'Proje Detayları III',
        'Proje Detayları IV',
      ],
      techUsed: 'Teknoloji:',
      reasonLeaving: 'Ayrılma Nedeni:',
      items: [
        {
          title: 'Web Phone (VoIP Platformu)',
          company: 'Global PBX',
          period: '12.2024 - 01.2026',
          tags: ['Java 17', 'Spring Boot', 'React.js', 'Redis', 'Elasticsearch', 'gRPC', 'Docker', 'Gradle', 'RabbitMQ', 'Wildfly', 'Zabbix'],
          details: [
            'Mobil, web ve masaüstü istemcileri destekleyen büyük ölçekli mikroservis tabanlı VoIP platformu',
            'Geniş mikroservis ekosisteminde 3 mikroservisin sorumluluğunu üstlendim',
            '3 platform katmanına (mobil, web, masaüstü) backend desteği sağladım',
            'Backend sorumluluklarının yanı sıra React.js web frontendini de yönettim',
            'RocketChat entegrasyonu: WebSocket tabanlı anlık mesajlaşma modülü',
            'Yapay zeka destekli chatbot entegrasyonu; Elasticsearch ile arama ve yanıt eşleştirmesi',
            'Önbellek için Redis; Java 17, Spring Boot, Gradle ve Docker',
          ],
          note: 'Organizasyonel yeniden yapılanma nedeniyle ekip küçüldü',
        },
        {
          title: 'GIS Tabanlı Varlık & Stok Takibi',
          company: 'Basarsoft',
          period: '07.2024 - 12.2024',
          tags: ['.NET 7', 'React.js', 'Ocelot', 'Oracle', 'Docker'],
          details: [
            '3 ana modüllü çok modüllü varlık ve stok takip sistemi',
            'Varlık Yönetimi: araç ve toplantı odası atama/iade takibi',
            'GIS Modülü: coğrafi verilerle çalışan ve araç konum takibi',
            '.NET 7, Ocelot API Gateway ile mikroservis mimarisi, Docker ile konteynerleştirildi',
            'React.js frontend ekranlarında çalıştım',
          ],
          note: 'Ekip yeniden yapılanması nedeniyle çıkarıldım',
        },
        {
          title: 'E-Fatura & e-Dönüşüm Sistemleri',
          company: 'KolaySoft',
          period: '10.2023 - 07.2024',
          tags: ['Java 8', 'Spring Boot', 'React 16', '.NET', 'Wildfly', 'Zabbix'],
          details: [
            'İstemci fatura verisini GİB raporlamasıyla entegre eden e-Dönüşüm sistemi',
            'Muhasebe verilerini toplayan .NET masaüstü uygulaması',
            'Java 8 (Spring Boot) ve React 16 ile portal katmanı',
            'Yasal standartlara uygun e-Fatura verilerini GİB\'e raporladım',
            'Uygulama sunucusu Wildfly, izleme için Zabbix',
            '3 proje — REST & SOAP API\'leri, PostgreSQL & MSSQL',
          ],
          note: 'Kişisel nedenlerle istifa ettim',
        },
        {
          title: 'TürkTelekom CRM Sipariş Yönetimi',
          company: 'Etiya',
          period: '11.2021 - 10.2023',
          tags: ['Java 8', 'Spring Boot', 'Angular', 'JSP', 'SOAP', 'Oracle PL/SQL'],
          details: [
            '2005\'ten beri üretimde olan eski Java 1.8 SOAP/XML monolitik sistemini korudum',
            'Spring Boot (Java 8) ve RESTful API\'lere taşıma projesine katıldım',
            'Modernizasyon kapsamında Angular frontend\'e katkı sağladım',
            '3 proje: eski SOAP sistemi, Spring Boot backend, Angular frontend',
            'Oracle PL/SQL geliştirme ve optimizasyonu',
            '"Ahbap" STK projesi için .NET 3.1 ile API geliştirmeye gönüllü katkı',
          ],
          note: 'Daha iyi bir fırsat için istifa ettim',
        },
      ],
    },
    skills: {
      pageTitle: 'Teknik Beceriler',
      items: [
        { category: 'Backend', value: 'Java (SOA Mimarisi), Spring Boot, .NET Core' },
        { category: 'Frontend', value: 'React, Next.js, Angular 2.0' },
        { category: 'Mim. & API', value: 'Mikroservisler, RESTful, SOAP, gRPC, Feign Client, Temiz Mimari' },
        { category: 'Veritabanı', value: 'Oracle, PostgreSQL, MSSQL, PL/SQL' },
        { category: 'DevOps & Araç', value: 'Docker, Git, Ocelot, RabbitMQ, Redis, Elasticsearch, Zabbix' },
        { category: 'Diğer', value: 'WebRTC, SIP/VoIP, Birim Testi, XML/XSLT' },
      ],
      language: { label: 'Dil', value: 'İngilizce — Orta-Üst Seviye (B2)' },
    },
    ownProjects: {
      pageTitle: 'Kendi Projelerim',
      livePreview: 'Canlı Önizleme',
      techUsed: 'Kullanılan Teknolojiler:',
      items: [
        {
          title: 'Pet Ticaret Sitesi',
          link: 'https://pet-eight-rho.vercel.app',
          stack: 'React, Vite, Spring Boot, ödeme akışı, yönetim araçları',
          description:
            'Satmak amacıyla geliştirdiğim ürün odaklı ticaret sitesi. Katalog, sepet, giriş, siparişler, ödemeler ve yönetici özellikleri mevcut.',
          details: [
            'Katalog, ürün detayı, sepet ve sipariş akışı',
            'Giriş, profil ve bildirim özellikleri',
            'Yönetici işlemleriyle Spring Boot backend',
            'Ödeme ve Telegram bildirim entegrasyonu',
          ],
          note: 'Bu proje yalnızca bir demo değil. Niş mağazalar için yeniden kullanılabilir bir başlangıç ürününe dönüşme potansiyeli taşıyor.',
        },
      ],
    },
    contact: {
      pageTitle: 'İletişim',
      heading: 'Birlikte bir şeyler inşa edelim.',
      text: 'Backend ağırlıklı sistemler, entegrasyon çalışmaları ve net iş değeri olan ürün odaklı web uygulamalarından keyif alıyorum.',
      linkedin: 'LinkedIn Profili',
      github: 'GitHub Profili',
    },
    end: {
      pageTitle: 'Son',
      heading: 'Okuduğunuz için teşekkürler.',
      text: 'Backend sistemler, entegrasyonlar ve ürün odaklı geliştirme.',
    },
  },
}
