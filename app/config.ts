export const siteConfig = {
  name: "Burak Dursun",
  title: "Full Stack Developer",
  domain: "burakdursun.xyz",
  description:
    "Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, performans odaklı uygulamalar geliştiriyorum.",
  quote: "Kod yazmak bir sanattır, her satır bir fırça darbesidir.",

  social: {
    github: "https://github.com/SpanyDev",
    linkedin: "https://www.linkedin.com/in/burak-dursun-89029341a/",
    instagram: "https://www.instagram.com/burak_dursun3469/",
    email: "dursunburak385@gmail.com",
  },

  githubUsername: "SpanyDev",
  location: "İstanbul, Türkiye",

  currentProjects: [
    {
      name: "Portfolio Website",
      description: "Kişisel portfolyo web sitesi. Next.js, Framer Motion ve Tailwind CSS ile geliştirildi.",
      status: "active" as const,
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      url: "https://burakdursun.xyz",
      progress: 80,
    },
  ],

  experience: [
    {
      period: "2023 - Şimdi",
      title: "Full Stack Developer",
      company: "Freelance",
      description:
        "Modern web uygulamaları geliştiriyorum. Next.js, React, Node.js kullanıyorum. Müşteri projelerinde performans odaklı çözümler üretiyorum.",
    },
    {
      period: "2022 - 2023",
      title: "Frontend Developer",
      company: "Yazılım Şirketi",
      description:
        "Kullanıcı arayüzleri geliştirdim ve performans optimizasyonları yaptım. React ve TypeScript ile modern web uygulamaları oluşturdum.",
    },
    {
      period: "2021 - 2022",
      title: "Junior Developer",
      company: "Startup",
      description:
        "Web geliştirme dünyasına adım attım ve temel projelerde çalıştım. HTML, CSS, JavaScript ile projeler geliştirdim.",
    },
  ],

  stats: [
    { value: "2+", label: "Yıl Deneyim" },
    { value: "15+", label: "Tamamlanan Proje" },
    { value: "10+", label: "Mutlu Müşteri" },
  ],
};
