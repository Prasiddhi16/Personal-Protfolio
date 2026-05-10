"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-[var(--soft-beige)] to-[var(--cream-beige)] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side: profile graphic */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[var(--warm-sand)] to-[var(--espresso-brown)] overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-[var(--muted-gold)]/20 flex items-center justify-center">
                  <span
                    className="text-6xl text-[var(--deep-chocolate)]"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    PD
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative orbs */}
            <motion.div
              style={{ y }}
              className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full bg-[var(--muted-gold)]/10 -z-10 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
              className="absolute -top-8 -left-8 w-48 h-48 rounded-full bg-[var(--warm-sand)]/10 -z-10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          {/* Right side: text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <motion.span
                className="text-sm tracking-widest uppercase text-[var(--category-text)] mb-4 block"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                About Me
              </motion.span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-[var(--deep-chocolate)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Creating Digital Experiences
              </h2>
            </div>

            <div className="space-y-6" style={{ fontFamily: "var(--font-sans)" }}>
              <p className="text-lg leading-relaxed text-[var(--espresso-brown)]/80">
                I'm a developer and designer passionate about building systems that feel intuitive,
                elegant, and alive. My work sits at the intersection of code and creativity.
              </p>

              <p className="text-lg leading-relaxed text-[var(--espresso-brown)]/80">
                With expertise in React, Python, and UI/UX design, I craft digital products that
                combine technical precision with thoughtful user experiences.
              </p>

              <motion.blockquote
                className="pl-6 border-l-2 border-[var(--muted-gold)] italic text-2xl leading-relaxed text-[var(--deep-chocolate)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                "I enjoy building systems that feel intuitive, elegant, and alive."
              </motion.blockquote>

              <p className="text-lg leading-relaxed text-[var(--espresso-brown)]/80">
                Every project is an opportunity to learn, iterate, and push the boundaries of what's
                possible in the digital realm.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
