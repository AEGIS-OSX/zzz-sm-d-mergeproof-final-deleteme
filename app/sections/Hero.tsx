"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number = 0) => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.6,
      ease: "easeOut",
      delay: prefersReducedMotion ? 0 : delay,
    },
  });

  return (
    <>
      <style>{`
        .hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: var(--color-scrim, rgba(26, 26, 26, 0.7));
          z-index: 1;
        }
        .hero-cta {
          background-color: var(--color-accent, #B85C4F);
          color: var(--color-text-primary, #FAF9F6);
          border-radius: 0px;
          transition: opacity 200ms ease;
        }
        .hero-cta:hover {
          opacity: 0.9;
        }
        .hero-cta:focus-visible {
          outline: none;
          box-shadow: 0 0 0 2px var(--color-canvas, #FAF9F6), 0 0 0 4px var(--color-accent, #B85C4F);
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-section {
            background-attachment: scroll !important;
          }
        }
      `}</style>
      <motion.section
        id="hero"
        aria-label="Hero"
        className="hero-section relative flex w-full items-center justify-center overflow-hidden"
        style={{
          minHeight: "100dvh",
          backgroundImage: "url(/images/archival-book.jpg)",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-32 text-center md:px-8">
          <motion.span
            className="mb-6 font-medium"
            style={{
              fontSize: "14px",
              lineHeight: "1.2",
              color: "var(--color-text-muted, #8C8C8C)",
            }}
            {...fadeUp(0)}
          >
            Preview: Launching 2026
          </motion.span>

          <motion.h1
            className="font-display"
            style={{
              fontSize: "clamp(88px, 10vw, 120px)",
              lineHeight: "0.94",
              letterSpacing: "-0.01em",
              color: "var(--color-text-primary, #FAF9F6)",
            }}
            {...fadeUp(0.1)}
          >
            Margin
          </motion.h1>

          <motion.p
            className="mt-8 max-w-lg text-balance"
            style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: "17px",
              lineHeight: "1.65",
              color: "var(--color-text-muted, #8C8C8C)",
            }}
            {...fadeUp(0.2)}
          >
            The archival alternative to the disposable digital note. A physical vessel for permanent thought.
          </motion.p>

          <motion.a
            href="#registry"
            className="hero-cta mt-12 inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide"
            {...fadeUp(0.3)}
          >
            Join the Registry
          </motion.a>
        </div>
      </motion.section>
    </>
  );
}
