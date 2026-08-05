"use client";

import { motion } from "framer-motion";

/**
 * CraftStory Section
 * An editorial monograph on material intent.
 * Features an asymmetrical layout with a left-offset text column.
 */
export default function CraftStory() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="craft"
      className="relative w-full py-32 px-4 md:px-8"
      style={{ backgroundColor: "var(--color-canvas)" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Accent Clay Rule */}
          <motion.div
            variants={itemVariants}
            className="h-px mb-6"
            style={{ width: 60, backgroundColor: "var(--color-accent)" }}
            aria-hidden="true"
          />

          {/* Section Heading */}
          <motion.h2
            variants={itemVariants}
            className="mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 40,
              lineHeight: 1.2,
              color: "var(--color-ink)",
            }}
          >
            Material Intent
          </motion.h2>

          {/* Body Text Container */}
          <div className="flex flex-col gap-6" style={{ maxWidth: "65ch" }}>
            <motion.p variants={itemVariants}>
              We build for the analog ritualist. For the work that requires a slower pace and the physical quiet necessary for deep reflection.
            </motion.p>

            <motion.p variants={itemVariants}>
              Our paper is milled in the alpine region of France, selected for a heavy tooth that rewards the pressure of a pen. Every notebook is Smyth-sewn and bound in Japanese ateliers to ensure a perfect lay-flat opening, with a focus on structural integrity over decorative excess.
            </motion.p>

            <motion.p variants={itemVariants}>
              This object is a guarantee of tactile focus. It is a permanent repository for work that matters.
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
