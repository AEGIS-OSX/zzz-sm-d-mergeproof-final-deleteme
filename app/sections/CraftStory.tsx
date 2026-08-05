"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * CraftStory Section
 * An editorial monograph on material intent.
 * Features an asymmetrical layout with a left-offset text column.
 */
export default function CraftStory() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const ruleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
    },
  };

  const bodyContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const reducedMotionVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const container = prefersReducedMotion ? reducedMotionVariants : containerVariants;
  const rule = prefersReducedMotion ? reducedMotionVariants : ruleVariants;
  const heading = prefersReducedMotion ? reducedMotionVariants : headingVariants;
  const bodyContainer = prefersReducedMotion ? reducedMotionVariants : bodyContainerVariants;
  const paragraph = prefersReducedMotion ? reducedMotionVariants : paragraphVariants;

  return (
    <section
      id="craft"
      className="relative w-full py-32 px-4 md:px-8"
      style={{ backgroundColor: "var(--color-canvas)" }}
    >
      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-7 flex flex-col items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Accent Clay Rule */}
          <motion.div
            variants={rule}
            className="h-px"
            style={{ width: 60, backgroundColor: "var(--color-accent)" }}
            aria-hidden="true"
          />

          {/* Section Heading */}
          <motion.h2
            variants={heading}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 4vw, 40px)",
              lineHeight: 1.2,
              color: "var(--color-ink)",
              marginTop: 24,
              marginBottom: 32,
            }}
          >
            Material Intent
          </motion.h2>

          {/* Body Paragraphs */}
          <motion.div
            variants={bodyContainer}
            className="flex flex-col"
            style={{ gap: 24, maxWidth: "65ch" }}
          >
            <motion.p
              variants={paragraph}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                lineHeight: 1.65,
                color: "var(--color-ink)",
              }}
            >
              We build for the analog ritualist. For the work that requires a slower pace and the physical quiet necessary for deep reflection.
            </motion.p>

            <motion.p
              variants={paragraph}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                lineHeight: 1.65,
                color: "var(--color-ink)",
              }}
            >
              Our paper is milled in the alpine region of France, selected for a heavy tooth that rewards the pressure of a pen. Every notebook is Smyth-sewn and bound in Japanese ateliers to ensure a perfect lay-flat opening, with a focus on structural integrity over decorative excess.
            </motion.p>

            <motion.p
              variants={paragraph}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                lineHeight: 1.65,
                color: "var(--color-ink)",
              }}
            >
              This object is a guarantee of tactile focus. It is a permanent repository for work that matters.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
