"use client";

import { motion } from "framer-motion";
import { ExternalLink,GitBranch} from "lucide-react";

const projects = [
  {
    title: "AI Content Studio",
    description:
      "An intelligent content creation platform powered by machine learning, enabling users to generate, refine, and optimize creative content with natural language processing.",
    tech: ["React", "Python", "FastAPI", "OpenAI"],
    image: "linear-gradient(135deg, #C6A46C 0%, #3B2B26 100%)",
  },
  {
    title: "Desktop Task Manager",
    description:
      "A high-performance desktop application built with Qt framework, featuring real-time system monitoring, process management, and elegant data visualization.",
    tech: ["Python", "Qt", "SQLite", "UI/UX"],
    image: "linear-gradient(135deg, #D9C2A3 0%, #2A1E1A 100%)",
  },
  {
    title: "Mobile Design System",
    description:
      "A comprehensive design system and component library for mobile applications, ensuring consistency and scalability across multiple platforms.",
    tech: ["React Native", "Figma", "TypeScript", "Storybook"],
    image: "linear-gradient(135deg, #E8D8C3 0%, #3B2B26 100%)",
  },
  {
    title: "Creative Tools Suite",
    description:
      "An innovative toolkit for digital artists and designers, featuring advanced image manipulation, generative art capabilities, and collaborative workflows.",
    tech: ["React", "Canvas API", "WebGL", "Machine Learning"],
    image: "linear-gradient(135deg, #2A1E1A 0%, #C6A46C 100%)",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 px-6 md:px-12 bg-[var(--deep-chocolate)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span
            className="text-sm tracking-widest uppercase text-[var(--muted-gold)] mb-4 block"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Featured Work
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[var(--cream-beige)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Selected Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className={`relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div
                    className="w-full h-full"
                    style={{ background: project.image }}
                  >
                    <div className="w-full h-full bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-full bg-[var(--cream-beige)]/20 backdrop-blur-md flex items-center justify-center border border-[var(--cream-beige)]/30"
                        >
                          <ExternalLink className="w-5 h-5 text-[var(--cream-beige)]" />
                        </motion.button>
                         
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-full bg-[var(--cream-beige)]/20 backdrop-blur-md flex items-center justify-center border border-[var(--cream-beige)]/30"
                        >
                        <GitBranch className="w-5 h-5 text-[var(--cream-beige)]" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-chocolate)]/50 to-transparent opacity-60" />
                </motion.div>

                {/* Project Text */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3
                    className="text-3xl md:text-4xl mb-4 text-[var(--cream-beige)]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-lg leading-relaxed text-[var(--soft-beige)]/80 mb-6"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-[var(--espresso-brown)]/50 backdrop-blur-sm text-sm text-[var(--warm-sand)] border border-[var(--muted-gold)]/20"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
