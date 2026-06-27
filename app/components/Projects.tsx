"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Project {
  id: number;
  name: string;
  fullName: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  topics: string[];
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
}

const languageColors: Record<string, string> = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3776ab",
  HTML: "#e34f26",
  CSS: "#1572b6",
  Java: "#ed8b00",
  "C#": "#239120",
  "C++": "#00599c",
  Go: "#00add8",
  Rust: "#dea584",
  Ruby: "#cc342d",
  PHP: "#777bb3",
  Swift: "#fa7343",
  Kotlin: "#7f52ff",
  Dart: "#0175c2",
  Vue: "#42b883",
  Shell: "#89e051",
  Lua: "#000080",
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/github");
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        }
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Öne Çıkan Projeler
            </h2>
          </motion.div>
          {projects.length > 4 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              onClick={() => setShowAll(!showAll)}
              className="text-[#888] text-sm hover:text-white transition-colors flex items-center gap-2 group"
            >
              {showAll ? "Daha Az Göster" : "Tüm Projeleri Gör"}
              <svg
                className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
                  showAll ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="glass-card p-6 animate-pulse"
              >
                <div className="h-4 bg-white/10 rounded w-3/4 mb-4" />
                <div className="h-3 bg-white/5 rounded w-full mb-2" />
                <div className="h-3 bg-white/5 rounded w-2/3 mb-6" />
                <div className="flex gap-2">
                  <div className="h-6 bg-white/5 rounded-full w-16" />
                  <div className="h-6 bg-white/5 rounded-full w-16" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {displayedProjects.map((project, i) => (
              <motion.a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card p-6 group block"
              >
                {/* Project Header with gradient bar */}
                <div className="h-1 w-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] rounded-full mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />

                {/* Project Name */}
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#8b5cf6] transition-colors truncate">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-[#888] text-sm leading-relaxed mb-4 line-clamp-2 min-h-[40px]">
                  {project.description || "Açıklama mevcut değil."}
                </p>

                {/* Topics Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4 min-h-[28px]">
                  {project.topics.slice(0, 3).map((topic) => (
                    <span key={topic} className="tech-tag text-[10px] px-2 py-0.5">
                      {topic}
                    </span>
                  ))}
                  {project.language && project.topics.length === 0 && (
                    <span className="tech-tag text-[10px] px-2 py-0.5">
                      {project.language}
                    </span>
                  )}
                </div>

                {/* Footer - Stars, Forks, Language */}
                <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                  {project.language && (
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor:
                            languageColors[project.language] || "#888",
                        }}
                      />
                      <span className="text-[#888] text-xs">
                        {project.language}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-[#888]">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z"
                      />
                    </svg>
                    <span className="text-xs">{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#888]">
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186zm0-12.814a2.25 2.25 0 1 0 3.935-2.186 2.25 2.25 0 0 0-3.935 2.186z"
                      />
                    </svg>
                    <span className="text-xs">{project.forks}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && projects.length === 0 && (
          <div className="glass-card p-12 text-center">
            <p className="text-[#888] text-lg">
              GitHub projeleri yükleniyor...
            </p>
            <a
              href="https://github.com/SpanyDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8b5cf6] hover:underline mt-2 inline-block"
            >
              GitHub profilini ziyaret et →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
