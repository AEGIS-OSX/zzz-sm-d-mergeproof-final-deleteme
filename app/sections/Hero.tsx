"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ProjectImage from "../components/ProjectImage";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.05,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Hero(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "65%"]);

  return (
    <motion.section
      id="hero"
      ref={sectionRef}
      className="min-h-screen bg-[var(--color-canvas)] pt-[12vh] pb-[16vh]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
        <motion.div
          className="md:col-span-7 flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className="font-[family-name:var(--font-mono)] text-[var(--text-xs)] text-[var(--color-pencil)] tracking-[0.02em] mb-4"
            variants={itemVariants}
          >
            Preview: Launching 2026
          </motion.p>
          <motion.h1
            className="font-[family-name:var(--font-display)] text-[64px] md:text-[var(--text-display-sm)] xl:text-[var(--text-display)] leading-[0.94] tracking-[-0.01em] text-[var(--color-ink)] [overflow-wrap:anywhere] min-w-0 mb-6"
            variants={itemVariants}
          >
            Margin
          </motion.h1>
          <motion.p
            className="font-[family-name:var(--font-body)] text-[var(--text-md)] leading-[1.65] text-[var(--color-ink)] max-w-[45ch]"
            variants={itemVariants}
          >
            The archival alternative to the disposable digital note. A physical vessel for permanent thought.
          </motion.p>
        </motion.div>
        <div className="md:col-span-5 flex items-center justify-center overflow-hidden">
          <motion.div style={{ y }} className="w-full">
            <ProjectImage
              id="hero"
              alt="Macro paper texture"
              className="w-full h-auto"
              priority
              fetchpriority="high"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
