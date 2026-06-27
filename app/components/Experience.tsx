"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
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
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          Deneyim
        </motion.h2>

        {/* Timeline */}
        <div className="relative space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative flex gap-6"
            >
              {/* Timeline Dot + Line */}
              <div className="relative flex flex-col items-center">
                <div className="timeline-dot" />
                {i < experiences.length - 1 && <div className="timeline-line" />}
              </div>

              {/* Content */}
              <div className="glass-card p-6 flex-1 mb-2">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[#8b5cf6] text-sm font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-white text-xl font-semibold mt-1">
                      {exp.title}
                    </h3>
                    <p className="text-[#888] text-sm">{exp.company}</p>
                  </div>
                </div>
                <p className="text-[#888] text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
