"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const sectionMotion = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.6, ease: "easeOut" },
      };

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: "easeOut", delay },
        };

  return (
    <motion.section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden before:absolute before:inset-0 before:z-[1] before:bg-[var(--color-ink)]/70 before:content-['']"
      style={{
        backgroundImage: "url(/images/archival-book.jpg)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      {...sectionMotion}
    >
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-32 text-center md:px-8">
        <motion.span
          className="mb-6 font-mono font-medium text-[var(--color-canvas)]"
          style={{
            fontSize: "14px",
            lineHeight: "1.2",
            letterSpacing: "0.02em",
          }}
          {...fadeUp(0.1)}
        >
          Preview: Launching 2026
        </motion.span>

        <motion.h1
          className="font-display text-[88px] leading-[0.94] tracking-[-0.01em] text-[var(--color-canvas)] md:text-[120px]"
          {...fadeUp(0.2)}
        >
          Margin
        </motion.h1>

        <motion.p
          className="mt-8 max-w-lg text-balance text-[var(--color-pencil)]"
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: "17px",
            lineHeight: "1.65",
          }}
          {...fadeUp(0.3)}
        >
          The archival alternative to the disposable digital note. A physical vessel for permanent thought.
        </motion.p>

        <motion.a
          href="#registry"
          className="mt-12 inline-flex items-center justify-center bg-[var(--color-accent)] px-8 py-4 text-sm font-medium tracking-wide text-[var(--color-canvas)] transition-opacity duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-ink)]"
          style={{ borderRadius: "0px" }}
          {...fadeUp(0.4)}
        >
          Join the Registry
        </motion.a>
      </div>
    </motion.section>
  );
}
