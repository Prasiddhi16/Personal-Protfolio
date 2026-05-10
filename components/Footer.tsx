"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[var(--soft-beige)] text-[var(--espresso-brown)] py-6 mt-12 border-t border-[var(--border)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <p style={{ fontFamily: "var(--font-sans)" }} className="text-sm">
          © 2026 Prasiddhi Dumre. Crafted with passion and precision.
        </p>
      </div>
    </motion.footer>
  );
}
