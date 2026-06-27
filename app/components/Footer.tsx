"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="flex items-center gap-2 text-[#555] text-sm">
          <span>© {new Date().getFullYear()}</span>
          <span className="text-white font-medium">
            burakdursun<span className="text-[#8b5cf6]">.xyz</span>
          </span>
          <span>— Tüm hakları saklıdır.</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/SpanyDev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-white transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/burak-dursun-89029341a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-white transition-colors text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/burak_dursun3469/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-white transition-colors text-sm"
          >
            Instagram
          </a>
        </div>

        {/* Scroll to Top */}
        <motion.button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-[#555] hover:text-white transition-colors text-sm group"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Yukarı Çık
          <svg
            className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
