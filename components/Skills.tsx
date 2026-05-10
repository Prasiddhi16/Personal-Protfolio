"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", category: "Frontend" },
  { name: "Python", category: "Backend" },
  { name: "Qt Framework", category: "Desktop" },
  { name: "FastAPI", category: "Backend" },
  { name: "UI/UX Design", category: "Design" },
  { name: "Machine Learning", category: "AI" },
  { name: "Figma", category: "Design" },
  { name: "TypeScript", category: "Frontend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Git", category: "Tools" },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 md:px-12 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 30% 50%, rgba(198, 164, 108, 0.1) 0%, transparent 50%),
          linear-gradient(to bottom, var(--cream-beige), var(--soft-beige))
        `,
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span
            className="text-sm tracking-widest uppercase text-[var(--category-text)] mb-4 block"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Expertise
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[var(--deep-chocolate)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Skills & Tools
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              className="group relative"
            >
              <div className="px-8 py-4 rounded-2xl bg-gradient-to-br from-[var(--soft-beige)] to-[var(--expresso-brown)] border border-[var(--muted-gold)]/20 shadow-lg backdrop-blur-sm">
                <div className="flex flex-col items-center gap-2">
                  <span
                    className="text-lg text-[var(--deep-chocolate)] group-hover:text-[var(--espresso-brown)] transition-colors"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className="text-xs text-[var(--category-text)] uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {skill.category}
                  </span>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--muted-gold)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ mixBlendMode: "overlay" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}