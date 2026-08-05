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

  const fadeIn = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.6, ease: "easeOut", delay },
        };

  return (
    <motion.section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden hero-scrim"
      style={{
        backgroundImage: "url(/images/archival-book.jpg)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      {...sectionMotion}
    >
      <style>{`
        /* Scrim overlay — pseudo-element per spec (AC4) */
        .hero-scrim::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          background-color: var(--color-ink);
          opacity: 0.7;
        }

        /* Canonical display token: 88px mobile / 120px desktop (AC5, AC10) */
        .hero-display {
          font-family: var(--font-display);
          font-size: 88px;
          line-height: 0.94;
          letter-spacing: -0.01em;
          color: var(--color-canvas);
        }
        @media (min-width: 768px) {
          .hero-display {
            font-size: 120px;
          }
        }

        /* Body token (AC6) */
        .hero-body {
          font-family: var(--font-body);
          font-size: 17px;
          line-height: 1.65;
          color: var(--color-text-muted);
          text-wrap: balance;
        }

        /* Status label token */
        .hero-label {
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.2;
          letter-spacing: 0.02em;
          color: var(--color-canvas);
        }

        /* Accent CTA: no radius per design tokens (AC7, AC10) */
        .hero-cta {
          border-radius: 0px;
          background-color: var(--color-accent);
          color: var(--color-canvas);
        }
        .hero-cta:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px var(--color-accent), 0 0 0 4px var(--color-ink);
        }

        /* prefers-reduced-motion (AC9) */
        @media (prefers-reduced-motion: reduce) {
          .hero-scrim * {
            animation-duration: 0.001s !important;
            transition-duration: 0.001s !important;
          }
        }
      `}</style>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-32 text-center md:px-8">
        <motion.span className="hero-label mb-6 font-medium" {...fadeIn(0.1)}>
          Preview: Launching 2026
        </motion.span>

        <motion.h1 className="hero-display" {...fadeIn(0.2)}>
          Margin
        </motion.h1>

        <motion.p className="hero-body mt-8 max-w-lg" {...fadeIn(0.3)}>
          The archival alternative to the disposable digital note. A physical vessel for permanent thought.
        </motion.p>

        <motion.a
          href="#registry"
          className="hero-cta mt-12 inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-opacity duration-200 hover:opacity-90"
          {...fadeIn(0.4)}
        >
          Join the Registry
        </motion.a>
      </div>
    </motion.section>
  );
}
