"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Waste Sorting Assistant",
    description:
      "An AI-powered mobile application that classifies waste materials from images and guides users on how to properly sort and dispose of them , making recycling smarter and sustainability easier.",
    tech: ["React Native", "Python", "FastAPI", "JavaScript","TypeScript","Machine Learning","PyTorch"],
    image: "/wastesort.png", 
    demo: "https://your-demo-link.com",
    repo: "https://github.com/your-repo-link", 
  },
  {
    title: "Smart Bus Route Optimizer",
    description:
      "Graph-based system for optimizing urban bus routes, offering shortest distance, minimum stops, or fastest travel time with interactive route maps and user-friendly visualization.",
    tech: ["C++", "Qt", "SQLite", "UI/UX"],
    image: "linear-gradient(135deg, #D9C2A3 0%, #2A1E1A 100%)",
  },
  {
    title: "Artha AI",
    description:
      "Artha AI is an AI-powered personal finance management system that helps users track income, expenses, budgets, and goals. It provides predictive analytics, intelligent alerts, receipt scanning, personalized recommendations, and visual financial reports to transform raw financial data into actionable insights for proactive decision-making.",
    tech: ["HTML", "Figma", "CSS", "Python","JavaScript"],
    image: "linear-gradient(135deg, #E8D8C3 0%, #3B2B26 100%)",
  },
  {
    title: "Bloom",
    description:
      "A playful experiment that turns simple hand gestures into enchanting visual effects.",
    tech: ["Python", "Media Pipe", "OpenCV"],
    image: "linear-gradient(135deg, #2A1E1A 0%, #C6A46C 100%)",
  },
  {
    title: "Maze Solver",
    description:
      "This project finds a path through a grid-based maze using two classical algorithms. BFS ensures the shortest path by exploring level by level, while DFS explores deeply before backtracking. It demonstrates graph traversal, pathfinding, and data structure applications.",
    tech: ["JavaScript", "HTML","Python","CSS"],
    image: "linear-gradient(135deg, #2A1E1A 0%, #C6A46C 100%)",
  },
];

export  function Projects() {
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
          transition={{ duration: 1.2 }}
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
              transition={{ duration: 1.2, delay: index * 0.2 }}
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
                  {project.image.startsWith("/") ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                     className="object-contain w-full h-full bg-black"
                    />
                  ) : (
                    <div
                      className="w-full h-full"
                      style={{ background: project.image }}
                    />
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-full bg-[var(--cream-beige)]/20 backdrop-blur-md flex items-center justify-center border border-[var(--cream-beige)]/30"
                        >
                          <ExternalLink className="w-5 h-5 text-[var(--cream-beige)]" />
                        </motion.a>
                      )}
                      {project.repo && (
                        <motion.a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-12 h-12 rounded-full bg-[var(--cream-beige)]/20 backdrop-blur-md flex items-center justify-center border border-[var(--cream-beige)]/30"
                        >
                          <GitBranch className="w-5 h-5 text-[var(--cream-beige)]" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Gradient overlay for readability */}
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
