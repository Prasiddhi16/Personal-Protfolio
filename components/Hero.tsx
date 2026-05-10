"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star, Code, Sparkles, Heart, Globe, Zap } from "lucide-react";

function FloatingIcon({ Icon, x, y, delay }: { Icon: any; x: number; y: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ y: [0, -30, 0], opacity: 1 }}
      transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
      className="absolute text-[var(--icons)] opacity-70"
      style={{ left: x, top: y }}   
    >
      <Icon className="w-8 h-8" />
    </motion.div>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <motion.section
      id="hero"
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating Icons Background with Maroon Overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--maroon)]/30">
        <FloatingIcon Icon={Star} x={50} y={100} delay={0} />
        <FloatingIcon Icon={Code} x={200} y={300} delay={1} />
        <FloatingIcon Icon={Sparkles} x={400} y={150} delay={2} />
        <FloatingIcon Icon={Star} x={600} y={250} delay={3} />
        <FloatingIcon Icon={Code} x={800} y={400} delay={4} />
        {/* Extra Floating Icons */}
        <FloatingIcon Icon={Heart} x={950} y={500} delay={1.5} />
        <FloatingIcon Icon={Globe} x={1100} y={350} delay={2.5} />
        <FloatingIcon Icon={Zap} x={1200} y={200} delay={3.5} />
      </div>

      {/* Foreground Content */}
      <motion.div
        style={{ y }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight text-[var(--deep-chocolate)]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          PRASIDDHI DUMRE
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <span className="text-base sm:text-lg md:text-xl text-[var(--espresso-brown)]">
            Designer
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted-gold)]" />
          <span className="text-base sm:text-lg md:text-xl text-[var(--espresso-brown)]">
            Developer
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted-gold)]" />
          <span className="text-base sm:text-lg md:text-xl text-[var(--espresso-brown)]">
            Builder
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-[var(--espresso-brown)]/80 italic px-4"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Crafting thoughtful digital experiences through code, design, and
          interaction.
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className="text-xs tracking-widest text-[var(--espresso-brown)]/60 uppercase"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-[var(--muted-gold)]" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
