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
        'Interested in both internal business software and sellable web products.',
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
      titles: ['Project Details I', 'Project Details II', 'Project Details III', 'Project Details IV'],
      techUsed: 'Tech Used:',
      items: [
        {
          title: 'Web Phone (VoIP Platform) - Global PBX',
          stack: 'Java 17, Spring Boot, React, Redis, Elasticsearch, gRPC, Docker',
          details: [
            'Worked on a large microservice-based communication platform for web, mobile and desktop clients.',
            'Took responsibility for 3 microservices and supported React web frontend maintenance.',
            'Contributed to messaging, video call and AI chatbot related features.',
          ],
        },
        {
          title: 'GIS-Based Stock Management - Basarsoft',
          stack: '.NET 7, React, Ocelot, Docker, Oracle',
          details: [
            'Worked on stock, vehicle, meeting room and employee location tracking modules.',
            'Maintained a gateway-based microservice structure with Ocelot.',
            'Contributed to both backend workflows and React frontend screens.',
          ],
        },
        {
          title: 'E-Invoicing Systems - KolaySoft',
          stack: 'Java, Spring Boot, React, .NET, PostgreSQL, MSSQL, REST, SOAP',
          details: [
            'Delivered features across portal services, frontend and desktop data collection tools.',
            'Worked on reporting and invoice data flows connected to legal reporting standards.',
            'Contributed across 3 related projects in the same business domain.',
          ],
        },
        {
          title: 'CRM Order Management - Etiya',
          stack: 'Java, Spring Boot, Angular, SOAP, Oracle PL/SQL, JSP',
          details: [
            'Worked on Turk Telekom CRM and order management related systems.',
            'Maintained legacy SOAP/XML structures and supported REST modernization.',
            'Contributed across backend, frontend and database layers.',
          ],
        },
      ],
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
      text: 'Backend sistemlere odaklanan, güçlü frontend destek deneyimine sahip yazılım geliştiricisi. Ağırlıklı olarak kurumsal uygulamalar, entegrasyon yoğun servisler ve güvenilir çalışması gereken web ürünleri geliştiriyorum.',
      blocks: [
        { label: 'Deneyim', value: '5+ yıl' },
        { label: 'Ana Yığın', value: 'Java, Spring Boot, .NET, React' },
        { label: 'Alanlar', value: 'VoIP, CRM, GIS, e-fatura' },
      ],
      notes: [
        'Monolitik ve mikroservis tabanlı sistemlerde deneyim sahibiyim.',
        'Java, Spring Boot, .NET, React, Oracle ve PostgreSQL ortamlarında çalıştım.',
        'Hem kurumsal iç yazılımlara hem de satılabilir web ürünlerine ilgi duyuyorum.',
      ],
    },
    education: {
      pageTitle: 'Eğitim',
      items: [
        {
          period: '2014 - 2019',
          title: 'Türk Hava Kurumu Üniversitesi',
          text: 'Elektrik ve Elektronik Mühendisliği (İngilizce). Sistemler, analiz ve problem çözme alanında güçlü bir teknik altyapı edindim.',
        },
        {
          period: 'Ana Odak',
          title: 'Yazılım Geliştirme',
          text: 'Backend geliştirme, API lar, mikroservisler, veritabanı çalışmaları ve React ile pratik frontend teslimatına odaklandım.',
        },
        {
          period: 'Temel Konular',
          title: 'Mühendislik Yaklaşımı',
          text: 'Kurumsal sistemler, eski sistem modernizasyonu, entegrasyonlar, iletişim servisleri ve ürün odaklı web uygulamalarında rahatlıkla çalışıyorum.',
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
          text: 'Spring Boot portal servisleri, React frontend, .NET masaüstü araçları ve REST/SOAP API\'leri kapsayan e-fatura sistemleri üzerinde çalıştım.',
        },
        {
          period: '11.2021 - 10.2023',
          role: 'Yazılım Geliştirici - Etiya',
          text: 'Eski SOAP/XML akışlarını korudum ve Spring Boot REST modernizasyonu, Angular frontend ile Oracle PL/SQL çalışmalarına katkı sağladım.',
        },
      ],
    },
    projects: {
      titles: ['Proje Detayları I', 'Proje Detayları II', 'Proje Detayları III', 'Proje Detayları IV'],
      techUsed: 'Kullanılan Teknolojiler:',
      items: [
        {
          title: 'Web Phone (VoIP Platformu) - Global PBX',
          stack: 'Java 17, Spring Boot, React, Redis, Elasticsearch, gRPC, Docker',
          details: [
            'Web, mobil ve masaüstü istemciler için büyük ölçekli mikroservis tabanlı iletişim platformunda çalıştım.',
            '3 mikroservisin sorumluluğunu üstlendim ve React web frontend bakımını destekledim.',
            'Mesajlaşma, görüntülü arama ve AI chatbot ile ilgili özelliklere katkı sağladım.',
          ],
        },
        {
          title: 'GIS Tabanlı Stok Yönetimi - Basarsoft',
          stack: '.NET 7, React, Ocelot, Docker, Oracle',
          details: [
            'Stok, araç, toplantı odası ve personel konum takip modülleri üzerinde çalıştım.',
            'Ocelot ile gateway tabanlı mikroservis yapısını korudum.',
            'Hem backend iş akışlarına hem de React frontend ekranlarına katkı sağladım.',
          ],
        },
        {
          title: 'E-Fatura Sistemleri - KolaySoft',
          stack: 'Java, Spring Boot, React, .NET, PostgreSQL, MSSQL, REST, SOAP',
          details: [
            'Portal servisleri, frontend ve masaüstü veri toplama araçlarında özellikler geliştirdim.',
            'Yasal raporlama standartlarına bağlı raporlama ve fatura veri akışları üzerinde çalıştım.',
            'Aynı iş alanındaki 3 ilgili projeye katkı sağladım.',
          ],
        },
        {
          title: 'CRM Sipariş Yönetimi - Etiya',
          stack: 'Java, Spring Boot, Angular, SOAP, Oracle PL/SQL, JSP',
          details: [
            'Türk Telekom CRM ve sipariş yönetimi sistemleri üzerinde çalıştım.',
            'Eski SOAP/XML yapılarını korudum ve REST modernizasyonunu destekledim.',
            'Backend, frontend ve veritabanı katmanlarına katkı sağladım.',
          ],
        },
      ],
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
            'Satmak amacıyla geliştirdiğim ürün odaklı bir ticaret sitesi. Katalog, sepet, giriş, siparişler, ödemeler ve yönetici özellikleri mevcut.',
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
