"use client";

import { motion } from "framer-motion";
import { Mail, GitBranchIcon, LinkIcon, FileText, ArrowUpRight } from "lucide-react";

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "dumreprasiddhi@gmail.com",
      href: "mailto:dumreprasiddhi@gmail.com",
    },
    {
      icon: GitBranchIcon,
      label: "GitHub",
      value: "github.com/Prasiddhi16",
      href: "https://github.com/Prasiddhi16",
    },
    {
      icon: LinkIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/prasiddhi-dumre",
      href: "https://www.linkedin.com/in/prasiddhi-dumre/",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-12 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 50% 50%, rgba(198, 164, 108, 0.15) 0%, transparent 60%),
          linear-gradient(to bottom, var(--soft-beige), var(--cream-beige))
        `,
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm tracking-widest uppercase text-[var(--category-text)] mb-4 block"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Get In Touch
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[var(--deep-chocolate)] mb-6"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Let's Create Together
          </h2>
          <p
            className="text-xl text-[var(--espresso-brown)]/80 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Have a project in mind or just want to connect? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-[var(--soft-beige)] to-[var(--warm-sand)] border border-[var(--muted-gold)]/20 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--deep-chocolate)] flex items-center justify-center group-hover:bg-[var(--espresso-brown)] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[var(--muted-gold)]" />
                  </div>
                  <div>
                    <div
                      className="text-sm tracking-widest uppercase text-[var(--category-text)] mb-2"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {link.label}
                    </div>
                    <div
                      className="text-base text-[var(--deep-chocolate)] group-hover:text-[var(--espresso-brown)] transition-colors"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {link.value}
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[var(--muted-gold)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Resume Button */}
        <div className="flex justify-center mt-8">
        <motion.a
            href="Prasiddhi_CV.pdf"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[var(--deep-chocolate)] text-[var(--cream-beige)] rounded-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
            <FileText className="w-5 h-5" />
            <span
            className="text-lg tracking-wide"
            style={{ fontFamily: "var(--font-sans)" }}
            >
            Download Resume
            </span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </motion.a>
        </div>
      </div>

    
    </section>
  );
}
