"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectImage from "@/app/components/ProjectImage";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

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
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-8">
          <motion.div
            className="md:col-span-7"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={itemVariants}
              className="mb-6 font-[family-name:var(--font-mono)] text-[13px] leading-[1.2] tracking-[0.02em] text-[var(--color-pencil)]"
            >
              Preview: Launching 2026
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="mb-8 min-w-0 font-[family-name:var(--font-display)] text-[64px] leading-[0.94] tracking-[-0.01em] text-[var(--color-ink)] [overflow-wrap:anywhere] md:text-[88px] lg:text-[120px]"
            >
              Margin
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-[45ch] font-[family-name:var(--font-body)] text-[17px] leading-[1.65] text-[var(--color-ink)]"
            >
              The archival alternative to the disposable digital note. A physical vessel for permanent thought.
            </motion.p>
          </motion.div>

          <div className="md:col-span-5">
            <motion.div style={{ y: imageY }}>
              <ProjectImage
                id="hero"
                alt="Macro paper texture"
                className="h-auto w-full"
                priority
                fetchpriority="high"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
