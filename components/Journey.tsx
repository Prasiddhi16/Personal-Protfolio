"use client";

import { motion } from "framer-motion";
import { Calendar, Award, Code, Lightbulb } from "lucide-react";

const milestones = [
  {
    year: "2026",
    title: "Advanced AI Integration",
    description:
      "Developed sophisticated AI-powered applications integrating machine learning models with modern web frameworks.",
    icon: Lightbulb,
    color: "var(--muted-gold)",
  },
  {
    year: "2025",
    title: "Full-Stack Mastery",
    description:
      "Expanded expertise across the entire technology stack, from database architecture to elegant frontend experiences.",
    icon: Code,
    color: "var(--warm-sand)",
  },
  {
    year: "2024",
    title: "Design System Architecture",
    description:
      "Created comprehensive design systems and component libraries, bridging the gap between design and development.",
    icon: Award,
    color: "var(--muted-gold)",
  },
  {
    year: "2023",
    title: "Beginning the Journey",
    description:
      "Started exploring the intersection of code and creativity, building foundational skills in software development.",
    icon: Calendar,
    color: "var(--warm-sand)",
  },
];

export function Journey() {
  return (
    <section
      id="journey"
      className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-[var(--espresso-brown)] to-[var(--deep-chocolate)]"
    >
      <div className="max-w-5xl mx-auto">
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
            Timeline
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[var(--cream-beige)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            My Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--muted-gold)] via-[var(--warm-sand)] to-transparent" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--espresso-brown)] to-[var(--deep-chocolate)] border-4 border-[var(--muted-gold)] flex items-center justify-center shadow-2xl z-10">
                    <Icon className="w-7 h-7" style={{ color: milestone.color }} />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-28 md:ml-0 md:w-[calc(50%-4rem)] ${
                      index % 2 === 0 ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="p-8 rounded-2xl bg-gradient-to-br from-[var(--espresso-brown)]/50 to-[var(--deep-chocolate)]/50 backdrop-blur-sm border border-[var(--muted-gold)]/20 shadow-xl"
                    >
                      <div
                        className="text-sm tracking-widest uppercase mb-2"
                        style={{
                          fontFamily: "var(--font-sans)",
                          color: milestone.color,
                        }}
                      >
                        {milestone.year}
                      </div>
                      <h3
                        className="text-2xl md:text-3xl mb-3 text-[var(--cream-beige)]"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {milestone.title}
                      </h3>
                      <p
                        className="text-base leading-relaxed text-[var(--soft-beige)]/80"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
